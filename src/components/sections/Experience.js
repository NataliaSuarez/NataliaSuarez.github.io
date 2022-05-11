import { makeStyles } from "@material-ui/core";
import Chip from "@material-ui/core/Chip";
import Grid from "@material-ui/core/Grid";
import clsx from "clsx";
import React, { useMemo, useState } from "react";
import "../../App.css";
import experience from "../../data/experience";
import ExperienceDialog from "./ExperienceDialog";
import ExperienceItem from "./ExperienceItem";


const TechFilterButton = ({ tech, handleClick, selected }) => {
  const classes = useStyles({ isSelected: selected });

  return (
    <Chip
      key={tech}
      size="small"
      label={tech}
      // variant="outlined"
      clickable
      onClick={() => handleClick(tech)}
      onDelete={() => handleClick(tech)}
      // className={classes.chip}
      classes={{
        root: classes.chipRoot,
      }}
    />
  );
};

const Experience = () => {
  const classes = useStyles();
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedExperience, setSelectedExperience] = useState(null);
  const [selectedTechs, setSelectedTech] = useState([]);
  const [filter, setFilter] = useState('all')

  // eslint-disable-next-line no-unused-vars
  const techs = useMemo(
    () =>
      experience.reduce(
        (acc, c) => [...acc, ...c.tech.filter((t) => !acc.includes(t))],
        []
      ),
    []
  );

  const filterTechs = {
    mobile: ['React native', 'Expo', 'Vue Native Script', 'Firebase'],
    frontend: ['React', 'Microfrontends', 'Zustand', 'React-Query', 'Material UI', 'react-testing-library', 'GraphQL', 'Apollo', 'Typescript', 'styled-components', 'Redux', 'ReactAdmin', 'Vue'],
    backend: ['Api-REST', 'PostgreSQL', 'Django', 'Django REST', 'Symfony', 'Mysql', 'Docker', 'Feathers', 'MongoDB',],
    language: ['Javascript', 'Python', 'PHP',],
    methodology: ['Scrum', 'Kanban',],
    testing: ['Testing', 'react-testing-library'],
    other: [ 'Task estimation', 'Board management', 'Discover product', 'Accessibility']
  }

  const filterExperienceList = useMemo(
    () =>
      experience.filter((e) => {
        return filter === 'all' || e.tech.some((t) => selectedTechs.includes(t));
      }),
    [filter, selectedTechs]
  );
  const filteredExperience = useMemo(
    () => (filterExperienceList.length > 0 ? filterExperienceList : experience),
    [filterExperienceList]
  );

  const chips = useMemo(() => 
    filter === 'all' ||  selectedTechs === [] ? [] : filterTechs[filter],
    [filter, selectedTechs, filterTechs]
  )

  /// HANDLE DIALOG
  const handleClick = (experience) => {
    setDialogOpen(true);
    setSelectedExperience(experience);
  };
  const handleClose = () => {
    setDialogOpen(false);
  };

  return (
    <>
      <div
        className={clsx(
          "column justify-start fz-5 color-gray-dark padding-v-small",
          classes.section
        )}
        id="experience"
      >
        <div>
          <div className={classes.hightlightedText}>
            &gt; experience by projects
          </div>
        </div>
        <div className={classes.techFilterContainer}>
          <div className={classes.filterText}>
            Filter techs by:
            <select name="filters" id="filters" className={classes.filterLabel} onChange={(e) => {
              setFilter(String(e.target.value));
              setSelectedTech(e.target.value === 'all' ? [] : filterTechs[e.target.value]);
            }}>
              <option value="all">ALL</option>
              {Object.keys(filterTechs).map((t, i) => (
                <option value={t} key={i}>{t.toUpperCase()}</option>
              ))}
            </select>
          </div>
          {chips.map((tech) => (
            <TechFilterButton
              key={tech}
              tech={tech}
              handleClick={(t) => {
                if (selectedTechs.includes(t)) {
                  setSelectedTech(selectedTechs.filter((t) => t !== tech));
                  return;
                }
                setSelectedTech([...selectedTechs, tech]);
              }}
              selected={selectedTechs.includes(tech)}
            />
          ))}
          {/* <Chip
            size="small"
            label="Clear all"
            variant="outlined"
            clickable
            onClick={() => setSelectedTech([])}
            onDelete={() => setSelectedTech([])}
            classes={{
              root: clsx(classes.clearAllChipRoot, {
                [classes.hidden]: selectedTechs.length === 0,
              }),
            }}
          /> */}
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
                <ExperienceItem
                  key={e.id}
                  experience={e}
                  onClick={handleClick}
                />
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
  chipRoot: {
    fontFamily: '"Raleway", sans-serif',
    border: "1px solid rgba(144,42,172,0.7) !important",
    margin: "3px",
    transition: .1,
    boxShadow: '0px 2px 5px rgba(0,0,0,.04)',
    backgroundColor: ({ isSelected }) => isSelected ? "rgba(144,42,172,0.3)" : "white",
    color: ({ isSelected }) =>
      isSelected ? "rgba(144,42,172,1)" : "rgba(144,42,172,0.7)",
    '&:focus': {
      backgroundColor: ({ isSelected }) => isSelected ? "rgba(144,42,172,0.3)" : "white",
    },
    "&:hover": {
      backgroundColor: "rgba(144,42,172,1) !important",
      color: "white",
      "& svg": {
        color: "white",
      },
    },
    "& svg": {
      display: ({ isSelected }) => !isSelected && "none",
      color: "rgba(144,42,172,0.6)",
      "&:hover": {
        color: "white",
      },
    },
  },
  filterText: {
    color: "#333",
    fontSize: "18px",
    fontWeight: "400",
    borderBottom: "2px solid rgba(144,42,172,1)",
    whiteSpace: "nowrap",
    width: "100%",
    textAlign: "start",
    marginBottom: "4px",
    display: 'flex',
    alignItems: 'center',
    [`@media(min-width: 700px)`]: {
      fontSize: "23px",
      marginBottom: "10px",
    },
  },
  filterLabel: {
    fontSize: "16px",
    fontWeight: '600',
    padding: "6px 12px",
    color: '#5b5b5b',
    border: 'none',
    outline: 'none',
    borderRadius: '16px',
    backgroundColor: '#FFFFFF',
    boxShadow: '0px 2px 10px rgba(0,0,0,.05)',
    marginLeft: '8px',
    marginRight: '16px',
    marginTop: '8px',
    marginBottom: '4px',
    flex: 1,
    appearance: 'none'
  },
  hidden: {
    display: "none",
  },
  clearAllChipRoot: {
    fontFamily: '"Raleway", sans-serif',
    border: "1px solid rgba(144,42,172,0.7) !important",
    margin: "3px",
    textTransform: "uppercase",
    backgroundColor: ({ isSelected }) => isSelected && "rgba(144,42,172,0.3)",
    color: ({ isSelected }) =>
      isSelected ? "rgba(144,42,172,1)" : "rgba(144,42,172,0.7)",
    "&:hover": {
      backgroundColor: "rgba(144,42,172,1) !important",
      color: "white",
      "& svg": {
        color: "white",
      },
    },
    "& svg": {
      color: "rgba(144,42,172,0.6)",
      "&:hover": {
        color: "white",
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
    height: "fit-content",
    display: "flex",
    alignItems: "center",
    flexFlow: "wrap",
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
