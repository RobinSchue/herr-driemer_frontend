import React from "react";
import { AppProps } from "next/app";

interface MyAppProps extends AppProps {
  projects: any;
}

function MyApp({ Component, pageProps, projects }: MyAppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
