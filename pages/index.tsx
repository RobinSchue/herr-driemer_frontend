import { ApolloClient, gql, InMemoryCache } from "@apollo/react-hooks";
import type { NextPage } from "next";
import Head from "next/head";
import Layout from "../src/components/Layout/Layout";
import { Projects, ProjectsProps } from "../src/components/Projects";
import { buildUrl, setConfig } from "cloudinary-build-url";
import { Typography } from "@mui/material";
import { Contact, ContactEntity, ProjectEntity } from "../graphql/generated";
import Footer from "../src/components/Footer/Footer";

setConfig({
  cloudName: "rosccloudinary",
});

interface HomePageProps {
  projects: ProjectEntity[];
  contact: Contact;
}

const Home: NextPage<HomePageProps> = ({ projects, contact }) => {
  const projectsArray = projects?.map((project) => {
    return {
      ...project,
    };
  });

  console.log(contact);

  return (
    <Layout>
      <Head>
        <title>Herr Driemer</title>
        <meta
          name="description"
          content="Corporate Fotografie, Corporate Fotograf, Corporate Portraits, Corporate Image, Corporate Fotos, Management Fotografie, Corporate Photographer, Corporate Photography, Corporate Pictures"
        />
        <meta
          name="author"
          content="Lukas Driemer, Fotografie - Von Corporate Portraits bis Corporate Image"
        />
        <meta name="robots" content="all" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Typography variant="h5" paragraph>
        Meine Projekte
      </Typography>
      <Projects projects={projectsArray} />
      <Footer contactData={contact} />
    </Layout>
  );
};

export default Home;

export async function getStaticProps() {
  const client = new ApolloClient({
    uri: process.env.REACT_APP_BACKEND_URL,
    cache: new InMemoryCache(),
    connectToDevTools: true,
  });

  const { data } = await client.query({
    query: gql`
      query getProjects {
        projects {
          data {
            id
            attributes {
              title
              description
              client
              isHero
              headerImage {
                data {
                  attributes {
                    url
                  }
                }
              }
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
        contact {
          data {
            attributes {
              headline
              emailAdress
              contactDetails
            }
          }
        }
      }
    `,
  });

  return {
    props: {
      projects: data.projects.data,
      contact: data.contact.data.attributes,
    },
  };
}
