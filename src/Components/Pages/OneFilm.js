import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Link,
  Switch
} from 'react-router-dom';

class OneFilm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      film: {}
    };
  }

  componentDidMount() {
    fetch(`https://swapi.co/api/films/${this.props.match.params.id}`)
      .then(response => response.json())
      .then(film => {
        console.log(film);
        this.setState({
          film: film
        });
      });
  }

  render() {
    const {film} = this.state;
    return (<div>
      <div className="row">
        <div className="card col-md-5 grid Film">
          <h4> {film.title} </h4>
          <h5> Episode number: {film.episode_id}</h5>
          <p> Description: </p>
          <p> {film.opening_crawl} </p>
          <p> Release date: {film.release_date} </p>
        </div>
      </div>
    </div>
    )
  }
}

export default OneFilm;
