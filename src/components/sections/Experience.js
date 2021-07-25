import React from "react";
import { makeStyles } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import ButtonBase from "@material-ui/core/ButtonBase";

import clsx from "clsx";
import experience from "../../data/experience";
import "../../App.css";

const Experience = () => {
  const classes = useStyles();
  return (
    <div
      className={clsx(
        "column justify-start fz-5 color-gray-dark padding-v-small",
        classes.section
      )}
    >
      <p className={classes.hightlightedText}>&gt; experience</p>
      <div className={classes.gridContainer}>
        <Grid container xs={12} classes={{ container: classes.justifyCenter }}>
          <Grid
            container
            item
            spacing={1}
            classes={{ container: classes.justifyCenter }}
          >
            {experience.map((e) => (
              <Grid key={e.id} item>
                <ButtonBase
                  focusRipple
                  key={e.id}
                  className={classes.experienceContainer}
                  focusVisibleClassName={classes.focusVisible}
                >
                  <div className={classes.dateText}>{e.date}</div>
                  <span className={classes.infoText}>{e.data}</span>
                </ButtonBase>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Experience;

const useStyles = makeStyles((theme) => ({
  section: {
    minHeight: "100vh",
    justifyContent: "max-content",
    background: "#fafafa",
  },
  gridContainer: {
    paddingTop: "10px",
    flexGrow: 1,
    display: "flex",
    alignItems: "center",
    [`@media(min-width: 1200px)`]: {
      padding: "0 100px",
    },
  },
  experienceContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    height: "calc(100vh/5)",
    width: "calc(100vh/5)",
    padding: "6px",
    cursor: "default",
    overflow: "hidden",
    "&:hover": {
      backgroundColor: "gray",
      opacity: 0.1,
      transition: theme.transitions.create("opacity"),
    },
    "&:focus": {
      outline: "none",
    },
    [`@media(min-width: 700px)`]: {
      padding: "12px",
    },
  },
  imageBackdrop: {
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create("opacity"),
    "&:hover": {
      opacity: 0.15,
    },
  },
  focusVisible: {},
  justifyCenter: {
    justifyContent: "center",
  },
  dateText: {
    color: "#333",
    fontSize: "18px",
    fontWeight: "400",
    borderBottom: "2px solid rgba(144,42,172,1)",
    whiteSpace: "nowrap",
    width: "100%",
    textAlign: "start",
    marginBottom: "4px",
    [`@media(min-width: 700px)`]: {
      fontSize: "23px",
      marginBottom: "10px",
    },
  },
  infoText: {
    color: "#333",
    fontSize: "9px",
    fontWeight: "300",
    [`@media(min-width: 700px)`]: {
      fontSize: "10px",
    },
    [`@media(min-width: 1200px)`]: {
      fontSize: "12px",
    },
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
}));
