import React from "react";
import { AppProps } from "next/app";

// const client = new ApolloClient({
//   cache: new InMemoryCache({
//     typePolicies: {
//       // jobs of different machines can have the same id
//       // that's why we disable JobInfo normalization so that
//       // the machines don't overwrite each others' jobs in the cache
//       JobInfo: { keyFields: false },
//     },
//   }),
//   link: ApolloLink.from([errorLink]),
//   connectToDevTools: true,
// });

interface MyAppProps extends AppProps {
  projects: any;
}

function MyApp({ Component, pageProps, projects }: MyAppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
