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
        "background-white column justify-start fz-5 color-gray-dark padding-v-small",
        classes.section
      )}
    >
      <div className="row-custom">
        <div className="padding-vmin-v-small justify-s-between">
          <p className={classes.hightlightedText}>
            <strong>&gt;</strong> about me
          </p>
          <p className={classes.descriptionText}>
            I've been a backend developer programming in Django and Symfony and
            I've had fun learning Node last year. I'm new developing on
            frontend, I'm woking on React projects now and I'm excited about
            learning this framework!
          </p>
          <p className={classes.descriptionText}>
            I think collective projects are a wonderful way to work in groups of
            people where we can share experiences and knowledge.
          </p>
          <p className={classes.descriptionText}>
            I'm also interested in art, free software & technical challenges.
            That's why I'm playing with{" "}
            <a
              href="https://hydra.ojack.xyz/"
              className="color-gray-strong color-gray-strong-link"
            >
              Hydra
            </a>
            ,{" "}
            <a
              href="https://minimaxir.com/2020/01/twitter-gpt2-bot/"
              className="color-gray-strong color-gray-strong-link"
            >
              GTP-2
            </a>{" "}
            (
            <a
              href="https://texts.natdeveloper.com/"
              className="color-gray-strong color-gray-strong-link"
            >
              Spinetta text generator AI
            </a>
            ) and other art-tech tools.
          </p>
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
  },
  hightlightedText: {
    margin: 0,
    fontWeight: "600",
    fontSize: "26px",
    paddingBottom: "1vmin",
    background: "white",
    color: "black",
    width: "fit-content",
  },
  //fz-4 padding-small color-gray-strong
  descriptionText: {
    margin: 0,
    fontWeight: "300",
    fontSize: "16px",
    padding: "1vmin",
    color: "#333",
    "&:hover": {
      color: "#333",
      fontWeight: "400",
    },
  },
}));
