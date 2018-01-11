import React, { Component } from 'react';
import logo from './sabers.jpeg';
import './App.css';
import Navbar from './Navbar';
import FilmsList from './Components/Pages/FilmsList';
import PeopleList from './Components/Pages/PeopleList';
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Link,
  Switch
} from 'react-router-dom';
import OneFilm from './Components/Pages/OneFilm';


const filmsArray = ['film1', 'film2', 'film3'];

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to the Dark Side</h1>
            <Navbar />
          </header>

          <Route exact path="/" render={props => <FilmsList {...props} />} />

          <Route exact path="/films" render={props => <FilmsList {...props} />} />
          <Route exact path="/films/:id" component={OneFilm} />

          <Route exact path="/people" render={props => <PeopleList {...props} />} />
          <Route exact path="/people/:id" render={props => <PeopleList {...props} />} />

          <Route exact path="/planets" render={props => <PeopleList {...props} />} />
          <Route exact path="/planets/:id" render={props => <PeopleList {...props} />} />

          <Route exact path="/species" render={props => <PeopleList {...props} />} />
          <Route exact path="/species/:id" render={props => <PeopleList {...props} />} />

          <Route exact path="/starships" render={props => <PeopleList {...props} />} />
          <Route exact path="/starships/:id" render={props => <PeopleList {...props} />} />

          <Route exact path="/vehicles" render={props => <PeopleList {...props} />} />
          <Route exact path="/vehicles/:id" render={props => <PeopleList {...props} />} />

        </div>
      </Router>
    );
  }
}

export default App;
