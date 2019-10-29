import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import styles from "assets/jss/nextjs-material-kit/pages/landingPageSections/teamStyle.js";

import team2 from "assets/img/faces/christian.jpg";
import team1 from "assets/img/faces/lloyd.jpg";
import team3 from "assets/img/faces/kendall.jpg";

const useStyles = makeStyles(styles);

export default function TeamSection() {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  return (
    <div className={classes.section} id="team">
      <h2 className={classes.title}>Our awesome team</h2>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <h4 className={classes.cardTitle}>
                Lloyd Emelle
                <br />
                <small className={classes.smallTitle}>Engineer</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  Lloyd is passionate about improving the world around him. 
                  He has acquired a paticular set of skills and experiences with computer hardware and software 
                  development over the span of two decades, and enjoys finding solutions to challenging problems.
                   In his free time he likes to swim, snowboard, and attempt to learn (non) computer languages <a href="#pablo"></a>
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-twitter"} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-instagram"} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-facebook"} />
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              
              <h4 className={classes.cardTitle}>
                Albiona Hoti
                <br />
                <small className={classes.smallTitle}>Software developer</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  You can write here details about one of your team members. You
                  can give more details about what they do. Feel free to add
                  some <a href="#pablo"></a> 
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-twitter"} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-linkedin"} />
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              
              <h4 className={classes.cardTitle}>
                Blerina Zejnullahu
                <br />
                <small className={classes.smallTitle}>Office Manager</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  You can write here details about one of your team members. You
                  can give more details about what they do. Feel free to add
                  some <a href="#pablo"></a> 
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-twitter"} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-instagram"} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-facebook"} />
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              
              <h4 className={classes.cardTitle}>
                Alma Fazliu 
                <br />
                <small className={classes.smallTitle}>Data Scientist</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                 Alma is a Data Scientist and Software Developer focused in developing smart applications 
                 using Artificial Intelligence. She is interested in people behavior/psychology and the reason 
                 they act the way they do. She enjoys reading sci-fi books, playing Sudoko and besides Albanian she speaks English, 
                 Spanish, some German and a little Turkish. <a href="#pablo"></a> 
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-twitter"} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-instagram"} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-facebook"} />
                </Button>
              </CardFooter>
            </Card>
          </GridItem>

          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              
              <h4 className={classes.cardTitle}>
                Nora Gjergji
                <br />
                <small className={classes.smallTitle}>Data Scientist</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  Nora is very enthusiastic about Maths, Data Science and Software Development. 
                  Working as a lecturer has helped sharpen her rhetorical and analytical skills. 
                  She likes socializing, working out and taking long walks with her dog. 
                  She hates cilantro. <a href="#pablo"></a> 
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-twitter"} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-instagram"} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-facebook"} />
                </Button>
              </CardFooter>
            </Card>
          </GridItem>

          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              
              <h4 className={classes.cardTitle}>
                Shejza Berisha
                <br />
                <small className={classes.smallTitle}>Software Developer</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  Shejza is a front-end and back-end developer with skills in different 
                  programming languages. She is very passionate and loves developing new apps, projects and ideas. 
                  She likes watching sci-fi movies, commedies and likes to read psychological books. Shejza likes 
                  to travel a lot and gain new experiences out in the world. <a href="#pablo"></a> 
                   </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-twitter"} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-instagram"} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-facebook"} />
                </Button>
              </CardFooter>
            </Card>
          </GridItem>

           <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              
              <h4 className={classes.cardTitle}>
                Erza Kastrati
                <br />
                <small className={classes.smallTitle}>Software Developer</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                   Erza is a Software Developer who is very enthusiastic in Engineering and Computer Science.
                   She also likes data analytics and research in solving problems of different fields. She is an
                   outdoor person who likes hiking, camping, tennis and travelling. One of her favorite things to do is reading
                   science books. <a href="#pablo"></a> 
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-twitter"} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-instagram"} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-facebook"} />
                </Button>
              </CardFooter>
            </Card>
          </GridItem>

           <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              
              <h4 className={classes.cardTitle}>
                Alina Fazliu
                <br />
                <small className={classes.smallTitle}>Software Developer</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                 Alina is one of our young interns, who just began her internship as a Software Developer.
                  Currently studying Computer Engineering, she hopes to make it through University in one piece.
                  On her free time she likes reading and expressing her strong opinions on social issues and popular TV shows. <a href="#pablo"></a> 
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-twitter"} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-instagram"} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-facebook"} />
                </Button>
              </CardFooter>
            </Card>
          </GridItem>

           <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              
              <h4 className={classes.cardTitle}>
                Bardha Jakupi
                <br />
                <small className={classes.smallTitle}>Software Developer</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                 Bardha is ... <a href="#pablo"></a> 
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-twitter"} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-instagram"} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-facebook"} />
                </Button>
              </CardFooter>
            </Card>
          </GridItem>

           <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              
              <h4 className={classes.cardTitle}>
                Trim 
                <br />
                <small className={classes.smallTitle}>Job Title Here</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  You can write here details about one of your team members. You
                  can give more details about what they do. Feel free to add
                  some <a href="#pablo">links</a> for people to be able to
                  follow them outside the site.
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-twitter"} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-instagram"} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-facebook"} />
                </Button>
              </CardFooter>
            </Card>
          </GridItem>

           <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              
              <h4 className={classes.cardTitle}>
                Vjosa Fusha
                <br />
                <small className={classes.smallTitle}>Software Developer</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                 Vjosa is passionate about planning initiatives and courses that increase the investment 
                 and development of girls and women. It is now almost two years since she started her career 
                 in the IT industry (mainly Software Development). In her free time, Vjosa enjoys volunteering, traveling, 
                 and playing guitar<a href="#pablo"></a> 
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-twitter"} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-instagram"} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-facebook"} />
                </Button>
              </CardFooter>
            </Card>
          </GridItem>

        </GridContainer>
      </div>
    </div>
  );
}
