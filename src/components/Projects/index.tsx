import React from "react";
import { Link } from "react-router-dom";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

interface ProjectsProps {
  projects: {
    id: string;
    attributes: {
      title: string;
    };
  }[];
}

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
            }
          }
        }
      }
    `,
  });

  return {
    props: {
      projects: await data.projects.data,
    },
  };
}

export const Projects = ({ projects }: ProjectsProps): JSX.Element => {
  console.log(projects);
  return (
    <div>
      <h1>Projects</h1>
      {projects ? (
        projects.map((project, key) => {
          return <div key={key}>{project.attributes.title}</div>;
        })
      ) : (
        <div>Fetching failed</div>
      )}
    </div>
  );
};
