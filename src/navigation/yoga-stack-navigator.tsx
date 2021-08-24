import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { screens, fontSizes } from "src/constants";
import { YogaScreen } from "src/screens";

const headerTitleStyle = {
    fontSize: fontSizes.large,
    marginLeft: 32,
    marginRight: 32,
};

const headerTitleAlign = "center";

const YogaStack = createStackNavigator();
export const YogaStackNavigator: React.FC = () => {
    return (
        <YogaStack.Navigator initialRouteName={screens.yoga}>
            <YogaStack.Screen
                name={screens.yoga}
                component={YogaScreen}
                options={{
                    headerTitleAlign,
                    headerTitleStyle,
                }}
            />
        </YogaStack.Navigator>
    );
};
