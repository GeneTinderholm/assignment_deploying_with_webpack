import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Link,
  Switch
} from 'react-router-dom';

class Navbar extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="Navbar grid">
        <NavLink activeClassName="active" exact to="/">
          Home
        </NavLink>{' '}
        <NavLink activeClassName="active" exact to="/films">
          Films
        </NavLink>{' '}
        <NavLink activeClassName="active" to="/people">
          People
        </NavLink>
        <NavLink activeClassName="active" exact to="/planets">
          Planets
        </NavLink>{' '}
        <NavLink activeClassName="active" exact to="/species">
          Species
        </NavLink>{' '}
        <NavLink activeClassName="active" to="/starships">
          Starships
        </NavLink>
        <NavLink activeClassName="active" to="/vehicles">
          Vehicles
        </NavLink>
      </div>
    );
  }
}

export default Navbar;
