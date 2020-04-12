module.exports = {
  modules: false,
  plugins: {
    'postcss-preset-env': {
      autoprefixer: { grid: 'autoplace' },
      features: {
        'custom-properties': false
      }
    },
    'postcss-css-variables': {
      preserve: true
    },
    'postcss-modules': {
      generateScopedName: '[local]___[sha1:hash:hex:8]'
    }
  }
}
