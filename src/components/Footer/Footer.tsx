/* eslint-disable @next/next/link-passhref */
import * as React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import {
  Grid,
  styled,
  Link as MuiLink,
  Typography,
  Divider,
} from "@mui/material";
import Logo from "../Logo/Logo";
import Link from "next/link";

const LinkButton = styled(MuiLink)({
  border: 0,
  borderRadius: 3,
  color: "white",
  height: 48,
  // padding: "0 30px",
  cursor: "pointer",
});

const StyledFooter = styled("footer")(({ theme: { spacing } }) => ({
  padding: `${spacing(4)} 0 ${spacing(8)} 0`,
}));

export default function Footer() {
  return (
    <StyledFooter>
      <Divider sx={{ marginBottom: 4 }} />
      <Grid container item xs={12} className="italic" alignContent="end">
        <Grid item xs={12} paddingBottom={7}>
          <Typography variant="h5" textAlign="center" paragraph>
            Kontakt
          </Typography>
          <Typography variant="h4" textAlign="center">
            hallo@herrdriemer.de
          </Typography>
        </Grid>

        <Grid item textAlign="end" sx={{ marginRight: 4 }}>
          <LinkButton
            target="_blank"
            href="https://www.instagram.com/driem.works"
            rel="noreferrer"
          >
            Instagram
          </LinkButton>
        </Grid>
        <Grid item textAlign="end">
          <Link href="/imprint">
            <LinkButton>Impressum</LinkButton>
          </Link>
        </Grid>
      </Grid>
    </StyledFooter>
  );
}
