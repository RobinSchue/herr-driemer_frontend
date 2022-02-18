/* eslint-disable @next/next/link-passhref */
import * as React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { Grid, Link, styled } from "@mui/material";
import Logo from "../Logo/Logo";

import Header from "../Header/Header";

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
      {children}
      <footer>
        <Grid
          container
          item
          xs={12}
          justifyContent="flex-end"
          className="italic"
          alignContent="end"
          spacing={4}
        >
          <Grid item textAlign="end">
            <LinkButton
              target="_blank"
              href="https://www.instagram.com/driem.works"
              rel="noreferrer"
            >
              Instagram
            </LinkButton>
          </Grid>
          <Grid item textAlign="end">
            <LinkButton href="/imprint">Impressum</LinkButton>
          </Grid>
        </Grid>
      </footer>
    </Grid>
  );
}
