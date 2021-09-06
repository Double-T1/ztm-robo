import React from 'react';
import './Scroll.css'

const Scroll = (props) => {
    return (
        // first {} is for json, second {} is an object for a css style
        <div id='scroll'>
            {props.children}
        </div>
    )
}

export default Scroll
