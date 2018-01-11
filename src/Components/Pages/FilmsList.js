import React, { Component } from 'react';
import Paginator from '../Paginator';
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Link,
  Switch
} from 'react-router-dom';
import Film from '../Film';

class FilmsList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      films: []
    };
  }

  componentDidMount() {
    // this.setState({ isFetching: true });
    fetch('https://swapi.co/api/films/')
      .then(response => response.json())
      .then(json => {
        let films = json.results.map(film => {
          return {
            id: film.url.split('/').slice(-2, -1),
            title: film.title,
            episode: film.episode_id,
            description: film.opening_crawl,
            url: film.url
          };
        });
        console.log(films);
        this.setState({
          films: films
        });
      });
  }

  render() {
    const { films } = this.state;

    return (
      <div className="FilmsList">
        {films.map((film, index) => <Film film={film} key={index} />)}
      </div>
    );
  }
}

export default FilmsList;
