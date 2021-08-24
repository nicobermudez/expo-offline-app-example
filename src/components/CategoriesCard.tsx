import styled from "@emotion/native";
import { Feather } from "@expo/vector-icons";
import React from "react";
import { colors, radii, fontWeights, fontSizes } from "src/constants";

const CategoriesCardContainer = styled.TouchableOpacity({
    flex: 1,
    flexDirection: "row",
    margin: 16,
    padding: 16,
    backgroundColor: colors.white,
    borderRadius: radii.polished,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOpacity: 1,
    shadowOffset: { height: 2 },
    elevation: 3,
    alignItems: "center",
    height: 100,
    justifyContent: "center",
});

const Category = styled.Text({
    fontSize: fontSizes.large,
    fontWeight: fontWeights.medium,
    marginLeft: 8,
});

type Props = {
    category: { icon: string; title: string };
};

export const CategoriesCard: React.FC<Props> = ({ category }) => {
    return (
        <CategoriesCardContainer>
            <Feather name={category.icon} size={14} color={colors.secondaryDark} />
            <Category>{category.title}</Category>
        </CategoriesCardContainer>
    );
};
