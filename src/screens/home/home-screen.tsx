import styled from "@emotion/native";
import React from "react";
import { Text } from "react-native";
import { colors } from "src/constants";

const HomeContainer = styled.View({
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.whiteMedium,
});

export const HomeScreen: React.FC = () => {
    return (
        <HomeContainer>
            <Text>Hey, Nico</Text>
        </HomeContainer>
    );
};
