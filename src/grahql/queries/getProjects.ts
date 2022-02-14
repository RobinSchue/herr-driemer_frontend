import gql from "graphql-tag";

const PROJECTS_QUERY = gql`
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
`;

export default PROJECTS_QUERY;
