import { ApolloClient, gql, InMemoryCache } from "@apollo/react-hooks";
import type { NextPage } from "next";
import Head from "next/head";
import Layout from "../src/components/Layout/Layout";
import { Projects, ProjectsProps } from "../src/components/Projects";
import { buildUrl } from "cloudinary-build-url";

const url = buildUrl("[Your Cloudinary Image ID]", {
  cloud: {
    cloudName: "rosccloudinary",
  },
  transformations: {
    effect: {
      name: "pixelate",
      value: 40,
    },
  },
});

const Home: NextPage<ProjectsProps> = ({ projects }) => {
  const projectsArray = projects?.map((project) => {
    return {
      ...project,
    };
  });

  return (
    <Layout>
      <div>
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
      </div>
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
      }
    `,
  });

  return {
    props: { projects: data.projects.data },
  };
}
