import React, { Component } from "react";

export default class Home extends Component {
  loopCategories() {
    let testArray = [1, 2, 3, 4, 5, 6, 7];

    return testArray.map((item, i) => {
      return (
        <div key={i} className="categories">
          <div className="title">Community</div>
          <div className="group-links">
            <a className="tags" href="#" className="link">
              Community
            </a>
            <a className="tags" href="#" className="link">
              General
            </a>
            <a className="tags" href="#" className="link">
              Activities
            </a>
            <a className="tags" href="#" className="link">
              Groups
            </a>
            <a className="tags" href="#" className="link">
              Lost & Found
            </a>
            <a className="tags" href="#" className="link">
              Classes
            </a>
            <a className="tags" href="#" className="link">
              Musicians
            </a>
            <a className="tags" href="#" className="link">
              Events
            </a>
            <a className="tags" href="#" className="link">
              Pets
            </a>
          </div>
        </div>
      );
    });
  }

  loopTags() {
    let testTags = [1, 2, 3, 4, 5, 6, 7];

    return testTags.map((item, i) => {
      return (
        <div key={i} className="tag">
          Apple Makcbook
        </div>
      );
    });
  }
  render() {
    return (
      <div className="home">
        <div className="container">
          <h1>
            Connecting People <br /> Everywhere
          </h1>
          <section id="links">{this.loopCategories()}</section>
          <section id="trending">
            <input name="search" className="search" type="text" />
            <div className="title">
              Trending now
              <i className="fa fa-clock-o"></i>
            </div>
            <div className="trending-tags">{this.loopTags()}</div>
          </section>
        </div>
      </div>
    );
  }
}
