import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

export interface ProjectsProps {
  projects: {
    id: string;
    attributes: {
      title: string;
      images: {
        url: string;
      }[];
      description?: string;
      client?: string;
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
            <Box key={key} marginBottom={4}>
              <Typography variant="h5">{project.attributes.title}</Typography>
              {project.attributes.client && (
                <Typography variant="overline">
                  {project.attributes.client}
                </Typography>
              )}
              {project.attributes.description && (
                <Typography variant="body2">
                  {project.attributes.description}
                </Typography>
              )}
              {project.attributes.images &&
                project.attributes.images.map((image, key) => (
                  <Typography key={key} variant="h5">
                    {image.url}
                  </Typography>
                ))}
            </Box>
          );
        })
      ) : (
        <div>Fetching failed</div>
      )}
    </div>
  );
};
