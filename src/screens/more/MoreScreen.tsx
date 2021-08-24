import styled from "@emotion/native";
import React from "react";
import { Text } from "react-native";

const MoreContainer = styled.View({
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fbfbfb",
});

export const MoreScreen: React.FC = () => {
    return (
        <MoreContainer>
            <Text>More</Text>
        </MoreContainer>
    );
};
