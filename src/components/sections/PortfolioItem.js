import { makeStyles } from "@material-ui/core";
import React from 'react';

const PortfolioItem = ({title, source, description, onlineVersionLink, githubLink, techs}) => {
  const classes = useStyles();
  return (
    <div className={classes.projectContainer}>
      <div className={classes.dataText}>{title}</div>
      <div className={classes.contentContainer}>
        <video width="200" height="auto" controls>
          <source src={source} type="video/mp4"/>
        </video>
        <div className={classes.infoProjectContainer}>
          <div className={classes.info}>{description}</div>
          <div className={classes.techContainer}>
            {techs.map((t, i) => <span key={i} className={classes.tech}>{t}</span>)}
          </div>
          {
            onlineVersionLink ?
            <a href={onlineVersionLink} className={classes.link}> &gt; Online Version</a>
            : null
          }
          {
            githubLink ? 
            <a href={githubLink} className={classes.link}> &gt; Github repository</a>
            : null
          }
        </div>
      </div>
    </div>
  )
};

export default PortfolioItem;

const useStyles = makeStyles((theme) => ({
  projectContainer: {
    width: '90vw',
    marginBottom: '10px',
    marginTop: '10px',
    maxWidth: '420px',
  },
  dataText: {
    color: "rgba(144,42,172,1)",
    fontSize: "16px",
    fontWeight: "400",
    borderBottom: "2px solid rgba(144,42,172,1)",
    whiteSpace: "nowrap",
    width: "100%",
    textAlign: "start",
    marginBottom: "4px",
    [`@media(min-width: 700px)`]: {
      fontSize: "21px",
      marginBottom: "10px",
    },
  },
  techContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    marginBottom: '10px',
  },
  tech: {
    backgroundColor: '#999999',
    padding: '2px 6px',
    margin: '2px 4px',
    borderRadius: '12px',
    color: '#FFFFFF',
    fontSize: "10px",
    fontWeight: '500',
    [`@media(min-width: 700px)`]: {
      fontSize: '14px',
    },
  },
  contentContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  infoProjectContainer: {
    fontSize: "13px",
    padding: '10px 20px',
    display: 'flex',
    flexDirection: 'column',
    [`@media(min-width: 700px)`]: {
      fontSize: '18px',
    },
  },
  link: {
    color: "rgba(144,42,172,.8)",
  },
  info: {
    marginBottom: '20px'
  }
}));