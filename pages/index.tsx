import { ApolloClient, gql, InMemoryCache } from "@apollo/react-hooks";
import type { NextPage } from "next";
import Head from "next/head";
import Layout from "../src/components/Layout/Layout";
import { Projects, ProjectsProps } from "../src/components/Projects";
import { setConfig } from "cloudinary-build-url";
import { Typography } from "@mui/material";
import Footer from "../src/components/Footer/Footer";
import Image from "next/image";

setConfig({
  cloudName: "rosccloudinary",
});

const Home: NextPage<ProjectsProps> = ({ projects }) => {
  const projectsArray = projects?.map((project) => {
    return {
      ...project,
    };
  });

  return (
    <Layout>
      {/* <div className="backgroundImage">
        <Image
          alt="background"
          src="/background.png"
          layout="fill"
          objectFit="cover"
          quality={60}
        />
      </div> */}
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

      <Projects projects={projectsArray} />
      <Footer />
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
        projects(sort: "createdAt:desc", pagination: { start: 1, limit: 100 }) {
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
      }
    `,
  });

  return {
    props: {
      projects: data.projects.data,
    },
  };
}
