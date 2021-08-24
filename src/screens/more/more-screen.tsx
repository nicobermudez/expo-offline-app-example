import styled from "@emotion/native";
import React from "react";
import { Text } from "react-native";
import { colors } from "src/constants";

const MoreContainer = styled.View({
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.whiteMedium,
});

export const MoreScreen: React.FC = () => {
    return (
        <MoreContainer>
            <Text>More</Text>
        </MoreContainer>
    );
};
