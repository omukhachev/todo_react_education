import React from 'react';
import cx from 'classnames';

import Header from '../Header'

import './style.css'

const Popup = ({ isOpen, popupMessage, error }) => {
    return (
        <div className={cx(!!isOpen ? `popup-container show ${!!error && 'error'}` : `popup-container hide ${!!error && 'error'}`)}>
            <Header headerText={popupMessage} />
        </div>
    )
}

export default Popup;