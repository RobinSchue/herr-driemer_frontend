import { ApolloClient, gql, InMemoryCache } from "@apollo/react-hooks";
import { Grid, Typography } from "@mui/material";
import type { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import Head from "next/head";
import Layout from "../src/components/Layout/Layout";
import ReactMarkdown from "react-markdown";

const Imprint: NextPage = ({
  imprint,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Layout>
      <Head>
        <title>{imprint.headline}</title>
      </Head>
      <Grid container xs={12} md={6}>
        <Grid item>
          <Typography variant="h4" paragraph marginBottom={4}>
            {imprint.headline}
          </Typography>
          <ReactMarkdown>{imprint.text}</ReactMarkdown>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Imprint;

export const getStaticProps: GetStaticProps = async (context) => {
  const client = new ApolloClient({
    uri: process.env.REACT_APP_BACKEND_URL,
    cache: new InMemoryCache(),
    connectToDevTools: true,
  });

  const { data } = await client.query({
    query: gql`
      query getImprint {
        imprint {
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

  return {
    props: {
      imprint: data.imprint.data.attributes,
    },
  };
};
