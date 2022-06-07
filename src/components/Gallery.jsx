import React, { Component } from 'react';
import "./Gallery.css";

import img1 from "../pics/01.jpg";

class Gallery extends Component {
    state = {
        index: 0,
        picList: [img1]
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