'use strict'

const util = require('util')
const { exec } = require('child_process')
const standardx = require('standardx')
const stylelint = require('stylelint')

const asyncExec = util.promisify(exec)

/*
 * Shell output formatting
 */
const reset = '\x1b[0m'
const bold = '\x1b[1m'
const red = reset + '\x1b[31m'
const green = reset + '\x1b[32m'
const error = (...args) => formatTaskOutput(...args, red, '\u2717')
const success = (...args) => formatTaskOutput(...args, green, '\u2713')

function formatTaskOutput (strings, task, color, uIcon) {
  const icon = `${color}${bold}${uIcon}`
  const formattedStr = strings.map(str => `${color}${str}`)
  const highlightedTaskName = `${bold}${task}`
  return `
${icon} ${formattedStr[0]}${highlightedTaskName}${formattedStr[1]}
${reset}`
}

/*
 * Helper methods
 */
function outputFilenamesToArray ({ stdout }) {
  return stdout ? stdout.trim().split('\n') : []
}

function sanitizePrettierStandardOutput (filenames) {
  return filenames.map(f => f.replace(/(?![\S+js]).*$/gi, ''))
}

function formatStandardJsResults (results) {
  return { message: 'standardJS was unable to fix all the reported errors.' }
}

function formatStylelintResults (results) {
  return {
    message: `stylelint was unable to fix all the reported errors.\n
${results.toString()}`
  }
}

/*
 * Git operations
 */
const gitAdd = filenames => `git add ${filenames}`

const gitDiff = glob =>
  `git --no-pager diff --staged --diff-filter=d --name-only --relative HEAD '${glob}'`

function getStagedGlob (glob) {
  return asyncExec(gitDiff(glob))
    .then(outputFilenamesToArray)
    .catch(err => handleError('getStagedGlob', err))
}

function stageFiles (filenames) {
  return asyncExec(gitAdd(filenames.join(' ')))
    .then(() => Promise.resolve(filenames))
    .catch(err => handleError('stageFiles', err))
}

/*
 * JS linting and formatting operations
 */
function formatJs (staged) {
  return asyncExec(`npx prettier-standard ${staged.join(' ')}`)
    .then(outputFilenamesToArray)
    .then(sanitizePrettierStandardOutput)
    .then(stageFiles)
    .catch(err => handleError('formatJs', err))
}

function lintJs (staged) {
  return new Promise((resolve, reject) => {
    standardx.lintFiles(
      staged,
      {
        fix: true,
        globals: ['describe', 'expect', 'it', 'jest', 'test'],
        parser: 'babel-eslint'
      },
      (err, { results, errorCount } = {}) => {
        if (err) reject(err)
        if (errorCount) reject(formatStandardJsResults(results))

        resolve(true)
      }
    )
  })
}

async function handleJsFiles () {
  try {
    const stagedJs = await getStagedGlob('*.js')

    if (stagedJs && stagedJs.length) {
      const formattedFiles = await formatJs(stagedJs)
      const lintResult = await lintJs(formattedFiles)
      if (lintResult) handleSuccess('handleJsFiles')
    }
  } catch (err) {
    handleError('handleJsFiles', err)
  }
}

/*
 * CSS linting and formatting operations
 */
function lintCss (staged) {
  return stylelint
    .lint({
      configFile: 'stylelint.config.js',
      files: staged,
      fix: true
    })
    .then(({ errored, output }) =>
      errored
        ? Promise.reject(formatStylelintResults(output))
        : Promise.resolve(staged)
    )
    .then(stageFiles)
    .catch(err => handleError('lintCss', err))
}

async function handleCssFiles () {
  try {
    const stagedCss = await getStagedGlob('*.css')

    if (stagedCss && stagedCss.length) {
      const lintResult = await lintCss(stagedCss)
      if (lintResult) handleSuccess('handleCssFiles')
    }
  } catch (err) {
    handleError('handleCssFiles', err)
  }
}

/*
 * Success handling
 */
function handleSuccess (task) {
  console.log(success`Task ${task} has been successfully executed.`)
}

/*
 * Error handling
 */
function handleError (task, { message: errorMessage }) {
  console.log(error`The following error occurred while running ${task} task:`)
  console.group()
  console.log(errorMessage)
  console.groupEnd()

  abort()
}

function abort () {
  console.log(`${bold}\nAborting commit.\n`)
  process.exitCode = 1
}

/*
 * Exports
 */
module.exports = {
  handleCssFiles,
  handleJsFiles
}
