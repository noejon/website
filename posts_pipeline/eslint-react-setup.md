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