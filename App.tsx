import { ApolloProvider } from "@apollo/client";
import { useInitializeClient } from "@app/graphql/useInitializeClient";
import { MainTabNavigator } from "@app/navigation";
import { NavigationContainer } from "@react-navigation/native";
import AppLoading from "expo-app-loading";
import React from "react";

export default function App() {
    const client = useInitializeClient();

    if (!client) {
        return <AppLoading />;
    }
    return (
        <ApolloProvider client={client}>
            <NavigationContainer>
                <MainTabNavigator />
            </NavigationContainer>
        </ApolloProvider>
    );
}
