import React from 'react';
import { Carousel } from 'react-bootstrap';
import './App.css'

import vue from './imgs/vue.webp';
import react from './imgs/react.png';
import html5 from './imgs/html-5.svg';
import bootstrap from './imgs/bootstrap.svg';
import frontend from './desing/frontend.svg';

function Skill() {
  return (
    <Carousel.Item>
      <section
        className="w-100 height-400 background-gray"
        src="https://cdn.pixabay.com/photo/2019/07/16/18/18/frontend-4342425_960_720.png"
        alt="FRONTEND"
      />
      <Carousel.Caption>
        <img
          src={frontend}
          className="w-fix-big white"
          alt="frontend"
        />
        <h2 className="tech-item color-white">Frontend</h2>
        <p className="tech-description">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        <div className="margin-small">
          <img
            src={vue}
            className="w-fix-little filter-black-and-white"
            alt="Vue"
          />
          <img
            src={react}
            className="w-fix-little filter-black-and-white"
            alt="React"
          />
          <img
            src={html5}
            className="w-fix-little filter-black-and-white"
            alt="Html"
          />
          <img
            src={bootstrap}
            className="w-fix-little filter-black-and-white"
            alt="Bootstrap"
          />
        </div>
      </Carousel.Caption>
    </Carousel.Item>
  );
}

export default Skill;