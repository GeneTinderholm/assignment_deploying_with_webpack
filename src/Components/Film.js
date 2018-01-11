import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Link,
  Switch
} from 'react-router-dom';

const Films = ({ film }) => {
  return (
    <div>
      <div className="row">
        <div className="card col-md-5 grid Film">
    <Link to={`/films/${film.id}`}>
      <h4>{film.title}</h4>
    </Link>
          <p>Episode No: {film.episode}</p>
          <p>
            Description: <br />
            <br /> {film.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Films;
