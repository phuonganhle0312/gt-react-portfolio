import React, { Component } from "react";
import "./NavBar.css"


class NavBar extends Component {
  render() {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="#"><h2>Phuong Le</h2></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <a class="nav-link" href="index.html"><h6>About</h6><span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="./portfolio.html"><h6>Portfolio</h6></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="./contact.html"><h6>Contact</h6></a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;