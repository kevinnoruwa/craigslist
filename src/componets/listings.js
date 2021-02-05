import React, { Component } from "react";

class Listings extends Component {
  constructor() {
    super();
    this.state = {};
  }

  loop() {
      let array = [1,2,3,4,5,6,7]

      return array.map((item, i) => {
          return (
            <div key={i} className="item">
            <div className="image">
             
              <div className="price">$8900</div>
            </div>
            <div className="details">
            <h5>Title</h5>

            <h6>City</h6>
          </div>
          </div>
          )
      } )

      
  }
  
  render() {
    const { match, location, history } = this.props;
    return (
      <div className="listings">
        <div className="container">
          <section className="filter">
            <div classname="form-group price">
              <label value="price"> price </label>
              <select classname="min-price" id="">
                <option value="0">0</option>
              </select>
              <select classname="max-price" id="">
                <option value="1000">1000</option>
              </select>
            </div>

            <div classname="form-group  make">
              <label htmlFor="">Make</label>
              <select name="bmw" classname="make" id="">
                <option value="0">0</option>
              </select>
            </div>
            <div classname="form-group  model">
              <label htmlFor=""> Models</label>
              <select name="bmw" classname="model" id="">
                <option value="0">0</option>
              </select>
            </div>
            <div classname="form-group  buttom">
              <div className="primary-btn">
                <div className="update-btn">Update</div>
              </div>
            </div>

            <div classname="form-group  buttom">
              <div className="primary-btn">
                <div className="reset-btn">Reset</div>
              </div>
            </div>
          </section>

          <section id="list-view">
            <div className="container">
                <div className="white-box">
              <section className="chnage-view">
                <div classname="form-group  view-dropdown">
                  <select name="select-view" classname="select-view" id="">
                    <option value="gallery">Gallery View </option>
                    <option value="list">List View </option>
                    <option value="thumb">thumb </option>
                  </select>

                  <select name="select-view" classname="select-view" id="">
                    <option value="gallery">Newest </option>
                    <option value="list">List View </option>
                    <option value="thumb">thumb </option>
                  </select>
                </div>
              </section>
              <section className="all-items">
                    {this.loop()}
              </section>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default Listings;
