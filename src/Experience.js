import React from 'react';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import experience from './data/experience';
import './App.css';

function Experience() {
  return (
    <div className="App-body header-elem-box">
      <div className="header-elem-box">
        <p className="title color-green-2">
          <strong>&gt;</strong> experience
        </p>
        <Timeline align="alternate">
          {
            experience.map(e => {
              return (
                <TimelineItem key={e.id} className="exp-card">
                  <TimelineOppositeContent>
                    <p color="textSecondary" className="App-link exp-item-3 color-gray">{e.date}</p>
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineDot variant="outlined"/>
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>
                    <p className="App-link color-green-2 exp-item-2"><strong>{e.position}</strong></p>
                    <p className="App-link color-gray exp-item"><strong>{e.name}</strong></p>
                    <p className="App-link color-gray-intermediate exp-item-2">
                      { e.tech.map(t=> <span key={t.toString()}> {t.toString()} </span>) }
                    </p>
                  </TimelineContent>
                </TimelineItem>
            )})
          }
        </Timeline>
      </div>
    </div>
  )
}

export default Experience;