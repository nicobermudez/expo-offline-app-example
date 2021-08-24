import styled from "@emotion/native";
import React from "react";
import { Text } from "react-native";
import { colors } from "src/constants";

const MeditationContainer = styled.View({
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.whiteMedium,
});

export const MeditationScreen: React.FC = () => {
    return (
        <MeditationContainer>
            <Text>Meditate</Text>
        </MeditationContainer>
    );
};
