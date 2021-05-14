module.exports = {
  'env': {
    'browser': true,
    'commonjs': true,
    'es2021': true
  },
  'extends': 'eslint:recommended',
  'parserOptions': {
    'ecmaVersion': 12
  },
  'globals': {
    'it': 'false',
    'describe': 'false',
    'process': 'false'
  },
  'rules': {
    'indent': [
      'error',
      2
    ],
    'linebreak-style': [
      'error',
      'windows'
    ],
    'quotes': [
      'error',
      'single'
    ],
    'semi': [
      'error',
      'always'
    ],
    'no-multi-spaces': ['error'],
    'brace-style': ['error', 'stroustrup'],
    'curly': ['error', 'all'],
    'no-inline-comments': ['error'],
    'prefer-destructuring': ['error', { 'object': true, 'array': false }],
    'object-curly-spacing': ['error', 'always']
  }
};
  