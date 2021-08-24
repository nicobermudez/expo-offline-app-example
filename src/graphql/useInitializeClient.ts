import {
    ApolloClient,
    createHttpLink,
    from,
    InMemoryCache,
} from "@apollo/client";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AsyncStorageWrapper, CachePersistor } from "apollo3-cache-persist";
import Constants from "expo-constants";
import { useEffect, useState } from "react";
import { typePolicies } from "./typePolicies";

const cache = new InMemoryCache({
    typePolicies,
});
const persistor = new CachePersistor({
    cache,
    storage: new AsyncStorageWrapper(AsyncStorage),
});

export const useInitializeClient = () => {
    const [client, setClient] = useState<ApolloClient<any>>();
    useEffect(() => {
        async function initializeCache() {
            await persistor.restore();
            const client = new ApolloClient({
                link: from([
                    createHttpLink({
                        uri: Constants.manifest?.extra?.GQL_GATEWAY_URL,
                    }),
                ]),
                cache,
                defaultOptions: {
                    watchQuery: {
                        fetchPolicy: "cache-and-network",
                    },
                },
            });
            client.onClearStore(async () => {
                await persistor.purge();
            });
            setClient(client);
        }
        initializeCache();
    }, []);
    return client;
};
