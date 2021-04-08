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
    <div className="background-gray-3 column justify-start fz-5 color-gray-dark padding-v-small">
      <div className="padding-vmin-v-small justify-s-between">
        <p className={classes.hightlightedText}>
          <strong>&gt;</strong> experience
        </p>
        <div className="desktop-flex">
          <Timeline align="alternate" className={classes.timeLineContainer}>
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
                          className={classes.oppositeContentDate}
                        >
                          {e.date}
                        </p>
                      </TimelineOppositeContent>
                      <div className={classes.separator}></div>
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
                    <p className={classes.titleTimelineContent}>{e.data}</p>
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
  timeLineContainer: {
    width: "fit-content !important",
    // "& div:first-child": {
    //   padding: "1em !important",
    // },
    "& div:last-child": {
      padding: "0 !important",
    },
  },
  separator: {
    // borderRight: "1px solid #cecbcb",
  },
  timeLineItem: {
    margin: 0,
  },
  titleTimelineContent: {
    fontSize: "13px !important",
    fontWeight: "200",
    backgroundImage: "url(/pieceofpaper.png)",
    backgroundSize: "470px 150px",
    width: "470px",
    height: "150px",
    padding: "29px 13px",
    // color: "#333",
    overflow: "hidden",
    // textOverflow: "ellipsis",
    wordBreak: "break-word",
    display: "-webkit-box",
    "-webkit-line-clamp": 5,
    "-webkit-box-orient": "vertical",
  },
  roleText: {
    margin: 0,
    fontSize: "14px",
    fontWeight: "500",
    color: "yellow",
    width: "fit-content",
    paddingLeft: "15px",
  },
  projectNameText: {
    margin: 0,
    paddingLeft: "15px",
    fontSize: "14px",
    fontWeight: "300",
    color: "white",
  },
  techContent: {
    margin: 0,
    paddingLeft: "15px",
    fontSize: "14px",
    fontWeight: "500",
    color: "gainsboro",
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
