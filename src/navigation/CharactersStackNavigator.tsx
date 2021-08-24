import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { CharacterListScreen } from "@app/screens";

export type CharactersStackParamList = {
    CharacterList: undefined;
};

const CharactersStack = createStackNavigator<CharactersStackParamList>();
export const CharactersStackNavigator: React.FC = () => {
    return (
        <CharactersStack.Navigator initialRouteName="CharacterList">
            <CharactersStack.Screen
                name="CharacterList"
                component={CharacterListScreen}
                options={{
                    headerShown: false,
                }}
            />
        </CharactersStack.Navigator>
    );
};
