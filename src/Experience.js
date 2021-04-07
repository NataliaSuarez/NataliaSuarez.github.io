import React from "react";
import { makeStyles } from "@material-ui/core";

import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import experience from "./data/experience";
import RadarChart from "react-svg-radar-chart";
import "react-svg-radar-chart/build/css/index.css";
import theme from "./theme";
import { data, captions } from "./data/skills";
import "./App.css";

const Experience = () => {
  const classes = useStyles();
  return (
    <div className="background-white column justify-start fz-5 color-gray-dark padding-v-small">
      <div className="padding-vmin-v-small justify-s-between">
        <p className={classes.hightlightedText}>
          <strong>&gt;</strong> experience
        </p>
        <div className="desktop-flex">
          <div className="column padding-large-desktop">
            {data.map((d, i) => {
              return (
                <div className={classes.radarContainer} key={i}>
                  <span className={classes.radarSkillName}>
                    {d[0].name || ""}
                  </span>
                  <RadarChart captions={captions[i]} data={data[i]} />
                </div>
              );
            })}
          </div>
          <Timeline align="alternate" className="f-width">
            {experience.map((e) => {
              return (
                <Accordion key={e.id}>
                  <AccordionSummary>
                    <TimelineItem className={classes.timeLineItem}>
                      <TimelineOppositeContent
                        className={classes.oppositeContent}
                      >
                        <p
                          color="textSecondary"
                          // className="fz-6 light-300-text color-gray"
                          className={classes.oppositeContentDate}
                        >
                          {e.date}
                        </p>
                      </TimelineOppositeContent>
                      <div className={classes.separator}></div>
                      {/* <TimelineSeparator>
                        <TimelineDot
                          variant="outlined"
                          className={classes.hidden}
                        />
                        <TimelineConnector />
                      </TimelineSeparator> */}
                      <TimelineContent>
                        <p className={classes.roleText}>
                          <strong>{e.position}</strong>
                        </p>
                        <p className={classes.projectNameText}>
                          <strong>{e.name}</strong>
                        </p>
                        <p className={classes.techContent}>
                          {e.tech.map((t) => (
                            <span key={t.toString()}> {t.toString()} </span>
                          ))}
                        </p>
                      </TimelineContent>
                    </TimelineItem>
                  </AccordionSummary>
                  <AccordionDetails>
                    <p className="color-gray fz-6 light-300-text">{e.data}</p>
                  </AccordionDetails>
                </Accordion>
              );
            })}
          </Timeline>
        </div>
      </div>
    </div>
  );
};

export default Experience;

const useStyles = makeStyles((theme) => ({
  radarContainer: {
    justifyContent: "center",
    display: "contents",
    padding: "1vmin",
    "& svg": {
      marginBottom: "20px",
      alignSelf: "center",
    },
  },
  radarSkillName: {
    alignSelf: "center",
    marginTop: "20px",
    fontSize: "20px",
  },
  hidden: {
    display: "none",
  },
  separator: {
    // borderRight: "1px solid #cecbcb",
  },
  timeLineItem: {
    //
  },
  roleText: {
    margin: 0,
    fontSize: "14px",
    fontWeight: "500",
    color: "yellow",
    background: "#333",
    width: "fit-content",
  },
  projectNameText: {
    margin: 0,
    fontSize: "14px",
    fontWeight: "300",
    color: "#242b33",
  },
  techContent: {
    margin: 0,
    fontSize: "14px",
    fontWeight: "500",
    color: "#888787",
  },
  oppositeContent: {
    // backgroundColor: "#01a029",
    background: "fixed",
    backgroundImage: "url(/paperblackbackground.jpg)",
    maxWidth: "100px !important",
    height: "100px",
  },
  oppositeContentDate: {
    fontWeight: "300",
    color: "white",
    fontSize: "26px",
  },
  hightlightedText: {
    margin: 0,
    fontWeight: "600",
    fontSize: "26px",
    paddingBottom: "1vmin",
    background: "yellow",
    color: "black",
    width: "fit-content",
  },
}));
