import React from 'react';
import cx from 'classnames';

import Header from '../Header'

import './style.css'

const Popup = ({ isOpen, popupMessage }) => {
    return (
        <div className={cx(!!isOpen ? "popup-container show" : "popup-container hide")}>
            <Header headerText={popupMessage} />
        </div>
    )
}

export default Popup;