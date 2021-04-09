import React from "react";
import { makeStyles } from "@material-ui/core";

// import cleanCode from "./../cle";
import "./App.css";

function Header() {
  const classes = useStyles();

  return (
    <div className={classes.headerContainer}>
      <div className={classes.titleContainer}>
        <p className={classes.titleHeader}>
          <span id="name"></span>
        </p>
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
            LINKEDIN
          </a>
          <a
            className={classes.link}
            href="https://github.com/NataliaSuarez"
            target="_blank"
            rel="noopener noreferrer"
          >
            GITHUB
          </a>
          <a
            className={classes.link}
            href="https://twitter.com/natsuarez42"
            target="_blank"
            rel="noopener noreferrer"
          >
            TWITTER
          </a>
          <a
            className={classes.link}
            href="mailto:suarez.nataliam@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            NAT@DEV
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;

const useStyles = makeStyles((theme) => ({
  "@global": {
    "@keyframes spin": {
      "0%": {
        content: '"nat | d_"',
      },
      "10%": {
        content: '"nat | dev_"',
      },
      "20%": {
        content: '"nat | deve_"',
      },
      "30%": {
        content: '"nat | devel_"',
      },
      "40%": {
        content: '"nat | develo_"',
      },
      "50%": {
        content: '"nat | develop_"',
      },
      "60%": {
        content: '"nat | develope_"',
      },
      "70%": {
        content: '"nat | developer_"',
      },
      "80%": {
        content: '"nat | developer"',
      },
      "90%": {
        content: '"nat | developer_"',
      },
      "100%": {
        content: '"nat | developer"',
      },
    },
  },
  headerContainer: {
    //background-gray-3 column justify-start color-white padding-v-small fz-1
    background: "#0c0c0c",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    color: "#fafafa",
    padding: "3em 0 2.5em 0",
  },
  titleContainer: {
    justifyContent: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: "-33px",
    zIndex: 1,
  },
  titleHeader: {
    margin: 0,
    fontWeight: "600",
    fontSize: "33px",
    paddingBottom: "1vmin",
    textAlign: "center",
    // color: "yellow",
    background: "yellow",
    color: "black",
    // width: "fit-content",
    width: "320px",
    display: "flex",
    alignSelf: "center",
    "& #name": {
      textAlign: "left",
      "&::after": {
        content: '""',
        animation: "spin 2s linear infinite",
      },
    },
  },
  infoContainer: {
    height: "15em",
    justifyContent: "space-between",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    background: "fixed",
    backgroundImage: "url(/paperblackbackground.jpg)",
  },
  hightlightedText: {
    // borderBottom: "13px solid deeppink",
    // borderRight: "14px solid deeppink",
    // borderTop: "4px solid deeppink",
    margin: 0,
    fontWeight: "300",
    fontSize: "15px",
    fontStyle: "italic",
    textAlign: "center",
    padding: "1vmin",
    background: "white",
    color: "black",
    width: "350px",
    height: "fit-content",
  },
  linkContainer: {
    display: "flex",
    flexDirection: "row",
    // justifyContent: "space-around",
    padding: "0.5vmin",
    paddingRight: "15px",
    alignSelf: "flex-end",
  },
  link: {
    fontSize: "15px",
    fontWeight: "500",
    color: "white",
    inlineSize: "max-content",
    textDecoration: "unset",
    // alignSelf: "flex-start",
    padding: "10px 20px",
    width: "150px",
    "&:hover": {
      fontWeight: "800",
      color: "white",
    },
  },
  spanVariableAnimation: {
    content: "algo",
    animation: "fadeIn 8s linear",
    animationDelay: "2s",
    animationIterationCount: "infinite",
  },
}));
