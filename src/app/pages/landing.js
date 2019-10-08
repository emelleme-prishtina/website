import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";

import styles from "assets/jss/nextjs-material-kit/pages/landingPage.js";

// Sections for this page

import TeamSection from "pages-sections/LandingPage-Sections/TeamSection.js";
import ContactUs from "pages-sections/LandingPage-Sections/ContactUs.js";
import WhoWeAre from "pages-sections/LandingPage-Sections/WhoWeAre.js";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function LandingPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div id="home">
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="Emelleme"
        logoImg="logoImg"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white",
          display: "none"
        }}
        {...rest}
      />
      <Parallax filter responsive image={require("assets/img/bgof2.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={8}>
              <img src={require("assets/img/emelle-logo.png")} width="700" />
              {/* <h1 className={classes.title}>Emelleme</h1> */}
              <br /> <br />
              <h4 justify="center">
                We are an enthusiastic team of software developers, who are
                excited to work on different sections of nowadays technology
                like: web-developemnet, AI, Machine Learning and also a very
                special part of our company like electric bikes.
              </h4>
              <br />
              <Button
                color="danger"
                size="lg"
                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ref=creativetim"
                target="_blank"
                rel="noopener noreferrer"
                justify="center"
              >
                <i className="fas fa-play" />
                Watch video
              </Button>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <WhoWeAre />

          <TeamSection />
          <ContactUs />
        </div>
      </div>
      <Footer />
    </div>
  );
}
