import React from 'react';
import Skills from './Skills';
import Experience from './Experience';
import './App.css';

function Body() {
  return (
    <div>
      <div className="App-body header-elem-box">
        <div className="header-elem-box">
          <p className="title">
            <strong>&gt;</strong> about me
          </p>
          <p className="exp-item text-console padding-small">
            I've been a backend developer programming in Django and Symfony and I've had fun learning Node and React this year.
          </p>
          <p className="exp-item text-console padding-small">
            I think collective projects are a wonderful way to work in groups of people where we can share experiences and knowledge.
          </p>
          <p className="exp-item text-console padding-small">
            I'm also interested in art, free software & technical challenges. That's why I'm playing with Hydra, GTP-2 and other art-tech tools.
          </p>
        </div>
      </div>
      <Experience />
      <Skills />
    </div>
  )
}

export default Body;
