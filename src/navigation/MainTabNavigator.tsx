import { Feather } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigatorScreenParams } from "@react-navigation/native";
import { BottomTabBar } from "@react-navigation/bottom-tabs";
import React from "react";
import {
    CharactersStackNavigator,
    CharactersStackParamList,
} from "./CharactersStackNavigator";
import { HomeScreen, MoreScreen } from "@app/screens";
import { OfflineBanner } from "@app/components";

export type MainTabParamList = {
    Home: undefined;
    Characters: NavigatorScreenParams<CharactersStackParamList>;
    More: undefined;
};

const MainTab = createBottomTabNavigator<MainTabParamList>();
export const MainTabNavigator: React.FC = () => {
    return (
        <MainTab.Navigator
            tabBar={(props) => (
                <>
                    <OfflineBanner />
                    <BottomTabBar {...props} />
                </>
            )}
        >
            <MainTab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ color, size }) => {
                        return (
                            <Feather name="home" size={size} color={color} />
                        );
                    },
                }}
            />
            <MainTab.Screen
                name="Characters"
                component={CharactersStackNavigator}
                options={{
                    tabBarIcon: ({ color, size }) => {
                        return (
                            <Feather name="users" size={size} color={color} />
                        );
                    },
                }}
            />
            <MainTab.Screen
                name="More"
                component={MoreScreen}
                options={{
                    tabBarIcon: ({ color, size }) => {
                        return (
                            <Feather name="menu" size={size} color={color} />
                        );
                    },
                }}
            />
        </MainTab.Navigator>
    );
};
