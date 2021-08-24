# expo-typescript-template
Template for a React Native / Typescript application with Expo's [Managed Workflow](https://docs.expo.io/introduction/managed-vs-bare/ "Managed Workflow") and [React Navigation](https://reactnavigation.org/ "React Navigation")

# Getting started
1. Install dependencies with `yarn install`
2. Run expo with `yarn start`
3. Run ios with `yarn ios`
4. Run android with `yarn android`

# Linting
This project uses ESLint with a TypeScript plugin for linting. To run the linter use `yarn lint`. The rules are the default recommended typescript and javascript rules.

The vs code plugin by default only targets .js files. To change this open vs code settings `cmd + ,` or `ctrl + ,` and find the eslint json settings. Add the following:

```
"eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact"
]
```

# Expo
This project takes advantage of Expo's Managed Workflow. To switch to a Bare Workflow, run `yarn eject`.
