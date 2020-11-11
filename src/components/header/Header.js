import React, { Fragment } from 'react';

import Menu from '../menu/Menu';
import style from './style.css'

import logoCompany from '../../assets/imgs/logo.png';

const Header = () => {
    return (
        <header>
            <div className="container">
                <img className="logoCompany" src={logoCompany} alt="m" />
            </div>
        </header>
    )
}

export default Header;