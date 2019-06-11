import React, { Component } from "react";
import "./css/Header.css";

class Header extends Component {
  render() {
    return (
      <header>
        <div id="imagesHeader">
          <img
            alt="React logo"
            width="50"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
          />
          <img
            alt="TMDb logo"
            width="40"
            src="https://www.themoviedb.org/assets/2/v4/logos/primary-green-d70eebe18a5eb5b166d5c1ef0796715b8d1a2cbc698f96d311d62f894ae87085.svg"
          />
        </div>
        <h3>Movie catalog</h3>
        The 20 most popular movies at the moment
      </header>
    );
  }
}

export default Header;
