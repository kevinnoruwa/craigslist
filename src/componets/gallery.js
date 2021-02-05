import React, { Component } from "react";

export default class Gallery extends Component {
  constructor() {
    super();
    this.state = {
      allimgs:  [''],
      currentImg: "",
      currentIndex: 0
      
    };

    this.allImgsLoop = this.allImgsLoop.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
  }
  componentDidMount(){
      let allimg =    [
        "https://images.craigslist.org/00Z0Z_4WGWlf4RjV5z_0yQ0t2_600x450.jpg",
        "https://images.craigslist.org/00J0J_cN7cbVBHL8mz_0Aw0t2_600x450.jpg",
        "https://images.craigslist.org/00z0z_lxTx6peQQK2z_0t20CI_1200x900.jpg",
        "https://images.craigslist.org/00e0e_iCpJCKnNepEz_0CI0t2_1200x900.jpg",
      ]

      this.setState({
           allimgs: allimg,
          currentImg: allimg[this.state.currentImg]

      })
  }

  

 
  allImgsLoop = () => {
    return this.state.allimgs.map((item, i) => {
      return (
        <div key={i} className="thumb-img">
          <img
            style={{
              backgroundImage: `url('${item}')`,
            }}
          />
        </div>
      );
    });
  };

  nextBtn = () => {
      

    if(this.state.currentIndex !== (this.state.allimgs.length - 1) ) {
        return this.setState({
            currentIndex: this.state.currentIndex   +  1
        })


    }
    
       
     

 

  }

  prevBtn = () => {

    console.log("preevvv")
    if(this.state.currentIndex !== 0 ) {
        return this.setState({
            currentIndex: this.state.currentIndex  -  1
        })

    }
         

      
    
      
}
  render() {
    return (
      <div>
        <div className="main-image">
          <div onClick={this.prevBtn} className="arrows left-arrow">{"<"}</div>
          <div onClick={this.nextBtn}className=" arrows right-arrow">{">"}</div>
          <div
            className="image-1"
            style={{
              backgroundImage:
                `url('${this.state.allimgs[this.state.currentIndex]}')`,
            }}
          ></div>
        </div>
        <div className="thumbnails">{this.allImgsLoop()}</div>
      </div>
    );
  }
}
