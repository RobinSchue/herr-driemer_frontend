import { ApolloClient, gql, InMemoryCache } from "@apollo/react-hooks";
import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Layout from "../src/components/Layout/Layout";
import { Projects } from "../src/components/Projects";
import { setConfig } from "cloudinary-build-url";
import Footer from "../src/components/Footer/Footer";
import { Contact, ProjectEntity } from "../graphql/generated";

setConfig({
  cloudName: "rosccloudinary",
});

interface HomePageProps {
  projects: ProjectEntity[];
  contactData: Contact;
}

const Home: NextPage<HomePageProps> = ({ projects, contactData }) => {
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
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Projects projects={projectsArray} />
      {contactData && <Footer contactData={contactData} />}
    </Layout>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async (context) => {
  const client = new ApolloClient({
    uri: process.env.REACT_APP_BACKEND_URL,
    cache: new InMemoryCache(),
    connectToDevTools: true,
  });

  const { data: projectData } = await client.query({
    query: gql`
      query getProjects {
        projects(sort: "order:asc", pagination: { start: 0, limit: 100 }) {
          data {
            id
            attributes {
              order
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

  return {
    props: {
      projects: projectData.projects.data,
      contactData: contactData.contact.data.attributes,
    },
  };
};
