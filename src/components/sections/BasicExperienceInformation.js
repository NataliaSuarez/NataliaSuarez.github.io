import React from "react";
import { makeStyles } from "@material-ui/core";

const BasicExperienceInformation = ({ experience }) => {
  const classes = useStyles();

  return (
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
};

export default BasicExperienceInformation;

const useStyles = makeStyles((theme) => ({
  strongDataText: {
    fontWeight: "500",
  },
  italicDataText: {
    fontWeight: "400",
    fontStyle: "italic",
  },
}));
