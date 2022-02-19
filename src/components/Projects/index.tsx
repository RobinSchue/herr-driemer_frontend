import { Typography } from "@mui/material";
import React from "react";

export interface ProjectsProps {
  projects: {
    id: string;
    attributes: {
      title: string;
      description?: string;
      agenturName?: string;
    };
  }[];
}

export const Projects = ({ projects }: ProjectsProps): JSX.Element => {
  console.log(projects);
  return (
    <div>
      <Typography variant="h4" paragraph>
        Projects
      </Typography>
      {projects ? (
        projects.map((project, key) => {
          return (
            <div key={key}>
              <Typography variant="h5">{project.attributes.title}</Typography>
              {project.attributes.description && (
                <Typography variant="h5">
                  {project.attributes.description}
                </Typography>
              )}
              {project.attributes.agenturName && (
                <Typography variant="h5">
                  {project.attributes.agenturName}
                </Typography>
              )}
            </div>
          );
        })
      ) : (
        <div>Fetching failed</div>
      )}
    </div>
  );
};
