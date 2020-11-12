import React from 'react';

import { Link } from 'react-router-dom';

import './style.css';

const Menu = () => {
    return (
        <div>
            <ul className='menu'>
                <li>
                    <Link  to='/'>
                    Home
                    </Link>
                </li>
                <li >
                    <Link to='/contact'>
                    Contact us
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Menu;