import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { screens, fontSizes } from "src/constants";
import { MoreScreen } from "src/screens";

const headerTitleStyle = {
    fontSize: fontSizes.large,
    marginLeft: 32,
    marginRight: 32,
};

const headerTitleAlign = "center";

const MoreStack = createStackNavigator();
export const MoreStackNavigator: React.FC = () => {
    return (
        <MoreStack.Navigator initialRouteName={screens.more}>
            <MoreStack.Screen
                name={screens.more}
                component={MoreScreen}
                options={{
                    headerTitleAlign,
                    headerTitleStyle,
                }}
            />
        </MoreStack.Navigator>
    );
};
