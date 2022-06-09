import React, { Component } from 'react';
import "./Gallery.css";

import img1 from "../pics/01.jpg";
import img2 from "../pics/02.jpg";
import img3 from "../pics/03.jpg";
import { CSSTransition, SwitchTransition } from 'react-transition-group';

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
        this.interval = setInterval(() => this.changeIndex(), 10000);
      }
    componentWillUnmount() {
        clearInterval(this.interval);
    }
    render () {
        return (
            <div className="gallery">
                <SwitchTransition>
                    <CSSTransition key={this.state.index} classNames="slide" timeout={600}>
                        <img src={this.state.picList[this.state.index]} />
                    </CSSTransition>
                </SwitchTransition>
            </div>
        )
    }
}

export default Gallery;