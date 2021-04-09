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
    color: "#fafafa",
    display: "flex",
    padding: "3em 0 2.5em 0",
    background: "#0c0c0c",
    flexDirection: "column",
    justifyContent: "flex-start",
  },
  titleContainer: {
    display: "flex",
    zIndex: 1,
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    [`@media(min-width: 700px)`]: {
      marginBottom: "-33px",
    },
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
    display: "flex",
    backgroundImage: "url(/paperblackbackground.png)",
    // backdropFilter: "contrast(1.3)",
    background: "top",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "space-evenly",
    [`@media(min-width: 700px)`]: {
      flexDirection: "row",
      justifyContent: "space-between",
    },
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
    padding: "0.5vmin",
    alignSelf: "center",
    paddingRight: "15px",
    flexDirection: "column",
    // justifyContent: "space-around",
    [`@media(min-width: 700px)`]: {
      alignSelf: "flex-end",
      flexDirection: "row",
    },
  },
  link: {
    color: "white",
    fontWeight: "400",
    fontSize: "11px",
    width: "150px",
    padding: "5px 7px",
    inlineSize: "max-content",
    textDecoration: "unset",
    // alignSelf: "flex-start",
    "&:hover": {
      fontWeight: "800",
      color: "white",
    },
    [`@media(min-width: 700px)`]: {
      fontWeight: "500",
      fontSize: "15px",
      padding: "10px 20px",
    },
  },
  spanVariableAnimation: {
    content: "algo",
    animation: "fadeIn 8s linear",
    animationDelay: "2s",
    animationIterationCount: "infinite",
  },
}));
