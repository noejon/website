# VS Code autosave using Eslint and Prettier for typescript

## Setup

### Install

We will start by installing the dev dependencies:

```zsh
npm install --save-dev eslint prettier @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-config-prettier eslint-plugin-prettier
```

What did we just install:
- `eslint`: 
- `@typescript-eslint/parser`:
- `@typescript-eslint/eslint-plugin`:
- `prettier`:
- `eslint-config-prettier`:
- `eslint-plugin-prettier`:

```zsh
touch .eslintrc
```

```json
{
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": 2020,
    "sourceType": "module"
  },
  "extends": [
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended"
  ]
}
```

We set up the parser to use the latest ecmascript syntax, which is at the time of writting, 2020. For more information, check the [official documentation](https://eslint.org/docs/user-guide/configuring#specifying-parser-options). 

`ecmaVersion: 2020`: use the latest ES syntax.
`sourceType: "module"`: We let eslint know that we are using modules.

When using prettier, we can setup a `.prettierrc` file to configure prettier. We can also do that directly into our `./eslintrc` file, in the rules. We implement is as follows

```zsh
"rules": {
  "prettier/prettier": [
    "error",
    {
      "singleQuote": true
    }
  ]
}
```

In this case we have just told eslint that we want our strings to be surrounded with single quotes when possible.
[Here](https://prettier.io/docs/en/options.html) is the list of available rules options for prettier.

## Autoformat on save in VS Code

We open the VS Code settings and search for `onSave`. We then click on the `Edit in settings.json` link.
We add the following configuration:

```json
"editor.codeActionsOnSave": {
  "source.fixAll.eslint": true
},
```