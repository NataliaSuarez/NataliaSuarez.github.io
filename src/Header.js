import React from "react";
import { makeStyles } from "@material-ui/core";
import clsx from "clsx";

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
      <div className={classes.wrapContainer}>
        <div className={classes.wrap}>
          <div className={clsx(classes.block, classes.style1)}></div>
          <div className={clsx(classes.block, classes.style2)}></div>
          <div className={clsx(classes.block, classes.style3)}></div>
          <div className={clsx(classes.block, classes.style4)}></div>
          <div className={clsx(classes.block, classes.style5)}></div>
          <div className={clsx(classes.block, classes.style6)}></div>
          <div className={clsx(classes.block, classes.style7)}></div>
          <div className={clsx(classes.block, classes.style8)}></div>
          <div className={clsx(classes.block, classes.style1)}></div>
          <div className={clsx(classes.block, classes.style2)}></div>
          <div className={clsx(classes.block, classes.style3)}></div>
          <div className={clsx(classes.block, classes.style4)}></div>
          <div className={clsx(classes.block, classes.style5)}></div>
          <div className={clsx(classes.block, classes.style6)}></div>
          <div className={clsx(classes.block, classes.style7)}></div>
          <div className={clsx(classes.block, classes.style8)}></div>
        </div>
        <div className={classes.wrap}>
          <div className={clsx(classes.block, classes.style8)}></div>
          <div className={clsx(classes.block, classes.style7)}></div>
          <div className={clsx(classes.block, classes.style6)}></div>
          <div className={clsx(classes.block, classes.style5)}></div>
          <div className={clsx(classes.block, classes.style4)}></div>
          <div className={clsx(classes.block, classes.style3)}></div>
          <div className={clsx(classes.block, classes.style2)}></div>
          <div className={clsx(classes.block, classes.style1)}></div>
          <div className={clsx(classes.block, classes.style1)}></div>
          <div className={clsx(classes.block, classes.style2)}></div>
          <div className={clsx(classes.block, classes.style3)}></div>
          <div className={clsx(classes.block, classes.style4)}></div>
          <div className={clsx(classes.block, classes.style5)}></div>
          <div className={clsx(classes.block, classes.style6)}></div>
          <div className={clsx(classes.block, classes.style7)}></div>
          <div className={clsx(classes.block, classes.style8)}></div>
        </div>
        <div className={classes.wrap}>
          <div className={clsx(classes.block, classes.style1)}></div>
          <div className={clsx(classes.block, classes.style2)}></div>
          <div className={clsx(classes.block, classes.style3)}></div>
          <div className={clsx(classes.block, classes.style4)}></div>
          <div className={clsx(classes.block, classes.style5)}></div>
          <div className={clsx(classes.block, classes.style6)}></div>
          <div className={clsx(classes.block, classes.style7)}></div>
          <div className={clsx(classes.block, classes.style8)}></div>
          <div className={clsx(classes.block, classes.style8)}></div>
          <div className={clsx(classes.block, classes.style7)}></div>
          <div className={clsx(classes.block, classes.style6)}></div>
          <div className={clsx(classes.block, classes.style5)}></div>
          <div className={clsx(classes.block, classes.style4)}></div>
          <div className={clsx(classes.block, classes.style3)}></div>
          <div className={clsx(classes.block, classes.style2)}></div>
          <div className={clsx(classes.block, classes.style1)}></div>
        </div>
        <div className={classes.wrap}>
          <div className={clsx(classes.block, classes.style1)}></div>
          <div className={clsx(classes.block, classes.style2)}></div>
          <div className={clsx(classes.block, classes.style3)}></div>
          <div className={clsx(classes.block, classes.style4)}></div>
          <div className={clsx(classes.block, classes.style5)}></div>
          <div className={clsx(classes.block, classes.style6)}></div>
          <div className={clsx(classes.block, classes.style7)}></div>
          <div className={clsx(classes.block, classes.style8)}></div>
          <div className={clsx(classes.block, classes.style1)}></div>
          <div className={clsx(classes.block, classes.style2)}></div>
          <div className={clsx(classes.block, classes.style3)}></div>
          <div className={clsx(classes.block, classes.style4)}></div>
          <div className={clsx(classes.block, classes.style5)}></div>
          <div className={clsx(classes.block, classes.style6)}></div>
          <div className={clsx(classes.block, classes.style7)}></div>
          <div className={clsx(classes.block, classes.style8)}></div>
        </div>
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
    background: "#eed11a",
    color: "black",
    // width: "fit-content",
    width: "320px",
    display: "flex",
    alignSelf: "center",
    "& #name": {
      textAlign: "left",
      "&::after": {
        content: '""',
        animation: "spin 5s linear infinite",
      },
    },
  },
  wrapContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    overflow: "hidden",
  },
  wrap: {
    background: "#333",
    // marginTop: "50px",
    // marginBottom: "50px",
    width: "500px",
    // borderRadius: "5px",
    overflow: "hidden",
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
  },
  block: {
    width: "125px",
    height: "125px",
  },
  style1: {
    background: "#454547",
  },
  style2: {
    width: 0,
    height: 0,
    border: "62px solid #333",
    borderTopColor: "#aeafb3",
    borderBottomColor: "#aeafb3",
    background: "#aeafb3",
    paddingTop: "1px",
  },
  style3: {
    backgroundImage: "linear-gradient(135deg, #eed11a 50%, #dbdbdd 50%)",
  },
  style4: {
    backgroundImage: "linear-gradient(#333, #333 7px, #454547 7px, #454547)",
    backgroundSize: "100% 14px",
  },
  style5: {
    backgroundImage: "linear-gradient(45deg, #eec71a 50%, #333 50%)",
  },
  style6: {
    backgroundImage:
      "linear-gradient(135deg, #454547 50%, transparent 50%), linear-gradient(#333,#333 7px,#454547 7px,#454547)",
    backgroundSize: "100%, 100% 14px",
  },
  style7: {
    background:
      "linear-gradient(45deg, #dbdbdd 50%, transparent 50%), radial-gradient(#454547 4px, transparent 4px), radial-gradient(#454547 4px, transparent 4px), transparent",
    backgroundSize: "100%, 24px 24px, 24px 24px, 100%",
    backgroundPosition: "0 0, -2px 6px, 10px 18px, 0 0",
  },
  style8: {
    backgroundImage: "linear-gradient(315deg, #eec71a 50%, #333 50%)",
  },
  infoContainer: {
    height: "15em",
    display: "flex",
    // backgroundRepeatY: "no-repeat",
    // backgroundSize: "100%",
    // backgroundImage: "url(/paperblackbackground.svg)",
    // backdropFilter: "contrast(1.3)",
    // background: "top",
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
    padding: "2px 4px",
    inlineSize: "max-content",
    textDecoration: "unset",
    margin: "3px",
    background: "black",
    // alignSelf: "flex-start",
    "&:hover": {
      fontWeight: "800",
      color: "white",
    },
    [`@media(min-width: 700px)`]: {
      fontWeight: "500",
      fontSize: "15px",
      padding: "10px 20px",
      // background: "transparent",
    },
  },
  spanVariableAnimation: {
    content: "algo",
    animation: "fadeIn 8s linear",
    animationDelay: "2s",
    animationIterationCount: "infinite",
  },
}));
