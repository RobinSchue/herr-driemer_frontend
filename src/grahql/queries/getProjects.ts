import gql from "graphql-tag";

export const PROJECTS_QUERY = gql`
  query getProjects {
    projects {
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
`;

export default PROJECTS_QUERY;
