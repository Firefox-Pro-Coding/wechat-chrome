const path = require('path')

function resolve(p) {
  return path.join(__dirname, p)
}

module.exports = {
  'root': true,

  'extends': [
    './lintRules/eslint/eslint.js',
  ],

  'env': {
    'es6': true,
    'node': true,
    'browser': true,
  },

  'settings': {
    'import/resolver': {
      'webpack': {
        'config': require('./build/webpack.base.conf.js')
      },
    },
  },

  'globals': {
    'App': true,
    'Page': true,
    'wx': true,
    'getApp': true,
    'getPage': true,
    'requirePlugin': true
  },

  'rules': {
    'no-shadow': [
      'error',
      {
        'allow': ['state'],
      },
    ],
  },
}
