import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Hidden from "@material-ui/core/Hidden";
import Toolbar from "@material-ui/core/Toolbar";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  "@global": {
    body: {
      backgroundColor: theme.palette.common.white
    },
    ul: {
      margin: 0,
      padding: 0
    },
    li: {
      listStyle: "none"
    }
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`
  },
  toolbar: {
    flexWrap: "wrap"
  },
  toolbarTitle: {
    flexGrow: 1
  },
  link: {
    margin: theme.spacing(1, 1.5)
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6)
  },
  cardHeader: {
    backgroundColor: theme.palette.grey[200]
  },
  cardPricing: {
    display: "flex",
    justifyContent: "center",
    alignItems: "baseline",
    marginBottom: theme.spacing(2)
  },
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up("sm")]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6)
    }
  }
}));
const footers = [
  {
    title: "Company",
    description: [
      {key:"company/team", value:"Team"},
       {key:"company/history", value:"History"},
       {key:"company/contactus", value:"Contact us"}, 
       {key:"company/locations", value:"Locations"}]
  },
  {
    title: "Services",
    description: [
      {
        key:"services/taxes",
        value:"Taxes"
       },
         {
        key:"services/bussiness-consulting",
        value:"Business Consulting"
       },
         {
        key:"services/book-keeping",
        value:"Book Keeping"
       },
         {
        key:"services/estimate-calculator",
        value:"Estimate Calculator"
       },
         {
        key:"services/w-calculator",
        value:"W4 Calculator"
       },
    ]
  },
  {
    title: "Resources",
    description: [
      {
        key:"resources/tax-school",
        value:" Tax School"
       },
      {
        key:"resources/estimate-calculator",
        value:"Estimate Calculator"
       },
       {
        key:"resources/w4-calculator",
        value:"W4 Calculator"
       },
      {
        key:"resources/file-online",
        value:"File Taxes Online"
       }
    ]
  },
  {
    title: "Legal",
    description: [
        {
        key:"legal/privacy-policy",
        value:"Privacy policy"
       },
         {
        key:"legal/terms-of-use",
        value:"Terms of use"
       }]
  }
];

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Journey Taxz
      </Link>

      {new Date().getFullYear()}
      {". Built with "}
      <Link color="inherit" href="https://material-ui.com/">
        Material-UI.
      </Link>
    </Typography>
  );
}



export default function Footer() {
  const classes = useStyles();
  return (
    <Container maxWidth="md" component="footer" className={classes.footer}>
      <Grid container spacing={4} justify="space-evenly">
        {footers.map(footer => (
          <Grid item xs={6} sm={3} key={footer.title}>
            <Typography variant="h6" color="textPrimary" gutterBottom>
              {footer.title}
            </Typography>
            <ul>
              {footer.description.map(item => (
                <li key={item.value}>
                  <Link
                    href={
                      "/" + item.key
                    }
                    variant="subtitle1"
                    color="textSecondary"
                  >
                    {item.value}
                  </Link>
                </li>
              ))}
            </ul>
          </Grid>
        ))}
      </Grid>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}
