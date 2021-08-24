import { ExpoConfig } from "@expo/config";

export default (): ExpoConfig => ({
    name: "Expo Offline Example App",
    slug: "expo-offline-example-app",
    version: "1.0.0-beta",
    orientation: "portrait",
    icon: "./assets/icon.png",
    platforms: ["android", "ios"],
    splash: {
        image: "./assets/rick-and-morty-splash-screen.png",
        resizeMode: "contain",
        backgroundColor: "#000000",
    },
    assetBundlePatterns: ["**/*"],
    extra: {
        GQL_GATEWAY_URL: "https://rickandmortyapi.com/graphql",
    },
});
