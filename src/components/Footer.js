import React from "react";
import { makeStyles } from "@material-ui/core";
import clsx from "clsx";

import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";
import AlternateEmailIcon from "@material-ui/icons/AlternateEmail";

import "../App.css";

function Footer() {
  const classes = useStyles();
  return (
    <section
      className={clsx("background-gray-3", classes.section)}
      alt="Footer"
    >
      <div className={classes.footerContainer}>
        <p className={classes.footerNote}>
          &gt; share with me new funny projects, tech challenges & new
          knowledges :)
        </p>
        <div className={classes.compactContainer}>
          <div className={classes.contactLinksContainer}>
            <a
              className={classes.linkItem}
              href="https://www.linkedin.com/in/natalia-suarez-dev/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon style={{ fontSize: 40 }} />
            </a>
            <a
              className={classes.linkItem}
              href="https://github.com/NataliaSuarez"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon style={{ fontSize: 40 }} />
            </a>
            <a
              className={classes.linkItem}
              href="https://twitter.com/natsuarez42"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TwitterIcon style={{ fontSize: 40 }} />
            </a>
            <a
              className={classes.linkItem}
              href="mailto:contact@natdeveloper.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AlternateEmailIcon style={{ fontSize: 40 }} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;

const useStyles = makeStyles((theme) => ({
  section: {
    minHeight: "50vh",
    // background: "rgb(117 35 140)",
    background: "#0f0f10",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
  },
  footerContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: "40px",
  },
  compactContainer: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    paddingTop: "30px",
    paddingBottom: "6px",
    // width: "-webkit-fill-available",
  },
  contactLinksContainer: {
    display: "flex",
    width: "-webkit-fill-available",
    justifyContent: "center",
  },
  linkItem: {
    color: "#fafafa",
    textDecoration: "unset",
    padding: "0 20px",
    "&:hover": {
      color: "rgba(144,42,172,1)",
    },
  },
  footerNote: {
    color: "white",
    margin: "10px 50px",
    fontSize: "16px",
    fontWeight: "600",
    fontStyle: "italic",
  },
}));
