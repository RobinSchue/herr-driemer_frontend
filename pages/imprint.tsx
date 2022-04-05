import { ApolloClient, gql, InMemoryCache } from "@apollo/react-hooks";
import { Grid, Typography } from "@mui/material";
import type { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import Head from "next/head";
import Layout from "../src/components/Layout/Layout";
import ReactMarkdown from "react-markdown";
import { ImprintEntity } from "../graphql/generated";

export interface ImprintProps {
  headline: string;
  text: string;
}

const Imprint: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  headline,
  text,
}) => {
  return (
    <Layout>
      <Head>
        <title>{headline}</title>
      </Head>
      <Grid container xs={12} md={6}>
        <Grid item>
          <Typography variant="h4" paragraph marginBottom={4}>
            {headline}
          </Typography>
          <ReactMarkdown>{text || ""}</ReactMarkdown>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Imprint;

export const getStaticProps: GetStaticProps<ImprintProps> = async (context) => {
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
      headline: data.imprint.data.attributes.headline,
      text: data.imprint.data.attributes.text,
    },
  };
};
