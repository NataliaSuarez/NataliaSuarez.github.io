import React from 'react';
import Experience from './Experience';
import './App.css';

function Body() {
  return (
    <div>
      <div className="background-white column justify-start fz-5 color-gray-dark padding-v-small">
        <div className="row-custom">
          <div className="padding-vmin-v-small justify-s-between">
            <p className="without-margin strong-1-text fz-5 padding-b-small color-green-2">
              <strong>&gt;</strong> about me
            </p>
            <p className="without-margin fz-4 light-300-text padding-small color-gray-strong">
              I've been a backend developer programming in Django and Symfony and I've had fun learning Node and React this year.
            </p>
            <p className="without-margin fz-4 light-300-text padding-small color-gray-strong">
              I think collective projects are a wonderful way to work in groups of people where we can share experiences and knowledge.
            </p>
            <p className="without-margin fz-4 light-300-text padding-small color-gray-strong">
              I'm also interested in art, free software & technical challenges. That's why I'm playing with <a
                href="https://hydra.ojack.xyz/"
                className="color-gray-strong color-gray-strong-link">Hydra</a>, <a
                href="https://minimaxir.com/2020/01/twitter-gpt2-bot/"
                className="color-gray-strong color-gray-strong-link">GTP-2</a> and other art-tech tools.
            </p>
          </div>
        </div>
      </div>
      <Experience />
    </div>
  )
}

export default Body;
