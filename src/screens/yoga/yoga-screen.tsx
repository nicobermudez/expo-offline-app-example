import styled from "@emotion/native";
import React from "react";
import { colors } from "src/constants";
import { CategoriesList } from "src/components";

const YogaContainer = styled.View({
    flex: 1,
    justifyContent: "center",
    backgroundColor: colors.white,
});

export const YogaScreen: React.FC = () => {
    return (
        <YogaContainer>
            <CategoriesList />
        </YogaContainer>
    );
};
