import { InMemoryCache, ApolloClient, gql } from "@apollo/react-hooks";
import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import About from "../src/components/About/About";
import Layout from "../src/components/Layout/Layout";

export interface AboutProps {
  headline: string;
  text: string;
}

const AboutPage: NextPage<AboutProps> = ({ headline, text }) => {
  return (
    <Layout>
      <Head>
        <title>Herr Driemer</title>
      </Head>
      <About headline={headline} text={text} />
    </Layout>
  );
};

export default AboutPage;

export const getStaticProps: GetStaticProps = async (context) => {
  const client = new ApolloClient({
    uri: process.env.REACT_APP_BACKEND_URL,
    cache: new InMemoryCache(),
    connectToDevTools: true,
  });

  const { data } = await client.query({
    query: gql`
      query getAbout {
        about {
          data {
            attributes {
              headline
              text
            }
          }
        }
      }
    `,
  });

  const headline: string = data?.about?.data?.attributes?.headline;
  const text: string = data?.about?.data?.attributes?.text;

  return {
    props: { headline: headline, text: text },
  };
};
