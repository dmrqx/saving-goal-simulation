module.exports = function babelConfig ({ cache, env }) {
  cache.invalidate(() => process.env.NODE_ENV)

  return {
    presets: [
      [
        '@babel/preset-env',
        {
          debug: process.env.BABEL_DEBUG,
          modules: env('test') ? 'commonjs' : 'auto',
          useBuiltIns: 'usage',
          corejs: {
            version: 3,
            proposals: true
          },
          targets: {
            node: 'current'
          }
        }
      ],
      '@babel/preset-react'
    ],
    plugins: [
      '@babel/plugin-proposal-class-properties',
      [
        'react-css-modules',
        {
          autoResolveMultipleImports: true,
          exclude: 'node_modules',
          generateScopedName: env('test')
            ? '[local]'
            : '[local]___[sha1:hash:hex:8]'
        }
      ],
      [
        'babel-plugin-module-resolver',
        {
          root: ['./src/'],
          alias: {
            '@origin': './src/'
          },
          extensions: ['.js', '.svg']
        }
      ]
    ]
  }
}
