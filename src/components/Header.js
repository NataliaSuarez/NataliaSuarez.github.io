import React from "react";
import { makeStyles } from "@material-ui/core";

import keyboard from "../imgs/keyboard.jpg";
import "../App.css";

function Header() {
  const classes = useStyles();

  return (
    <div className={classes.headerContainer} id="presentation">
      <div className={classes.titleContainer}>
        <p className={classes.titleHeader}>
          <span id="name"></span>
        </p>
      </div>
      <img
        src={keyboard}
        width="100%"
        alt="computer"
        className={classes.imageHeader}
      />
      {/* <a className={classes.button} href={`#${section}`}>
        down
      </a> */}
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
      "3%": {
        content: '"nat | de_"',
      },
      "5%": {
        content: '"nat | dev_"',
      },
      "7%": {
        content: '"nat | deve_"',
      },
      "10%": {
        content: '"nat | devel_"',
      },
      "13%": {
        content: '"nat | develo_"',
      },
      "15%": {
        content: '"nat | develop_"',
      },
      "17%": {
        content: '"nat | develope_"',
      },
      "20%": {
        content: '"nat | developer_"',
      },
      "23%": {
        content: '"nat | developer"',
      },
      "25%": {
        content: '"nat | developer_"',
      },
      "28%": {
        content: '"nat | developer"',
      },
      "30%": {
        content: '"nat | developer_"',
      },
      "33%": {
        content: '"nat | develope_"',
      },
      "35%": {
        content: '"nat | develop_"',
      },
      "38%": {
        content: '"nat | devel_"',
      },
      "40%": {
        content: '"nat | deve_"',
      },
      "43%": {
        content: '"nat | dev_"',
      },
      "45%": {
        content: '"nat | de_"',
      },
      "48%": {
        content: '"nat | d_"',
      },
      "50%": {
        content: '"nat | _"',
      },
      "53%": {
        content: '"nat | "',
      },
      "55%": {
        content: '"nat | _"',
      },
      "57%": {
        content: '"nat | "',
      },
      "60%": {
        content: '"nat | c_"',
      },
      "63%": {
        content: '"nat | cu_"',
      },
      "65%": {
        content: '"nat | cur_"',
      },
      "68%": {
        content: '"nat | curi_"',
      },
      "70%": {
        content: '"nat | curio_"',
      },
      "73%": {
        content: '"nat | curiou_"',
      },
      "75%": {
        content: '"nat | curious_"',
      },
      "78%": {
        content: '"nat | curious"',
      },
      "80%": {
        content: '"nat | curious_"',
      },
      "83%": {
        content: '"nat | curiou_"',
      },
      "85%": {
        content: '"nat | curio_"',
      },
      "88%": {
        content: '"nat | curi_"',
      },
      "90%": {
        content: '"nat | cu_"',
      },
      "93%": {
        content: '"nat | c_"',
      },
      "95%": {
        content: '"nat | _"',
      },
      "100%": {
        content: '"nat | "',
      },
    },
  },
  headerContainer: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    background:
      "linear-gradient(4deg, rgba(63,94,251,1) 0%, rgb(114 29 151) 0%, rgb(126 10 157) 12%, rgb(95 14 117) 29%, rgba(8,8,9,1) 68%)",
    // "linear-gradient(4deg, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 0%, rgba(192,78,153,1) 12%, rgba(144,42,172,1) 29%, rgba(8,8,9,1) 68%)",
    // color: "white",
    // padding: "3em 0 2.5em 0",
    // background: "white",
  },
  titleContainer: {
    zIndex: 1,
    top: "60vh",
    position: "absolute",
    alignSelf: "center",
    left: "0",
    // [`@media(min-width: 700px)`]: {
    //   marginBottom: "-33px",
    // },
  },
  imageHeader: {
    filter: "blur(1px) grayscale(1)",
    opacity: "35%",
    maskImage: "linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0))",
    overflow: "hidden",
    objectFit: "cover",
  },
  titleHeader: {
    margin: 0,
    marginLeft: "20px",
    fontWeight: "600",
    fontSize: "36px",
    textAlign: "center",
    // background: "#333",
    color: "#fafafa",
    maxWidth: "360px",
    display: "flex",
    alignSelf: "center",
    "& #name": {
      textAlign: "left",
      "&::after": {
        content: '""',
        animation: "spin 5s linear infinite",
      },
    },
    [`@media(min-width: 700px)`]: {
      fontSize: "52px",
      maxWidth: "520px",
      marginLeft: "30px",
    },
    [`@media(min-width: 1200px)`]: {
      fontSize: "64px",
      maxWidth: "640px",
      marginLeft: "70px",
    },
  },
  infoContainer: {},
  hightlightedText: {},
  linkContainer: {},
  link: {},
  spanVariableAnimation: {
    content: "algo",
    animation: "fadeIn 8s linear",
    animationDelay: "2s",
    animationIterationCount: "infinite",
  },
  button: {
    padding: "4px",
    background: "#333",
    backdropFilter: "drop-shadow(4px 4px 10px blue)",
    borderRadius: "50%",
    width: "3em",
    height: "3em",
    color: "white",
    position: "fixed",
    bottom: "100px",
    right: "100px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));
