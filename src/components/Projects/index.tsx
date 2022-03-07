import { Grid, Typography } from "@mui/material";
import React from "react";
import { Project, ProjectEntity } from "../../../graphql/generated";
import { ProjectTile } from "../ProjectTile";

export interface ProjectsProps {
  projects: ProjectEntity[];
}

export const Projects = ({ projects }: ProjectsProps): JSX.Element => {
  return (
    <Grid container xs={12} spacing={2}>
      {projects.map((project) => {
        if (project.attributes?.isHero) {
          return (
            <Grid item xs={8} key={project.id}>
              <ProjectTile
                headerImageUrl={
                  project.attributes?.headerImage?.data?.attributes?.url ?? ""
                }
                title={project.attributes?.title ?? "NO"}
                client={project.attributes?.client ?? "NO"}
              />
            </Grid>
          );
        } else {
          return (
            <Grid item xs={4} key={project.id}>
              <ProjectTile
                headerImageUrl={
                  project.attributes?.headerImage?.data?.attributes?.url ?? ""
                }
                title={project.attributes?.title ?? "NO"}
                client={project.attributes?.client ?? "NO"}
              />
            </Grid>
          );
        }
      })}
    </Grid>
  );
};
