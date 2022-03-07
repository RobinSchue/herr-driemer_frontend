import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Image from "next/image";
import buildUrl from "cloudinary-build-url";

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
  const url = headerImageUrl
    ? buildUrl(headerImageUrl, {
        transformations: {
          quality: 60,
        },
      })
    : "";

  console.log(url);

  return (
    <Box>
      <Image layout="responsive" height={600} width={900} src={url} alt="s" />
    </Box>
  );
};
