import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";
import Phone from "@material-ui/icons/Phone";
import LocationOn from "@material-ui/icons/LocationOn";

import styles from "assets/jss/nextjs-material-kit/pages/landingPageSections/workStyle.js";

const useStyles = makeStyles(styles);

export default function ContactUs() {
  const classes = useStyles();

  return (
    <div className={classes.section} id="contactus">
      <GridContainer justify="center">
        <GridItem cs={12} sm={12} md={8}>
          <h2 className={classes.title}>Get in Touch</h2>

          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <GridContainer>
                <GridItem md={1}>
                  <InfoArea
                    icon={LocationOn}
                    iconColor="danger"
                    className={classes.description}
                  />
                </GridItem>
                <GridItem md={11}>
                  <h4 className={classes.descriptionLeft}>
                    <b> Find Us at the Office</b>
                    <br />
                    EmellemE Europe - Kosovo, Pristine<br></br>
                    EmellemE USA - King of Prussia, PA 19406
                  </h4>
                </GridItem>
              </GridContainer>
            </GridItem>

            <GridItem xs={12} sm={12} md={6}>
              <GridContainer>
                <GridItem md={1}>
                  <InfoArea
                    icon={Phone}
                    iconColor="danger"
                    className={classes.descriptionLeft}
                  />
                </GridItem>
                <GridItem md={11}>
                  <h4 className={classes.description}>
                    <b> Contact us</b>
                    <br />
                    <a href="mailto:hello@emelle.me">hello@emelle.me</a>
                  </h4>
                </GridItem>
              </GridContainer>
            </GridItem>
          </GridContainer>
        </GridItem>
      </GridContainer>
    </div>
  );
}
