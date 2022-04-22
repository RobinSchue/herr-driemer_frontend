import { InMemoryCache, ApolloClient, gql } from "@apollo/react-hooks";
import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { Contact } from "../graphql/generated";
import About from "../src/components/About/About";
import Footer from "../src/components/Footer/Footer";
import Layout from "../src/components/Layout/Layout";

export interface AboutProps {
  headline: string;
  text: string;
  imageUrl: string;
  contactData: Contact;
}

const AboutPage: NextPage<AboutProps> = ({
  headline,
  text,
  imageUrl,
  contactData,
}) => {
  return (
    <Layout>
      <Head>
        <title>Herr Driemer</title>
      </Head>
      <About headline={headline} text={text} imageUrl={imageUrl} />
      <Footer contactData={contactData} />
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

  const { data: aboutData } = await client.query({
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

  const { data: contactData } = await client.query({
    query: gql`
      query getContact {
        contact {
          data {
            attributes {
              headline
              phone
              instagramUrl
              instagramName
              emailAdress
              contactDetails
            }
          }
        }
      }
    `,
  });

  const headline: string = aboutData?.about?.data?.attributes?.headline;
  const text: string = aboutData?.about?.data?.attributes?.text;
  const imageUrl: string =
    aboutData?.about?.data?.attributes?.images?.data?.[0]?.attributes?.url;

  return {
    props: {
      headline: headline,
      text: text,
      imageUrl: imageUrl,
      contactData: contactData.contact.data.attributes,
    },
  };
};
