import React from 'react';
import Skills from './Skills';
import Experience from './Experience';
import './App.css';

function Body() {
  return (
    <div className="App-body">
      <Experience />
      <Skills />
    </div>
  )
}

export default Body;
