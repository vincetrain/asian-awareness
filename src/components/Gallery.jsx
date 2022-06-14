import "./Gallery.css";

import { CSSTransition, TransitionGroup } from 'react-transition-group';
import React, { useEffect, useState, useRef } from 'react';

var interval = null;

/**
 * 
 * 
 * @param {*} props 
 * @returns div containing gallery element
 */
function Gallery(props) {
    const [index, setIndex] = useState(0);
    const picList = props.picList;
    const time = props.interval;

    /**
     * Changes index to iterate between picList
     */
    function changeIndex() {
        setIndex((index+1)%picList.length)
    }

    // Sets timeout everytime component is updated (when images switch)
    interval = setTimeout( function() {changeIndex();}, time);
    const firstUpdate = useRef(true);
    // Clears timeout when unloaded.
    useEffect(() => {
        if (firstUpdate.current) {
            firstUpdate.current = false;
        }
        else {
            return() => {
                clearTimeout(interval)
                interval = null;
            };
        }
    }, []);

    return (
        <div className="gallery">
            <TransitionGroup>
                <CSSTransition key={index} classNames="slide" timeout={400}>
                    <img src={picList[index]}/>
                </CSSTransition>
            </TransitionGroup>
        </div>
    )
}

export default Gallery;