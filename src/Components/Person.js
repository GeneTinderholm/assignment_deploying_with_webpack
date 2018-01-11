import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Link,
  Switch
} from 'react-router-dom';

const Person = ({ person }) => {
  return (
    <div>
      <div className="row">
        <div className="card col-md-5 grid Film">
          <h4>{person.name}</h4>
          <p>Films: </p>
          <div>
            {person.films.map((film) => {
                return (
                  <div>
                    <a href={film}> {film} </a>
                    <br />
                  </div>
                )
              })
            }
          </div>
          <p>
            <br />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Person;
