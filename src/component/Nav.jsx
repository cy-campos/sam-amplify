import React, { Component } from "react";

class Nav extends Component {
  state = {};
  render() {
    return (
      <div className="nav">
        <div>
          <a href="/">Home</a>
        </div>
        <div>
          <a href="/about">About</a>
        </div>
        <div>
          <a href="/rest">Rest</a>
        </div>
      </div>
    );
  }
}

export default Nav;
