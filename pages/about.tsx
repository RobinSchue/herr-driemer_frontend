import { InMemoryCache, ApolloClient, gql } from "@apollo/react-hooks";
import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import About from "../src/components/About/About";
import Layout from "../src/components/Layout/Layout";

export interface AboutProps {
  headline: string;
  text: string;
  imageUrl: string;
}

const AboutPage: NextPage<AboutProps> = ({ headline, text, imageUrl }) => {
  return (
    <Layout>
      <Head>
        <title>Herr Driemer</title>
      </Head>
      <About headline={headline} text={text} imageUrl={imageUrl} />
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
              images {
                data {
                  attributes {
                    url
                  }
                }
              }
            }
          }
        }
      }
    `,
  });

  const headline: string = data?.about?.data?.attributes?.headline;
  const text: string = data?.about?.data?.attributes?.text;
  const imageUrl: string =
    data?.about?.data?.attributes?.images?.data?.[0]?.attributes?.url;

  return {
    props: { headline: headline, text: text, imageUrl: imageUrl },
  };
};
