/* eslint-disable @next/next/link-passhref */
import * as React from "react";
import { Box, Grid } from "@mui/material";

import Header from "../Header/Header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Grid container direction="column">
      <Header />
      <Box height={"48px"} />
      <Grid
        container
        xs={12}
        sx={{
          padding: 1,
          paddingTop: 4,
          paddingBottom: 8,
          minHeight: "100vh",
          background: "black",
          color: "white",
        }}
      >
        {children}
      </Grid>
    </Grid>
  );
}
