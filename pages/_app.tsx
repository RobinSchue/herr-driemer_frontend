import React from "react";
import { AppProps } from "next/app";
import "normalize.css/normalize.css";
import { CacheProvider, EmotionCache } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import theme from "../theme/theme";
import Head from "next/head";
import { ThemeProvider } from "@mui/material/styles";
import createEmotionCache from "../src/hooks/createEmotionCache";
import { StrapiApolloProvider } from "../src/grahql/apollo";
import "../styles/globals.css";

interface MyAppProps extends AppProps {
  emotionCache: EmotionCache;
}

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export const MyApp = ({
  Component,
  emotionCache = clientSideEmotionCache,
  pageProps,
}: MyAppProps): JSX.Element => {
  return (
    <StrapiApolloProvider>
      <CacheProvider value={emotionCache}>
        <Head>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </CacheProvider>
    </StrapiApolloProvider>
  );
};

export default MyApp;

// export async function getStaticProps() {
//   const client = new ApolloClient({
//     cache: new InMemoryCache(),
//     connectToDevTools: true,
//   });

//   return client;
// }
