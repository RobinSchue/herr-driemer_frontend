// import React from "react";
// import { Link } from "react-router-dom";
// import Query from "../Query";

// import PROJECTS_QUERY from "../../grahql/queries/getProjects";

// export const Projects = () => {
//   return (
//     <div>
//       <Query query={PROJECTS_QUERY} slug={undefined}>
//         {({ data: { projects } }) => {
//           return (
//             <div>
//               {projects.data.map((project) => {
//                 return (
//                   <li key={project.title}>
//                     <Link
//                       to={`/category/${project.title.slug}`}
//                       className="uk-link-reset"
//                     >
//                       {project.title}
//                     </Link>
//                   </li>
//                 );
//               })}
//             </div>
//           );
//         }}
//       </Query>
//     </div>
//   );
// };
