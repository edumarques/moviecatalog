import React, { Component } from "react";
import $ from "jquery";
import "./css/App.css";
import MovieItem from "./components/MovieItem";
import MovieDetails from "./components/MovieDetails";
import Header from "./components/Header";

class App extends Component {
  state = { items: [] };
  constructor() {
    super();
    this.fetchData();
  }

  fetchData() {
    const API_URL =
      "https://api.themoviedb.org/3/discover/movie?api_key=d084d45cd677fa91a0728e06cdd26961&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1";
    $.ajax({
      url: API_URL,
      success: data => {
        const movies = data.results;
        let movieItems = [];
        movies.forEach(movie => {
          let movieItem = <MovieItem movie={movie} />;
          let movieArray = [movie.id, movieItem];
          movieItems.push(movieArray);
        });
        this.setState({ items: movieItems });
      },
      error: (xhr, status, err) => {
        console.error("Failed to fetch data from TheMovieDB API.");
      }
    });
  }

  handleShowDetails = id => {
    let movieDetails;
    this.state.items.forEach(element => {
      if (element[0] === id) {
        movieDetails = <MovieDetails movie={element[1].props.movie} />;
      }
    });

    this.setState({ details: movieDetails });
  };

  render() {
    let movieList = [];
    this.state.items.forEach(element => {
      movieList.push(
        <li
          key={element[1].props.movie.id}
          onClick={() => this.handleShowDetails(element[1].props.movie.id)}
        >
          {element[1]}
        </li>
      );
    });

    return (
      <React.Fragment>
        <Header />
        <section id="movieList">
          <ul>{movieList}</ul>
        </section>
        <section id="details">{this.state.details}</section>
      </React.Fragment>
    );
  }
}

export default App;
