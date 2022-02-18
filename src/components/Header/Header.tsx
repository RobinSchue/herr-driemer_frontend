/* eslint-disable @next/next/link-passhref */
import * as React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { Grid, styled, Link as MuiLink } from "@mui/material";
import Logo from "../Logo/Logo";
import Link from "next/link";

const LinkButton = styled(MuiLink)({
  border: 0,
  borderRadius: 3,
  color: "white",
  height: 48,
  padding: "0 30px",
  cursor: "pointer",
});

export default function Header() {
  return (
    <Grid container>
      <Grid item xs>
        <Link href="/">
          <Logo />
        </Link>
      </Grid>
      <Grid container item xs={8} justifyContent="flex-end" spacing={4}>
        <Grid item textAlign="end">
          <Link href="/about">
            <LinkButton>About</LinkButton>
          </Link>
        </Grid>
        <Grid item textAlign="end">
          <Link href="/contact">
            <LinkButton>Contact</LinkButton>
          </Link>
        </Grid>
      </Grid>
    </Grid>
  );
}
