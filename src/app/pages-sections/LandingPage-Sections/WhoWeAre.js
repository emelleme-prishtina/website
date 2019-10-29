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
    <div className={classes.section} id="whoweare">
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Who we are</h2>
          <h5 className={classes.description}>
            A team of excited people who are eager to solve your problems. We are software developers, hardware developers, and
           data scientists, who like to develop different projects starting from webs, applications,
            big data. The most special project that our team like to work on are electric bikes.
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
              title="Electronics and Hardware"
              description="A special part of our work is Electronics and Hardware. We are happy to work
              on the newest technology involved with bicycles, rockets, and embedded systems. For example, e-bikes contain an electric motor, 
              but besides this they all have the ability to be pedalled by the rider. Therefore, these E-Bikes
              are not involved in the same group with electric motorcycles. The best thing that we can benefit from E-Bikes
              as a society are health benefits, mostly about physical activity."
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
