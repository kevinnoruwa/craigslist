import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div className>
        <header>
          <div className="left-menu">
            <div className="logo">Craigslist</div>
            <div className="city">
              San Fransico
              <i className="fa fa-arrow-circle-o-down" aria-hidden="true"></i>
            </div>
          </div>
          <div className="right-menu">
            <div className="user-img">img</div>
            <div className="user-dropdown">
              my account
              <i className="fa fa-arrow-circle-o-down" aria-hidden="true"></i>
            </div>
            <div className="post-btn">post ti clasfieds</div>
          </div>
        </header>
      </div>
    );
  }
}

export default Header;
