import { Feather } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { colors, screens } from "src/constants";
import { HomeStackNavigator } from "./home-stack-navigator";
import { MeditationStackNavigator } from "./meditation-stack-navigator";
import { MoreStackNavigator } from "./more-stack-navigator";
import { YogaStackNavigator } from "./yoga-stack-navigator";

const MainTab = createBottomTabNavigator();
export const MainTabNavigator: React.FC = () => {
    return (
        <MainTab.Navigator
            tabBarOptions={{
                activeTintColor: colors.primaryDark,
                inactiveTintColor: "#000",
                labelStyle: {
                    fontSize: 8,
                },
            }}
        >
            <MainTab.Screen
                name={screens.home}
                component={HomeStackNavigator}
                options={{
                    title: "HOME",
                    tabBarIcon: ({ color, size }) => {
                        return <Feather name="home" size={size} color={color} />;
                    },
                }}
            />
            <MainTab.Screen
                name={screens.meditation}
                component={MeditationStackNavigator}
                options={{
                    title: "MEDITATION",
                    tabBarIcon: ({ color, size }) => {
                        return <Feather name="sun" size={size} color={color} />;
                    },
                }}
            />
            <MainTab.Screen
                name={screens.yoga}
                component={YogaStackNavigator}
                options={{
                    title: "YOGA",
                    tabBarIcon: ({ color, size }) => {
                        return <Feather name="heart" size={size} color={color} />;
                    },
                }}
            />
            <MainTab.Screen
                name={screens.more}
                component={MoreStackNavigator}
                options={{
                    title: "MORE",
                    tabBarIcon: ({ color, size }) => {
                        return <Feather name="menu" size={size} color={color} />;
                    },
                }}
            />
        </MainTab.Navigator>
    );
};
