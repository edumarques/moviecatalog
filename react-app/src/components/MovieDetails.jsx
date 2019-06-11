import React, { Component } from "react";
import "./css/MovieDetails.css";

class MovieDetails extends Component {
  render() {
    return (
      <div id="movieDetails">
        <div id="detailsPoster">
          <img
            alt={this.props.movie.title}
            width="120"
            src={
              "https://image.tmdb.org/t/p/w185/" + this.props.movie.poster_path
            }
          />
        </div>
        <div id="detailsTitle">
          <h4>
            <i>{this.props.movie.title}</i>
          </h4>
        </div>
        <div id="detailsOverview">
          <p>
            <b>Overview: </b>
            <i>{this.props.movie.overview}</i>
          </p>
          <p>
            <b>Original language: </b>
            <i>{this.props.movie.original_language}</i>
          </p>
          <p>
            <b>Popularity: </b>
            <i>{this.props.movie.popularity}</i>
          </p>
          <p>
            <b>Release date: </b>
            <i>{this.props.movie.release_date}</i>
          </p>
          <p>
            <b>Rating: </b>
            <i>{this.props.movie.vote_average}</i>
          </p>
        </div>
      </div>
    );
  }
}

export default MovieDetails;
