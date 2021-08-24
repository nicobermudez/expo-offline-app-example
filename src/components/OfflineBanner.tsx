import styled from "@emotion/native";
import React from "react";
import { useNetInfo } from "@react-native-community/netinfo";
import { Feather } from "@expo/vector-icons";

const Wrapper = styled.View({
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
    padding: 8,
    alignItems: "center",
    backgroundColor: "#c95e6b",
});

const OfflineText = styled.Text({
    color: "#fff",
    marginLeft: 8,
    fontSize: 14,
    lineHeight: 22,
    fontWeight: "500",
});

export const OfflineBanner: React.FC = () => {
    const { isConnected } = useNetInfo();
    if (isConnected) {
        return null;
    }
    return (
        <Wrapper>
            <Feather name="alert-circle" size={18} color="#fff" />
            <OfflineText book>Your device is offline</OfflineText>
        </Wrapper>
    );
};
