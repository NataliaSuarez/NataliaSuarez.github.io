import React from 'react';
import { Carousel } from 'react-bootstrap';
import vue from './imgs/vue.webp';
import react from './imgs/react.png';
import html5 from './imgs/html-5.svg';
import bootstrap from './imgs/bootstrap.svg';
import django from './imgs/django.svg';
import python from './imgs/python.svg';
import nodejs from './imgs/nodejs.svg';
import php from './imgs/php.svg';
import mongo from './imgs/mongo.svg';
import mysql from './imgs/mysql.png';
import posgrest from './imgs/posgresql.png';
import docker from './imgs/docker.svg';
import frontend from './desing/frontend.svg';
import './App.css';

function Skills () {
  return (
    <div>
      <div className="App-body without-padding-bottom">
        <p className="title without-margin-bottom without-padding-bottom">
          <strong>&gt;</strong> skills
        </p>
      </div>
      <Carousel>
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
        <Carousel.Item>
          <img
            className="d-block w-100 height-400 opacity"
            src="https://images.freeimages.com/images/large-previews/99c/laptop-computers-1236114.jpg"
            alt="Backend"
          />
          <Carousel.Caption>
            <h2 className="tech-item">Backend</h2>
            <p className="tech-description">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            <img
              src={django}
              className="w-fix-little"
              alt="Django"
            />
            <img
              src={nodejs}
              className="w-fix-little"
              alt="Node"
            />
            <img
              src={python}
              className="w-fix-little"
              alt="Python"
            />
            <img
              src={php}
              className="w-fix-little"
              alt="Php"
            />
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 height-400 opacity"
            src="https://cdn.pixabay.com/photo/2015/09/05/20/02/coding-924920_960_720.jpg"
            alt="Databases"
          />
          <Carousel.Caption>
            <h2 className="tech-item">Databases</h2>
            <p className="tech-description">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            <img
              src={mysql}
              className="w-fix-little"
              alt="Mysql"
            />
            <img
              src={mongo}
              className="w-fix-little"
              alt="Mongo"
            />
            <img
              src={posgrest}
              className="w-fix-little"
              alt="Posgresql"
            />
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 height-400 opacity"
            src="https://images.freeimages.com/images/large-previews/99c/laptop-computers-1236114.jpg"
            alt="Infrastructure"
          />
          <Carousel.Caption>
            <h2 className="tech-item">Infrastructure</h2>
            <p className="tech-description">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            <img
              src={docker}
              className="w-fix-little"
              alt="Docker"
            />
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default Skills