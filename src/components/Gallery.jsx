import React, { Component } from 'react';
import "./Gallery.css";

import img1 from "../pics/01.jpg";
import img2 from "../pics/02.jpg";
import img3 from "../pics/03.jpg";

class Gallery extends Component {
    state = {
        index: 0,
        picList: [img1, img2, img3]
    }
    compareIndex(i) { 
        i++
        return i%this.state.picList.length;
    }
    changeIndex() {
        this.setState({
            index: this.compareIndex(this.state.index)
        })
    }
    componentDidMount() {
        this.interval = setInterval(() => this.changeIndex(), 4000);
      }
    componentWillUnmount() {
        clearInterval(this.interval);
    }
    render () {
        return (
            <div className="gallery">
                <img src={this.state.picList[this.state.index]} />
            </div>
        )
    }
}

export default Gallery;