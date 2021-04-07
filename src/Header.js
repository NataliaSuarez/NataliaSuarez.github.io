import React from "react";
import { makeStyles } from "@material-ui/core";

// import cleanCode from "./../cle";
import "./App.css";

function Header() {
  const classes = useStyles();
  return (
    <div className="background-gray-3 column justify-start color-white padding-v-small fz-1">
      <div className={classes.titleContainer}>
        <p className={classes.titleHeader}>nat | developer & art-curious</p>
      </div>
      <div className={classes.infoContainer}>
        {/* <img
          src={fire}
          className="height-30 align-center margin-b-small"
          alt="logo"
        /> */}
        <p className={classes.hightlightedText}>
          Web about the projects in which I have participated and my interests.
        </p>
        <div className={classes.linkContainer}>
          <a
            className={classes.link}
            href="https://www.linkedin.com/in/natalia-suarez-dev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin
          </a>
          <a
            className={classes.link}
            href="https://github.com/NataliaSuarez"
            target="_blank"
            rel="noopener noreferrer"
          >
            github
          </a>
          <a
            className={classes.link}
            href="https://twitter.com/natsuarez42"
            target="_blank"
            rel="noopener noreferrer"
          >
            twitter
          </a>
          <a
            className={classes.link}
            href="mailto:suarez.nataliam@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            nat@dev
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;

const useStyles = makeStyles((theme) => ({
  titleContainer: {
    justifyContent: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: "-40px",
    zIndex: 1,
  },
  titleHeader: {
    margin: 0,
    fontWeight: "600",
    fontSize: "28px",
    paddingBottom: "1vmin",
    textAlign: "center",
    // color: "yellow",
    background: "yellow",
    color: "black",
    width: "fit-content",
  },
  infoContainer: {
    justifyContent: "space-between",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    backgroundImage: "url(/paperblackbackground.jpg)",
  },
  hightlightedText: {
    margin: 0,
    fontWeight: "300",
    fontSize: "15px",
    fontStyle: "italic",
    textAlign: "center",
    padding: "1vmin",
    background: "white",
    color: "black",
    width: "350px",
    height: "100%",
  },
  linkContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    padding: "0.5vmin",
    paddingRight: "15px",
  },
  link: {
    zIndex: 1,
    fontSize: "19px",
    fontWeight: "500",
    color: "white",
    inlineSize: "max-content",
    textDecoration: "unset",
    alignSelf: "flex-end",
    "&:hover": {
      fontWeight: "800",
      color: "white",
    },
  },
}));
