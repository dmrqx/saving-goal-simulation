import React from 'react'

import GitHubMark from './github-mark.svg'
import './Footer.module.css'

export default function Footer () {
  return (
    <footer styleName='site-footer__primary'>
      <a
        href='https://github.com/dmrqx/saving-goal-simulation'
        rel='noopener noreferrer'
        styleName='repository-link'
        target='_blank'
      >
        Check the code on GitHub&ensp;
        <GitHubMark styleName='github-mark' />
      </a>
    </footer>
  )
}
