import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Image from "next/image";

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
  console.log("headerImageUrl");
  console.log(headerImageUrl);
  return (
    <Box marginBottom={4}>
      <Image height={100} width={100} src={headerImageUrl ?? ""} alt="s" />
      <Typography variant="h5">{title}</Typography>
      <Typography variant="overline">{client}</Typography>
    </Box>
  );
};
