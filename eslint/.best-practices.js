module.exports = {
    rules: {
      "array-bracket-spacing": [
        2,
        "never",
        {
          "singleValue": true
        }
      ],
      "camelcase": [
        2,
        {
          "properties": "never"
        }
      ],
      "indent": [
        2,
        2,
        {
          "SwitchCase": 1
        }
      ],
      'linebreak-style': [
        'error',
        'unix'
      ],
      'quotes': [
        'error',
        'single'
      ],
      'semi': [
        2,
        "always"
      ],
      "comma-spacing": [
        2,
        {
          "before": false,
          "after": true
        }
      ],
      complexity: ['off', 11],
      curly: ['error', 'multi-line'],
      'dot-notation': ['error', { allowKeywords: true }],
      'dot-location': ['error', 'property'],
      eqeqeq: ['error', 'always', { null: 'ignore' }],
      'max-params': ['error', 3],
      'max-len': [
        'error',
        {
          'code': 100,
          'ignoreComments': true,
          'ignoreTrailingComments': true,
          'ignoreUrls': true,
          'ignoreStrings': false,
          'ignoreTemplateLiterals': false,
          'ignoreRegExpLiterals': false
        }
      ],
      'no-alert': 'warn',
      'no-div-regex': 'off',
      'no-case-declarations': 'error',
      'no-console': 'warn',
      'no-debugger': 'error',
      'no-duplicate-case': 'error',
      'no-empty': 'error',
      'no-empty-function': ['error', {
        allow: [
          'arrowFunctions',
          'functions',
          'methods',
        ]
      }],
      'no-empty-pattern': 'error',
      'no-extra-parens': ['off', 'all', {
        conditionalAssign: true,
        nestedBinaryExpressions: false,
        returnAssign: false,
        ignoreJSX: 'all', // delegate to eslint-plugin-react
        enforceForArrowConditionals: false,
      }],
      'no-eval': 'error',
      'no-global-assign': ['error', { exceptions: [] }],
      'no-labels': ['error', { allowLoop: false, allowSwitch: false }],
      "no-mixed-spaces-and-tabs": 2,
      'no-multi-spaces': ['error', {
        ignoreEOLComments: false,
      }],
      "no-multiple-empty-lines": 2,
      "no-multi-str": 2,
      "no-new-func": 0,
      "no-new-wrappers": 0,
      'no-param-reassign': ['error', {
        props: true,
        ignorePropertyModificationsFor: [
          'acc', // for reduce accumulators
          'accumulator', // for reduce accumulators
          'e', // for e.returnvalue
          'ctx', // for Koa routing
          'req', // for Express requests
          'request', // for Express requests
          'res', // for Express responses
          'response', // for Express responses
          '$scope', // for Angular 1 scopes
          'staticContext', // for ReactRouter context
        ]
      }],
      "no-plusplus": 0,
      "no-proto": 0,
      'no-redeclare': 'error',
      'no-regex-spaces': 'error',
      'no-return-assign': ['error', 'always'],
      "no-script-url": 0,
      'no-self-assign': ['error', {
        props: true,
      }],
      'no-self-compare': 'error',
      "no-shadow": 2,
      "no-spaced-func": 2,
      'no-throw-literal': 'error',
      "no-trailing-spaces": 2,
      "no-undef": 2,
      'no-unmodified-loop-condition': 'off',
      "no-unused-vars": 0,
      'no-useless-catch': 'error',
      'no-useless-concat': 'error',
      'no-useless-escape': 'error',
      'no-useless-return': 'error',
      "no-with": 2,
      'no-void': 'error',
      'valid-jsdoc': 'off',
      radix: 'error',
      'require-await': 'off',
      'require-unicode-regexp': 'off',
      "semi-spacing": [
        2,
        {
          "before": false,
          "after": true
        }
      ],
      "space-in-parens": [
        2,
        "never"
      ],
      'vars-on-top': 'error',
      'wrap-iife': ['error', 'outside', { functionPrototypeMethods: false }],
      'no-implicit-globals': 'off',
    }
  };
  
  
  
  
  
  
  
  
  
  
  
  ▲
  Jot something down
  
  
  
  
  
  
  
  
  