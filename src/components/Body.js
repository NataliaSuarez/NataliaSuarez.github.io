import React from "react";
import { makeStyles } from "@material-ui/core";
import clsx from "clsx";

import Experience from "./sections/Experience";
import "../App.css";

const AboutMe = () => {
  const classes = useStyles();
  return (
    <div
      className={clsx(
        "column justify-start fz-5 color-gray-dark padding-v-small",
        classes.section
      )}
      id="about-me"
    >
      <div className="row-custom">
        <div className="padding-vmin-v-small justify-s-between">
          <div className={classes.hightlightedText}>&gt; about me</div>
          <div className={classes.descriptionText}>
            <div>
              I've been a backend developer programming on Django and Symfony
              and I've had fun learning Node last year.
            </div>
            <div>Now, I'm developing on frontend in React project.</div>
          </div>
          <div className={classes.descriptionText}>
            <div>
              I think collective projects are a wonderful way to work in groups
              of people where we can share experiences and knowledge.
            </div>
            <div>
              I'm also interested in art, free software & technical challenges.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

function Body() {
  return (
    <div>
      <AboutMe />
      <Experience />
    </div>
  );
}

export default Body;

const useStyles = makeStyles((theme) => ({
  // "without-margin strong-1-text fz-5 padding-b-small color-green-2"
  section: {
    minHeight: "100vh",
    justifyContent: "center",
    background: "#fafafa",
  },
  hightlightedText: {
    margin: 0,
    fontWeight: "600",
    fontSize: "26px",
    paddingBottom: "1vmin",
    color: "rgba(144,42,172,1)",
    width: "fit-content",
    [`@media(min-width: 700px)`]: {
      fontSize: "32px",
    },
    [`@media(min-width: 1200px)`]: {
      fontWeight: "700",
      fontSize: "36px",
    },
  },
  //fz-4 padding-small color-gray-strong
  descriptionText: {
    margin: 0,
    fontWeight: "300",
    fontSize: "16px",
    padding: "12px 2px 12px 2px",
    color: "#333",
    [`@media(min-width: 700px)`]: {
      fontWeight: "400",
      fontSize: "20px",
    },
    [`@media(min-width: 1200px)`]: {
      fontWeight: "400",
      fontSize: "24px",
    },
  },
}));
