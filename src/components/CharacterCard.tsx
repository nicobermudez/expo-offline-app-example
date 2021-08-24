import styled from "@emotion/native";
import React from "react";
import { Image, ViewProps } from "react-native";

const Wrapper = styled.View({
    shadowColor: "#000000",
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
    borderRadius: 24,
    backgroundColor: "#fbfbfb",
    flexDirection: "row",
    marginBottom: 32,
});

const InnerWrapper = styled.View({
    width: "40%",
    overflow: "hidden",
    borderTopLeftRadius: 24,
    borderBottomLeftRadius: 24,
});

const Title = styled.Text({
    fontSize: 16,
    fontWeight: "500",
    padding: 16,
    alignSelf: "center",
});

export type CardProps = {
    image: string;
    name: string;
} & ViewProps;

export const CharacterCard: React.FC<CardProps> = ({
    image,
    name,
    ...props
}) => {
    return (
        <Wrapper {...props}>
            <InnerWrapper>
                <Image
                    source={{
                        uri: image,
                    }}
                    resizeMode="cover"
                    style={{
                        width: "100%",
                        flex: 1,
                    }}
                    height={100}
                />
            </InnerWrapper>
            <Title>{name}</Title>
        </Wrapper>
    );
};
