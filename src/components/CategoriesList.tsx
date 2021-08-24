import styled from "@emotion/native";
import React from "react";
import { categories, fontSizes, fontWeights } from "src/constants";
import { CategoriesCard } from "./CategoriesCard";
import { ScrollView } from "react-native";

const CategoriesContainer = styled.View({
    flex: 1,
});

const Header = styled.Text({
    fontSize: fontSizes.header,
    fontWeight: fontWeights.bold,
    textAlign: "center",
    marginTop: 16,
});

export const CategoriesList: React.FC = () => {
    return (
        <ScrollView>
            <Header>Select a category</Header>
            <CategoriesContainer>
                {categories?.map((category, index) => (
                    <CategoriesCard key={index} category={category} />
                ))}
            </CategoriesContainer>
        </ScrollView>
    );
};
