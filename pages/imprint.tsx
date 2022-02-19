import { ApolloClient, gql, InMemoryCache } from "@apollo/react-hooks";
import { Typography } from "@mui/material";
import type { NextPage } from "next";
import Head from "next/head";
import Layout from "../src/components/Layout/Layout";
import { Projects, ProjectsProps } from "../src/components/Projects";

const Imprint: NextPage<ProjectsProps> = () => {
  return (
    <Layout>
      <div>
        <Head>
          <title>Herr Driemer</title>
        </Head>
        <Typography variant="h5" paragraph>
          Impressum
        </Typography>
        <Typography>Lukas Driemer </Typography>
        <Typography>Dieckstraße 4</Typography>
        <Typography>48145 Münster</Typography>
      </div>
    </Layout>
  );
};

export default Imprint;

// export async function getStaticProps() {
//   const client = new ApolloClient({
//     uri: process.env.REACT_APP_BACKEND_URL,
//     cache: new InMemoryCache(),
//     connectToDevTools: true,
//   });

//   const { data } = await client.query({
//     query: gql`
//       query getProjects {
//         projects {
//           data {
//             id
//             attributes {
//               title
//             }
//           }
//         }
//       }
//     `,
//   });

//   return {
//     props: { projects: data.projects.data },
//   };
// }
