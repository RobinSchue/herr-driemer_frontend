/* eslint-disable @next/next/link-passhref */
import * as React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { Grid, Link, styled } from "@mui/material";
import Logo from "../Logo/Logo";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const LinkButton = styled(Link)({
  border: 0,
  borderRadius: 3,
  color: "white",
  height: 48,
  padding: "0 30px",
  cursor: "pointer",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Grid
      container
      sx={{
        padding: 2,
        minHeight: "100vh",
        background: "black",
        color: "white",
      }}
      direction="column"
    >
      <Header />
      <Grid container xs={12} sx={{ paddingTop: 4, paddingBottom: 8 }}>
        {children}
      </Grid>
    </Grid>
  );
}
