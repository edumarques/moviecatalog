import React, { Component } from "react";
import "./css/MovieItem.css";

class MovieItem extends Component {
  render() {
    return (
      <div className="movieItem">
        <div>
          <table>
            <tbody>
              <tr>
                <td>
                  <img
                    alt={this.props.movie.title}
                    width="70"
                    src={
                      "https://image.tmdb.org/t/p/w185/" +
                      this.props.movie.poster_path
                    }
                  />
                </td>
                <td id="overviewSection">
                  <h4>
                    <i>{this.props.movie.title}</i>
                  </h4>
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
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default MovieItem;
