import React, { Component } from 'react';
import "./Gallery.css";

import img1 from "../pics/01.jpg";
import img2 from "../pics/02.jpg";
import img3 from "../pics/03.jpg";
import { CSSTransition, TransitionGroup } from 'react-transition-group';

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
        this.interval = setInterval(() => this.changeIndex(), 6000);
      }
    componentWillUnmount() {
        clearInterval(this.interval);
    }
    render () {
        return (
            <div className="gallery">
                <TransitionGroup>
                    <CSSTransition key={this.state.index} classNames="slide" timeout={400}>
                        <img src={this.state.picList[this.state.index]} />
                    </CSSTransition>
                </TransitionGroup>
            </div>
        )
    }
}

export default Gallery;