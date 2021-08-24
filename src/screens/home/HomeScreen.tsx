import styled from "@emotion/native";
import React from "react";
import { Text } from "react-native";

const Wrapper = styled.View({
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fbfbfb",
});

export const HomeScreen: React.FC = () => {
    return (
        <Wrapper>
            <Text>Welcome! Enjoy the app offline </Text>
        </Wrapper>
    );
};
