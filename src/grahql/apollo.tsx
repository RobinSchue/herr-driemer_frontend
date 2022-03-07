import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { PropsWithChildren } from "react";

const REACT_APP_BACKEND_URL = "http://localhost:1337/graphql";

export const StrapiApolloProvider: React.FC<PropsWithChildren<{}>> = ({
  children,
}) => {
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: REACT_APP_BACKEND_URL,
    connectToDevTools: true,
  });
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
