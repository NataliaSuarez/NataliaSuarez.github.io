import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import ButtonBase from "@material-ui/core/ButtonBase";

const ExperienceItem = ({ experience, onClick }) => {
  const classes = useStyles();

  const defaultText = (
    <>
      <span className={classes.strongDataText}>{`${experience.position}`}</span>{" "}
      {`${experience.project ? "at project" : ""}`}{" "}
      <span className={classes.italicDataText}>{`${experience.project}`}</span>{" "}
      {`${experience.company ? "in " : ""}`}
      <span className={classes.strongDataText}>{`${
        experience.company ? experience.company : ""
      }`}</span>
    </>
  );

  const [dataText, setDataText] = useState(defaultText);

  const handleMouseEnter = () => setDataText(experience?.data);

  const handleMouseLeave = () => setDataText(defaultText);

  return (
    <>
      <Grid item>
        <ButtonBase
          focusRipple
          className={classes.experienceContainer}
          focusVisibleClassName={classes.focusVisible}
          onClick={() => onClick(experience)}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className={classes.dateText}>{experience.date}</div>
          <span className={classes.infoText}>{dataText}</span>
        </ButtonBase>
      </Grid>
    </>
  );
};

export default ExperienceItem;

const useStyles = makeStyles((theme) => ({
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
    transition: theme.transitions.create(["background-color", "transform"]),
    transition: "0.5s",
    "&:hover": {
      backgroundColor: "rgba(144,42,172,1)",
      "& div": {
        color: "white",
        borderBottom: "2px solid white",
      },
      "& span": {
        color: "white",
      },
    },
    "&:focus": {
      outline: "none",
    },
    [`@media(min-width: 700px)`]: {
      padding: "12px",
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
    transition: theme.transitions.create(["background-color", "transform"]),
    transition: "0.5s",
    "&:hover": {
      color: "white",
    },
    [`@media(min-width: 700px)`]: {
      fontSize: "10px",
    },
    [`@media(min-width: 1200px)`]: {
      fontSize: "12px",
    },
  },
  strongDataText: {
    fontWeight: "500",
  },
  italicDataText: {
    fontWeight: "400",
    fontStyle: "italic",
  },
}));
