import React from "react";
import { makeStyles } from "@material-ui/core";

import keyboard from "../imgs/keyboard.jpg";
import "../App.css";

function Header() {
  const classes = useStyles();

  return (
    <div className={classes.headerContainer}>
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
      {/* <div className={classes.linkContainer}>
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
      </div> */}
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
  infoContainer: {
    // height: "calc(100vh - 40vh)",
    // display: "flex",
    // backgroundImage: "url(/keyboard.jpg)",
    // alignItems: "center",
    // flexDirection: "column",
    // justifyContent: "space-evenly",
    // [`@media(min-width: 700px)`]: {
    //   flexDirection: "row",
    //   justifyContent: "space-between",
    // },
    // "& ::after": {
    //   position: "absolute",
    //   zIndex: 1,
    //   top: 0,
    //   right: 0,
    //   bottom: 0,
    //   left: 0,
    //   content: "",
    //   backgroundColor: "rgba( 29, 29, 27, .5 )",
    // },
  },
  hightlightedText: {
    // borderBottom: "13px solid deeppink",
    // borderRight: "14px solid deeppink",
    // borderTop: "4px solid deeppink",
    // margin: 0,
    // fontWeight: "300",
    // fontSize: "15px",
    // fontStyle: "italic",
    // textAlign: "center",
    // padding: "1vmin",
    // background: "white",
    // color: "black",
    // width: "350px",
    // height: "fit-content",
  },
  linkContainer: {
    // display: "flex",
    // padding: "0.5vmin",
    // alignSelf: "center",
    // paddingRight: "15px",
    // flexDirection: "column",
    // justifyContent: "space-around",
    // [`@media(min-width: 700px)`]: {
    //   alignSelf: "flex-end",
    //   flexDirection: "row",
    // },
  },
  link: {
    // color: "white",
    // fontWeight: "400",
    // fontSize: "11px",
    // width: "150px",
    // padding: "2px 4px",
    // inlineSize: "max-content",
    // textDecoration: "unset",
    // margin: "3px",
    // background: "black",
    // // alignSelf: "flex-start",
    // "&:hover": {
    //   fontWeight: "800",
    //   color: "white",
    // },
    // [`@media(min-width: 700px)`]: {
    //   fontWeight: "500",
    //   fontSize: "15px",
    //   padding: "10px 20px",
    //   background: "transparent",
    // },
  },
  spanVariableAnimation: {
    content: "algo",
    animation: "fadeIn 8s linear",
    animationDelay: "2s",
    animationIterationCount: "infinite",
  },
}));
