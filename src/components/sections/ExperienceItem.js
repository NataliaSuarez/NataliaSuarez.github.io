import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import ButtonBase from "@material-ui/core/ButtonBase";
import BasicExperienceInformation from "./BasicExperienceInformation";

const ExperienceItem = ({ experience, onClick }) => {
  const classes = useStyles();

  const defaultText = <BasicExperienceInformation experience={experience} />;

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
    transition: theme.transitions.create(["background-color", "transform"], { duration: '.3s'}),
    "&:hover": {
      backgroundColor: "rgba(144,42,172,1)",
      transform: 'scale(1.2)',
      boxShadow: '0px 2px 20px rgba(0,0,0,.1)',
      "& div": {
        color: "white",
        borderBottom: "2px solid white",
      },
      "& span": {
        color: "white",
        fontSize: '12px',
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
    fontSize: "12px",
    fontWeight: "300",
    transition: theme.transitions.create(["background-color", "transform"]),
    // transition: "0.5s",
    "&:hover": {
      color: "white",
    },
    [`@media(min-width: 700px)`]: {
      fontSize: "14px",
    },
    [`@media(min-width: 1200px)`]: {
      fontSize: "16px",
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
