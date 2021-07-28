import React, { useState, useMemo } from "react";
import { makeStyles } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import ButtonBase from "@material-ui/core/ButtonBase";
import Chip from "@material-ui/core/Chip";

import clsx from "clsx";
import experience from "../../data/experience";
import "../../App.css";
import ExperienceDialog from "./ExperienceDialog";

const TechFilterButton = ({ tech, onAdd, onRemove }) => {
  const [isSelected, setSelected] = useState(false);
  const classes = useStyles({ isSelected });

  return (
    <Chip
      key={tech}
      size="small"
      label={tech}
      variant="outlined"
      clickable
      onClick={() => {
        onAdd(tech);
        setSelected(true);
      }}
      onDelete={() => {
        onRemove(tech);
        setSelected(false);
      }}
      // className={classes.chip}
      classes={{
        root: classes.chipRoot,
        colorPrimary: classes.chipColorPrimary,
      }}
    />
  );
};

const Experience = () => {
  const classes = useStyles();
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedExperience, setSelectedExperience] = useState(null);
  const [selectedTechs, setSelectedTech] = useState([]);

  const techs = useMemo(
    () =>
      experience.reduce(
        (acc, c) => [...acc, ...c.tech.filter((t) => !acc.includes(t))],
        []
      ),
    []
  );

  const filterExperienceList = experience.filter((e) => {
    return e.tech.some((t) => selectedTechs.includes(t));
  });
  const filteredExperience =
    filterExperienceList.length > 0 ? filterExperienceList : experience;

  /// HANDLE DIALOG
  const handleClick = (experience) => {
    setDialogOpen(true);
    setSelectedExperience(experience);
  };
  const handleClose = () => {
    setDialogOpen(false);
  };

  /// HANDLE SELECTED TECHS TO FILTER
  const handleAddTech = (tech) => {
    if (!selectedTechs.includes(tech))
      setSelectedTech([...selectedTechs, tech]);
  };
  const handleRemoveTech = (tech) => {
    setSelectedTech(selectedTechs.filter((t) => t !== tech));
  };

  return (
    <>
      <div
        className={clsx(
          "column justify-start fz-5 color-gray-dark padding-v-small",
          classes.section
        )}
      >
        <div>
          <div className={classes.hightlightedText}>&gt; experience</div>
        </div>
        <div className={classes.techFilterContainer}>
          {techs.map((tech) => (
            <TechFilterButton
              key={tech}
              tech={tech}
              onAdd={handleAddTech}
              onRemove={handleRemoveTech}
            />
          ))}
        </div>
        <div className={classes.gridContainer}>
          <Grid container classes={{ container: classes.justifyCenter }}>
            <Grid
              container
              item
              spacing={1}
              classes={{ container: classes.justifyCenter }}
            >
              {filteredExperience.map((e) => (
                <Grid key={e.id} item>
                  <ButtonBase
                    focusRipple
                    key={e.id}
                    className={classes.experienceContainer}
                    focusVisibleClassName={classes.focusVisible}
                    onClick={() => handleClick(e)}
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
      <ExperienceDialog
        open={dialogOpen}
        onClose={handleClose}
        selectedExperience={selectedExperience}
      />
    </>
  );
};

export default Experience;

const useStyles = makeStyles((theme) => ({
  section: {
    minHeight: "100vh",
    justifyContent: "max-content",
    background: "#fafafa",
  },
  // chip: {
  //   border: ({ isSelected }) =>
  //     isSelected && "1px solid rgba(144,42,172,0.7) !important",
  // },
  chipRoot: {
    fontFamily: '"Raleway", sans-serif',
    border: "1px solid rgba(144,42,172,0.7) !important",
    margin: "3px",
    backgroundColor: ({ isSelected }) => isSelected && "rgba(144,42,172,0.3)",
    color: ({ isSelected }) => isSelected && "rgba(144,42,172,1)",
    "& svg": {
      color: "rgba(144,42,172,0.7)",
      "&:hover": {
        color: "rgba(144,42,172,0.3)",
      },
    },
  },
  techFilterContainer: {
    // display: "flow-root",
    marginTop: "10px",
    marginBottom: "10px",
    justifyContent: "center",
    width: "90%",
    alignSelf: "center",
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
    transition: theme.transitions.create(["background-color", "transform"]),
    "&:hover": {
      // backgroundColor: "white",
      // transform: "scale(1.2)",
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
  imageBackdrop: {
    // backgroundColor: theme.palette.common.black,
    // opacity: 0.4,
    // transition: theme.transitions.create("opacity"),
    // "&:hover": {
    //   opacity: 0.15,
    // },
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
