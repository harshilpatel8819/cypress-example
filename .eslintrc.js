module.exports = {
  "env": {
      "browser": true,
      "es6": true,
      "node": true
  },
  "extends": [
      "eslint:recommended",
      "plugin:react/recommended",
      "prettier"
  ],
  "parser": "@typescript-eslint/parser",
  "plugins": [
      "@typescript-eslint",
      "react",
      "react-native"
  ],
  "parserOptions": {
      "ecmaVersion": 12,
      "sourceType": "module",
      "ecmaFeatures": {
          "jsx": true,
          "modules": true
      }
  },
  "globals": {
      "StyleHatch": true,
      "Mmenu": true,
      "Shopify": true,
      "Cookies": true,
      "React": true,
      "NodeJS": true,
      "slate": true,
      "$jq": true,
      "uploadcare": true,
      "Colcade": true,
      "Vimeo": true,
      "theme": true,
      "JSX": "readonly"
  },
  "rules": {
      "no-warning-comments": "off",
      "react/react-in-jsx-scope": "off",
      "lines-between-class-members": [
          "error",
          "always",
          {
              "exceptAfterSingleLine": true
          }
      ],
      "accessor-pairs": "error",
      "array-bracket-newline": "off",
      "array-bracket-spacing": [
          "error",
          "never"
      ],
      "array-callback-return": "error",
      "array-element-newline": "off",
      "arrow-body-style": "off",
      "arrow-parens": "error",
      "arrow-spacing": [
          "error",
          {
              "after": true,
              "before": true
          }
      ],
      "block-scoped-var": "error",
      "block-spacing": "error",
      "brace-style": "error",
      "callback-return": "error",
      "capitalized-comments": [
          "error",
          "never"
      ],
      "class-methods-use-this": "error",
      "comma-dangle": "off",
      "comma-spacing": "off",
      "comma-style": [
          "error",
          "last"
      ],
      "complexity": [
          "error",
          {
              "max": 40
          }
      ],
      "computed-property-spacing": [
          "error",
          "never"
      ],
      "consistent-return": "error",
      "consistent-this": "error",
      "curly": "error",
      "default-case": "error",
      "dot-location": [
          "error",
          "property"
      ],
      "dot-notation": "error",
      "eol-last": "error",
      "eqeqeq": "error",
      "func-call-spacing": "error",
      "func-name-matching": "error",
      "func-names": "off",
      "func-style": "error",
      "function-paren-newline": "off",
      "generator-star-spacing": "error",
      "global-require": "error",
      "guard-for-in": "error",
      "handle-callback-err": "error",
      "id-blacklist": "error",
      "id-match": "error",
      "implicit-arrow-linebreak": "off",
      "indent": "off",
      "indent-legacy": "off",
      "jsx-quotes": "error",
      "key-spacing": "error",
      "keyword-spacing": "error",
      "line-comment-position": "off",
      "lines-around-comment": "off",
      "lines-around-directive": "error",
      "max-classes-per-file": "error",
      "max-depth": "error",
      "max-len": "off",
      "max-lines": "off",
      "max-lines-per-function": "off",
      "max-nested-callbacks": "error",
      "max-params": [
          "error",
          {
              "max": 6
          }
      ],
      "max-statements": [
          "error",
          {
              "max": 40
          }
      ],
      "max-statements-per-line": "error",
      "multiline-comment-style": [
          "error",
          "bare-block"
      ],
      "multiline-ternary": "off",
      "new-cap": "error",
      "new-parens": "error",
      "newline-after-var": "off",
      "newline-before-return": "off",
      "newline-per-chained-call": "off",
      "no-alert": "error",
      "no-array-constructor": "error",
      "no-async-promise-executor": "error",
      "no-await-in-loop": "error",
      "no-bitwise": "error",
      "no-buffer-constructor": "error",
      "no-caller": "error",
      "no-catch-shadow": "error",
      "no-confusing-arrow": "off",
      "no-console": "off",
      "no-continue": "error",
      "no-div-regex": "error",
      "no-duplicate-imports": "error",
      "no-else-return": "error",
      "no-empty-function": "error",
      "no-eq-null": "error",
      "no-eval": "error",
      "no-extend-native": "error",
      "no-extra-bind": "error",
      "no-extra-label": "error",
      "no-extra-parens": "off",
      "no-floating-decimal": "error",
      "no-implicit-coercion": "error",
      "no-implicit-globals": "error",
      "no-implied-eval": "error",
      "no-inline-comments": "off",
      "no-iterator": "error",
      "no-label-var": "error",
      "no-labels": "error",
      "no-lone-blocks": "error",
      "no-lonely-if": "error",
      "no-misleading-character-class": "error",
      "no-mixed-operators": "error",
      "no-mixed-requires": "error",
      "no-multi-assign": "error",
      "no-multi-spaces": "error",
      "no-multi-str": "error",
      "no-multiple-empty-lines": "error",
      "no-native-reassign": "error",
      "no-negated-condition": "error",
      "no-negated-in-lhs": "error",
      "no-nested-ternary": "error",
      "no-new": "error",
      "no-new-func": "error",
      "no-new-object": "error",
      "no-new-require": "error",
      "no-new-wrappers": "error",
      "no-octal-escape": "error",
      "no-param-reassign": "error",
      "no-path-concat": "error",
      "no-process-env": "error",
      "no-process-exit": "error",
      "no-proto": "error",
      "no-prototype-builtins": "error",
      "no-restricted-globals": "error",
      "no-restricted-imports": [
          "error",
          {
            "paths": [
              {
                "name": "react",
                "importNames": ["default"],
                "message": "React default is automatically imported by webpack."
              }
            ]
          }
        ],
      "no-restricted-modules": "error",
      "no-restricted-properties": "error",
      "no-restricted-syntax": "error",
      "no-return-assign": "off",
      "no-return-await": "error",
      "no-script-url": "error",
      "no-self-compare": "error",
      "no-sequences": "error",
      "no-shadow": "error",
      "no-shadow-restricted-names": "error",
      "no-spaced-func": "error",
      "no-sync": "error",
      "no-tabs": [
          "error",
          {
              "allowIndentationTabs": true
          }
      ],
      "no-template-curly-in-string": "error",
      "no-ternary": "off",
      "no-throw-literal": "error",
      "no-trailing-spaces": "error",
      "no-undef-init": "error",
      "no-undefined": "error",
      "no-unmodified-loop-condition": "error",
      "no-unneeded-ternary": "error",
      "no-unused-vars": [
          "error",
          {
              "argsIgnorePattern": "^_"
          }
      ],
      "no-use-before-define": "error",
      "no-useless-call": "error",
      "no-useless-computed-key": "error",
      "no-useless-concat": "error",
      "no-useless-constructor": "error",
      "no-useless-rename": "error",
      "no-useless-return": "error",
      "no-var": "off",
      "no-void": "error",
      "no-whitespace-before-property": "error",
      "no-with": "error",
      "nonblock-statement-body-position": "error",
      "object-curly-newline": "error",
      "object-curly-spacing": [
          "error",
          "always"
      ],
      "object-shorthand": "off",
      "one-var": "off",
      "one-var-declaration-per-line": "error",
      "operator-assignment": "error",
      "operator-linebreak": "off",
      "padded-blocks": "off",
      "padding-line-between-statements": "error",
      "prefer-arrow-callback": "off",
      "prefer-const": "error",
      "prefer-destructuring": "error",
      "prefer-numeric-literals": "error",
      "prefer-object-spread": "error",
      "prefer-promise-reject-errors": "error",
      "prefer-reflect": "off",
      "prefer-rest-params": "off",
      "prefer-spread": "error",
      "prefer-template": "off",
      "quote-props": "off",
      "quotes": [
          "error",
          "single"
      ],
      "radix": "error",
      "react/jsx-no-undef": ["error", { "allowGlobals": true }],
      "require-atomic-updates": "error",
      "require-await": "error",
      "require-jsdoc": "off",
      "require-unicode-regexp": "off",
      "rest-spread-spacing": "error",
      "semi": "error",
      "semi-spacing": "error",
      "semi-style": [
          "error",
          "last"
      ],
      "sort-imports": "off",
      "sort-keys": "off",
      "sort-vars": "off",
      "space-before-blocks": "error",
      "space-before-function-paren": "off",
      "space-in-parens": [
          "error",
          "never"
      ],
      "space-infix-ops": "error",
      "space-unary-ops": "error",
      "spaced-comment": "off",
      "strict": "off",
      "switch-colon-spacing": "error",
      "symbol-description": "error",
      "template-curly-spacing": "error",
      "template-tag-spacing": "error",
      "unicode-bom": [
          "error",
          "never"
      ],
      "valid-jsdoc": [
          "error",
          {
              "requireReturn": false,
              "requireParamDescription": false,
              "requireReturnDescription": false
          }
      ],
      "vars-on-top": "error",
      "wrap-iife": "error",
      "wrap-regex": "error",
      "yield-star-spacing": "error",
      "yoda": [
          "error",
          "never"
      ]
  },
  "ignorePatterns":[".*","package.json","webpack.*","yarn*","wp-*"]
}
