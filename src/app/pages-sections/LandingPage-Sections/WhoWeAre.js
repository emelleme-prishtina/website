import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Computer from "@material-ui/icons/Computer";
import Build from "@material-ui/icons/Build";
import Fingerprint from "@material-ui/icons/Fingerprint";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import styles from "assets/jss/nextjs-material-kit/pages/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function WhoWeAre() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Who we are</h2>
          <h5 className={classes.description}>
            A team of excited software developers and hardware developers, who
            like to develop different projects starting from webs, applications,
            big data and the most special project like electic bikes. This is
            the paragraph where you can write more details about who you are.
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Software Development"
              description="Software development includes a wide field of processing, designing, programming,
              specifying, documenting and testing. All of these phases are done to create different
              applications, frameworks and software components"
              icon={Computer}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Machine Learning"
              description="Machine Learning is one of the latest methods of 
              Artificial Intellegence that involves data analytics to automate
              analytics of different systems. Its core is to learn from data and then
               identify patterns so the human interaction would be minimized."
              icon={Fingerprint}
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="E-Bikes"
              description="We build electric bikes. here will be more content about bikes.."
              icon={Build}
              iconColor="danger"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
