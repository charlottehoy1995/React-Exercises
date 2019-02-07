import React, { Component } from 'react';

class NavBar extends Component {
    render() {
      return (
        <div id="navbar">
        <div class="navbar-centered">
            <a href="#tracker">Tracker</a>
            <a href="#dashboard">Dashboard</a>
            <a href="#trainers">Profile</a>
            <a href="#trainers">Clear Table</a>
        </div>
        </div>

      );
    }
}

export default NavBar;