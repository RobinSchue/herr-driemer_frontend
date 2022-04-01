import { Grid, ImageList, ImageListItem, Typography } from "@mui/material";
import React from "react";
import { Project, ProjectEntity } from "../../../graphql/generated";
import { ProjectTile } from "../ProjectTile";

export interface ProjectsProps {
  projects: ProjectEntity[];
}

export const Projects = ({ projects }: ProjectsProps): JSX.Element => {
  return (
    <Grid container xs={12}>
      <ImageList variant="masonry" cols={3} gap={8}>
        {projects.map((project) => (
          <ImageListItem key={project.id}>
            <img
              src={`${
                project.attributes?.headerImage?.data?.attributes?.url ?? ""
              }?w=248&fit=crop&auto=format`}
              srcSet={`${
                project.attributes?.headerImage?.data?.attributes?.url ?? ""
              }?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={project.attributes?.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Grid>
  );
};
