import React from "react";
import { makeStyles } from "@material-ui/core";

import hands from "./desing/hands-heart.svg";
import "./App.css";

function Footer() {
  const classes = useStyles();
  return (
    <section className="background-gray-3" alt="Footer">
      <div className={classes.footerContainer}>
        <div className={classes.footerImage}>
          <div className={classes.imageContainer}>
            <img
              src={hands}
              className="height-30 align-center margin-b-small"
              alt="logo"
            />
          </div>
          <p className={classes.footerNote}>
            {/* <p className="color-white light-300-text fz-4 italic padding-small"> */}
            &gt; share with me new funny projects, tech challenges & new
            knowledges :)
          </p>
        </div>
        <div className={classes.compactContainer}>
          {/* <div className={classes.imageContainer}>
            <img
              src={hands}
              className="height-30 align-center margin-b-small"
              alt="logo"
            />
          </div> */}
          <div className={classes.contactLinksContainer}>
            <a
              className={classes.linkItem}
              href="https://www.linkedin.com/in/natalia-suarez-dev/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LINKEDIN
            </a>
            <a
              className={classes.linkItem}
              href="https://github.com/NataliaSuarez"
              target="_blank"
              rel="noopener noreferrer"
            >
              GITHUB
            </a>
            <a
              className={classes.linkItem}
              href="https://twitter.com/natsuarez42"
              target="_blank"
              rel="noopener noreferrer"
            >
              TWITTER
            </a>
            <a
              className={classes.linkItem}
              href="mailto:contact@natdeveloper.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              nat@dev
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;

const useStyles = makeStyles((theme) => ({
  footerContainer: {
    // padding: "15vmin",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    // backgroundImage: "url(/paperblackbackground.png)",
    background: "bottom",
    // justifyContent: "center",
    // "& svg": {
    //   marginBottom: "20px",
    // },
  },
  compactContainer: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    background: "#eed11a",
    paddingTop: "30px",
    paddingBottom: "6px",
    width: "-webkit-fill-available",
  },
  contactLinksContainer: {
    display: "flex",
    // background: "yellow",
    // paddingTop: "60px",
    // paddingBottom: "10px",
    width: "-webkit-fill-available",
    justifyContent: "center",
  },
  linkItem: {
    //"color-white fz-1 strong-text link-item align-init"
    color: "#333",
    fontSize: "9px",
    fontWeight: "400",
    textDecoration: "unset",
    padding: "0 20px",
    "&:hover": {
      color: "black",
      fontWeight: "400",
    },
  },
  footerImage: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    // display: "flex",
    // background: "yellow",
    paddingTop: "40px",
    paddingBottom: "160px",
    width: "-webkit-fill-available",
    // justifyContent: "space-evenly",
  },
  imageContainer: {
    display: "contents",
    padding: "10px",
  },
  footerNote: {
    background: "white",
    color: "black",
    margin: "0 50px",
    fontSize: "13px",
    fontWeight: "300",
    fontStyle: "italic",
    textAlign: "center",
    // padding: "1vmin",
    width: "fit-content",
    height: "fit-content",
    alignSelf: "center",
  },
}));
