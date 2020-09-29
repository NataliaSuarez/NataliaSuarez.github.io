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
      <section
        className="background-gray-3"
        alt="Frontend"
      >
        <div className="padding-large column">
          <p className="color-white">&gt; share with me new funny projects, tech challenges & new knowledges :)</p>
          <a
            className="color-white contact-list-item-centered"
            href="https://www.linkedin.com/in/natalia-suarez-dev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            + linkedin
          </a>
          <a
            className="color-white contact-list-item-centered"
            href="https://github.com/NataliaSuarez"
            target="_blank"
            rel="noopener noreferrer"
          >
            + github
          </a>
          <a
            className="color-white contact-list-item-centered"
            href="https://twitter.com/natsuarez42"
            target="_blank"
            rel="noopener noreferrer"
          >
            + twitter
          </a>
          <a
            className="color-white contact-list-item-centered"
            href="mailto:suarez.nataliam@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            + nat@dev
          </a>
        </div>
      </section>
    </div>
  )
}

export default Body;
