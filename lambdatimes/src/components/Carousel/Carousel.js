import React, { Component } from 'react';
import { carouselData } from '../../data'

// Complete this Carousel 
export default class Carousel extends Component {
  constructor(props){
    super(props);
    this.state = {
      carousel: carouselData,
      next: data.next, // - stretch
      prev: data.previous } // - stretch
  }

  componentDidMount(){
    this.setState({
      carouselData: carouselData
    })
  };

  leftClick = e => {
    if (this.state.prev === null) {
      e.preventDefault();
    }

    else {
      this.setState(this.state.prev);
    }

  }

  rightClick = e => {
    if (this.state.next === null) {
      e.preventDefault();
    }
    
    else {
      this.setState(this.state.next);
    }

  }

  selectedImage = () => {
    return <img src={} style={{display: 'block'}} />
  }
  
  render(){
    return (
      <div className="carousel">
        <div className="left-button" onClick={this.leftClick}>{"<"}</div>
        <div className="right-button" onClick={this.rightClick}>{">"}</div>
      </div>
    )
  }
}