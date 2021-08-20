import React from 'react';
import LogOut from '../../icons/logout';

import './style.css';

const LogOutButton = ({ logout }) => {
    return (
        <div
            className='logout-button'
            onClick={logout}
        >
            <LogOut />
        </div>
    );
};

export default LogOutButton;