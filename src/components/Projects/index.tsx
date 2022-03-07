import { Typography } from "@mui/material";
import React from "react";
import { Project, ProjectEntity } from "../../../graphql/generated";
import { ProjectTile } from "../ProjectTile";

export interface ProjectsProps {
  projects: ProjectEntity[];
}

export const Projects = ({ projects }: ProjectsProps): JSX.Element => {
  return (
    <div>
      <Typography variant="h4" paragraph>
        Projects
      </Typography>

      {projects.map((project) => {
        return (
          <ProjectTile
            key={project.id}
            headerImageUrl={
              project.attributes?.headerImage?.data?.attributes?.url ?? ""
            }
            title={project.attributes?.title ?? "NO"}
            client={project.attributes?.client ?? "NO"}
          />
        );
      })}
    </div>
  );
};
