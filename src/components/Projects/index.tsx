import {
  Grid,
  Hidden,
  ImageList,
  ImageListItem,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Project, ProjectEntity } from "../../../graphql/generated";
import { ProjectTile } from "../ProjectTile";

export interface ProjectsProps {
  projects: ProjectEntity[];
}

export const Projects = ({ projects }: ProjectsProps): JSX.Element => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <Grid container xs={12}>
      <ImageList variant="masonry" cols={isDesktop ? 3 : 1} gap={8}>
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
              placeholder="empty"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Grid>
  );
};
