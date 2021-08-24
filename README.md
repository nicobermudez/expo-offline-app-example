# Expo example offline mode app

React Native / Typescript app with Expo's [Managed Workflow](https://docs.expo.io/introduction/managed-vs-bare/ "Managed Workflow") and [React Navigation](https://reactnavigation.org/ "React Navigation")

This app is configured with GraphQL, Apollo Client, GraphQL Codegen, and [Apollo Cache Persist](https://github.com/apollographql/apollo-cache-persist), which is outlined in this blog post:

https://medium.com/@nicobermudez_co/optimizing-react-native-offline-mode-using-apollo-cache-persist-a7723c7e8416

# Getting started

1. Install dependencies with `yarn install`
2. Generate the GraphQL types with `yarn generate`
3. Run expo with `yarn start`
4. Run ios with `yarn ios`
5. Run android with `yarn android`

# Expo

This project takes advantage of Expo's Managed Workflow. To switch to a Bare Workflow, run `yarn eject`.
