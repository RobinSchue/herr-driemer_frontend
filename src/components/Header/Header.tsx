/* eslint-disable react/display-name */
/* eslint-disable @next/next/link-passhref */
import * as React from "react";
import {
  Grid,
  AppBar,
  Toolbar,
  Typography,
  Link as MuiLink,
  styled,
  css,
} from "@mui/material";
import Link from "next/link";

const StyledLogo = styled("object")(
  ({ theme: { spacing } }) =>
    ({ theme: { breakpoints } }) =>
      css`
        height: 20px;

        ${breakpoints.up("sm")} {
          height: 32px;
        }
      `
);

export default function Header() {
  return (
    <AppBar
      position="static"
      sx={{ background: "black", position: "fixed", zIndex: "2000" }}
    >
      <Toolbar disableGutters>
        <Grid
          container
          padding={1}
          justifyContent="space-between"
          alignItems="center"
          paddingLeft={2}
          paddingRight={2}
        >
          <Grid item xs={6} sm>
            <Grid item container alignSelf="center">
              <Link href="/" passHref>
                <MuiLink>
                  <StyledLogo
                    data="/logo.svg"
                    style={{ pointerEvents: "none" }}
                  />
                </MuiLink>
              </Link>
            </Grid>
          </Grid>
          <Grid item>
            <Link href="/about">
              <Typography variant="h6" sx={{ cursor: "pointer" }}>
                About
              </Typography>
            </Link>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
