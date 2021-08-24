import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { screens, fontSizes } from "src/constants";
import { MeditationScreen } from "src/screens";

const headerTitleStyle = {
    fontSize: fontSizes.large,
    marginLeft: 32,
    marginRight: 32,
};

const headerTitleAlign = "center";

const MeditationStack = createStackNavigator();
export const MeditationStackNavigator: React.FC = () => {
    return (
        <MeditationStack.Navigator initialRouteName={screens.meditation}>
            <MeditationStack.Screen
                name={screens.meditation}
                component={MeditationScreen}
                options={{
                    headerTitleAlign,
                    headerTitleStyle,
                }}
            />
        </MeditationStack.Navigator>
    );
};
