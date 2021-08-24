import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { MainTabNavigator } from "src/navigation";

function App() {
    return (
        <NavigationContainer>
            <MainTabNavigator />
        </NavigationContainer>
    );
}

export default App;
