import React from 'react';
import './style.css';

const TextLabel = ({ textContent, className, children, style }) => {
    return (
        <div className={className} style={style}>{textContent} {children}</div>
    )
}

export default TextLabel;