import React from 'react';
import Skills from './Skills';
import Experience from './Experience';
import './App.css';

function Body() {
  return (
    <div>
      <div className="App-body header-elem-box">
        <div className="row-custom">
          <div className="header-elem-box">
            <p className="title color-green-2">
              <strong>&gt;</strong> about me
            </p>
            <p className="exp-item-reg text-console padding-small color-gray-strong">
              I've been a backend developer programming in Django and Symfony and I've had fun learning Node and React this year.
            </p>
            <p className="exp-item-reg text-console padding-small color-gray-strong">
              I think collective projects are a wonderful way to work in groups of people where we can share experiences and knowledge.
            </p>
            <p className="exp-item-reg text-console padding-small color-gray-strong">
              I'm also interested in art, free software & technical challenges. That's why I'm playing with Hydra, GTP-2 and other art-tech tools.
            </p>
          </div>
          {/* <img src={hands} className="App-logo aling-centered" alt="logo" /> */}
        </div>
      </div>
      <Experience />
      <Skills />
    </div>
  )
}

export default Body;
