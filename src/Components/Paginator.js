import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Link,
  Switch
} from 'react-router-dom';

const Paginator = ({ previous, next, callback }) => {
  console.log(next);
  return (
    <div className="row Paginator">
      <button
        className="col-md-2 offset-md-1"
        onClick={() => callback(previous)}
      >
        Previous
      </button>

      <button className="col-md-2 offset-md-6" onClick={() => callback(next)}>
        Next
      </button>
    </div>
  );
};

export default Paginator;
