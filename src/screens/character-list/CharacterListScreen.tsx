import styled from "@emotion/native";
import React from "react";
import {
    ActivityIndicator,
    FlatList,
    RefreshControl,
    Text,
} from "react-native";
import { useCharactersQuery } from "@app/generated-gql";
import { CharacterCard } from "@app/components/CharacterCard";
import { NetworkStatus } from "@apollo/client";

const Wrapper = styled.View({
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
});

export const CharacterListScreen: React.FC = () => {
    const { data, networkStatus, refetch } = useCharactersQuery();

    if (networkStatus === NetworkStatus.loading) {
        return (
            <Wrapper>
                <ActivityIndicator />
            </Wrapper>
        );
    }

    return (
        <FlatList
            contentContainerStyle={{ padding: 16 }}
            refreshControl={
                <RefreshControl
                    refreshing={networkStatus === NetworkStatus.refetch}
                    onRefresh={refetch}
                />
            }
            data={data?.characters?.results}
            renderItem={({ index, item }) => (
                <CharacterCard
                    key={index}
                    image={item?.image ?? ""}
                    name={item?.name ?? ""}
                >
                    <Text>{item?.name}</Text>
                </CharacterCard>
            )}
        />
    );
};
