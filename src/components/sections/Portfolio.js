import { makeStyles } from "@material-ui/core";
import clsx from "clsx";
import React from 'react';
import ApiTS from '../../videos/ApiTS.webm';
import Hooks from '../../videos/Hooks.webm';
import Incuba from '../../videos/Incuba.mov';
import Paisapp from '../../videos/Paisapp.mp4';
import Weather from '../../videos/Weather.mov';
import PortfolioItem from './PortfolioItem';

const projects = [
  {
    title: 'Paisapp',
    source: Paisapp,
    description: 'Mobile app creating with Expo, with Login, Home and Contacts screens',
    githubLink: 'https://github.com/NataliaSuarez/paisapp-challenge',
    techs: ['Typescript', 'React Native', 'Expo', 'React Query']
  },
  {
    title: 'TS Mock',
    source: ApiTS,
    description: 'API rest creating with Express and Typescript to mock data',
    onlineVersionLink: 'https://ts-mock.herokuapp.com/api/brokers', 
    githubLink: 'https://github.com/NataliaSuarez/ts-mock',
    techs: ['Typescript', 'Express', 'Node']
  },
  {
    title: 'Weather&Clock',
    source: Weather,
    description: 'Project to consult the state of the weather according to country and city selectors',
    onlineVersionLink: 'https://endearing-cupcake-1d9228.netlify.app/', 
    githubLink: 'https://github.com/NataliaSuarez/weather',
    techs: ['Typescript', 'React', 'React Query', 'React Testing Library']
  },
  {
    title: 'Functional Components: Hooks Guide',
    source: Hooks,
    description: 'Web with main concepts of hooks with code examples',
    onlineVersionLink: 'https://zesty-pudding-770a4e.netlify.app/', 
    githubLink: 'https://github.com/NataliaSuarez/functional-components',
    techs: ['React']
  },
  {
    title: 'Landing for ONG with UI design',
    source: Incuba,
    description: 'Project for ONG with their own design and with the requirement to mantaine for mobile version',
    onlineVersionLink: 'http://incubasocial.mx/', 
    techs: ['React']
  },
]

const Portfolio = () => {
  const classes = useStyles();
  return (
    <div
      className={clsx(
        "column justify-start fz-5 color-gray-dark padding-v-small",
        classes.section
      )}
      id="experience"
    >
      <div className={classes.hightlightedText}>
        &gt; training projects
      </div>
      <div className={classes.projectsContainer}>
      {
        projects.map((p, i) => (<PortfolioItem
          key={i}
          title={p.title}
          description={p.description}
          source={p.source}
          onlineVersionLink={p.onlineVersionLink}
          githubLink={p.githubLink}
          techs={p.techs}
        />))
      }
      </div>
    </div>)
};

export default Portfolio;

const useStyles = makeStyles((theme) => ({
  section: {
    minHeight: "100vh",
    justifyContent: "max-content",
    background: "#FFFFFF",
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
  projectsContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: '24px 24px',
    justifyContent: 'center',
  },
  descriptionText: {
    margin: 0,
    fontWeight: "300",
    fontSize: "16px",
    padding: "12px 2px 12px 2px",
    color: "#333",
    [`@media(min-width: 700px)`]: {
      fontWeight: "400",
      fontSize: "20px",
    },
    [`@media(min-width: 1200px)`]: {
      fontWeight: "400",
      fontSize: "24px",
    },
  },
  dateText: {
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
  contentContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  infoProjectContainer: {
    fontSize: '18px',
    padding: '10px 20px',
    display: 'flex',
    flexDirection: 'column'
  },
  info: {
    marginBottom: '20px'
  }
}));