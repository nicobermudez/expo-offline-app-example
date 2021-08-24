import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { screens, fontSizes } from "src/constants";
import { HomeScreen } from "src/screens";

const headerTitleStyle = {
    fontSize: fontSizes.large,
    marginLeft: 32,
    marginRight: 32,
};

const headerTitleAlign = "center";

const HomeStack = createStackNavigator();
export const HomeStackNavigator: React.FC = () => {
    return (
        <HomeStack.Navigator initialRouteName={screens.home}>
            <HomeStack.Screen
                name={screens.home}
                component={HomeScreen}
                options={{
                    headerTitleAlign,
                    headerTitleStyle,
                }}
            />
        </HomeStack.Navigator>
    );
};
