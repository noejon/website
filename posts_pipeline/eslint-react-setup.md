```zsh
npm install --save-dev eslint eslint-plugin-react
```

`touch .eslintrc`

```json
"parserOptions": {
  "ecmaVersion": 2020,
  "sourceType": "module",
  "ecmaFeatures": {
    "jsx": true
  }
},
"settings": {
  "react": {
    "version": "detect"
  }
},
"extends": [
  "plugin:react/recommended"
]
```

If you are using the latest `babel` version or the latest `preset-env`, there is no need to have `import React from 'react'` in scope, so we can remove the [react-in-jsx-scope](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/react-in-jsx-scope.md) rule.

```json
"rules": {
  "react/react-in-jsx-scope": 0
}
```
