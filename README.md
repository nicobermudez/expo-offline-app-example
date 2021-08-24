# Expo example offline mode app

React Native / Typescript app with Expo's [Managed Workflow](https://docs.expo.io/introduction/managed-vs-bare/ "Managed Workflow") and [React Navigation](https://reactnavigation.org/ "React Navigation")

This app is configured with GraphQL, Apollo Client, GraphQL Codegen, and [Apollo Cache Persist](https://github.com/apollographql/apollo-cache-persist), which is outlined in this blog post:

https://medium.com/@nicobermudez_co/optimizing-react-native-offline-mode-using-apollo-cache-persist-a7723c7e8416

For our GraphQL server, we will be querying Rick and Morty data using [Rick and Morty GraphQL API](https://studio.apollographql.com/sandbox/explorer?_gl=1%2A882qlz%2A_ga%2AMTczNTA0Mzc2NS4xNTg2MjkyMDY1%2A_ga_0BGG5V2W2K%2AMTYyOTgzNTU3My42OC4xLjE2Mjk4MzU3MTUuMA..&endpoint=https%3A%2F%2Frickandmortyapi.com%2Fgraphql)

# Getting started

1. Install dependencies with `yarn install`
2. Generate the GraphQL types with `yarn generate`
3. Run expo with `yarn start`
4. Run ios with `yarn ios`
5. Run android with `yarn android`

# Expo

This project takes advantage of Expo's Managed Workflow. To switch to a Bare Workflow, run `yarn eject`.
