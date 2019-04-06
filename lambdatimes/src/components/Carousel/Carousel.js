import React, { Component } from 'react';
import { carouselData } from '../../data';

// Complete this Carousel 
export default class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      carousel: [],
      activeIndex: 0,
      nextIndex: '',
      newIndex: '',
    }; // - stretch
  }

  componentDidMount() {
    this.setState({
      carousel: carouselData
    })
  };

  leftClick = e => {
      e.preventDefault();
      console.log('left button clicked');
      this.state.carousel[this.state.activeIndex].style.display = 'none';

      // checks current index if it is greater than 0. If it is, then subtracts 1, sets display to block
      if(this.currentIndex > 0) {
        this.currentIndex -= 1;
        this.state.carousel[this.state.activeIndex].style.display = 'block';
      }
      // change current index to 3
      else {
        this.activeIndex = 3;
        this.state.carousel[this.state.activeIndex].style.display = 'block';
      }
    }

  rightClick = e => {
      e.preventDefault();
      console.log('right button clicked');
      this.state.carousel[this.state.activeIndex].style.display = 'none';

      // checks current index if it is less than 3. If it is, then add 1, sets display to block
      if(this.activeIndex < 3) {
        this.activeIndex += 1;
        this.state.carousel[this.state.activeIndex].style.display = 'block';
      }
      // change current index to 0
      else {
        this.activeIndex = 0;
        this.state.carousel[this.state.activeIndex].style.display = 'block';
      }
    }

  selectedImage = () => {
    return <img src={this.state.carousel[this.state.activeIndex]} style={{display: 'block'}} alt={'alt'}/>
  }
  
  render() {
    console.log(this.state.carousel)
    
    return (
      <div className="carousel" >
        <div className="left-button" onClick={this.leftClick}>{"<"}</div>
        <div className="right-button" onClick={this.rightClick}>{">"}</div>
      </div>
    )
  }
}