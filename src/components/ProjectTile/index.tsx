import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Project, useGetProjectsQuery } from "../../../graphql/generated";

export interface ProjectTileProps {
  headerImageUrl?: string;
  title: string;
  client: string;
}

export const ProjectTile = ({
  headerImageUrl,
  title,
  client,
}: ProjectTileProps): JSX.Element => {
  return (
    <Box marginBottom={4}>
      <image height={100} width={100} href={headerImageUrl} />
      <Typography variant="h5">{title}</Typography>
      <Typography variant="overline">{client}</Typography>
    </Box>
  );
};
