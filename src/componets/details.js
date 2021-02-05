import React, { Component } from "react";
import Gallery from './gallery'



class Details extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className="details-page">
        <div className="container">
          <div className="white-box">
          <section className="submenu">
            <div className="direction">
              <a href=""className="prev">Prev</a>
              <a href="" className="next">next</a>
            </div>

            <nav className="sub-links">
              <a href="">More ads by user</a>
              <a href="">Printr</a>
              <a href="">Share </a>
              <a href="">contact seller</a>
            </nav>
          </section>

          <section id="content-area">
            <div className="medium-column">
              <Gallery />
              </div>
            
            <div className="details-column">
              <div className="date">Posted: Feb 20th</div>
              <h3 className="name">Black 2016 BMW</h3>
              <h4 className="price">$46,000</h4>
              <div className="more-details">
                <div className="info">
                  <label htmlFor="">Vin</label>
                  <h5>helleooe</h5>
                </div>
                <div className="info">
                  <label htmlFor="">milage</label>
                  <h5>helleooe</h5>
                </div>
                <div className="info">
                  <label htmlFor="">Transmission</label>
                  <h5>helleooe</h5>
                </div>
              </div>
              <div className="description">
                <label htmlFor="">Description</label>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse,
                  ut. Possimus eum, dolore laborum laboriosam qui a! Ducimus ut
                  impedit error veniam pariatur autem officia, unde vel, id
                  mollitia dolores.
                </p>
              </div>
            </div>
          </section>
          </div>
        </div>
      </div>
    );
  }
}

export default Details;
