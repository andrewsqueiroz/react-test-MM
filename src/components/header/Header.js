import React, { Fragment } from 'react';

import Menu from '../menu/Menu';
import './style.css';

import logoCompany from '../../assets/imgs/logo.png';

const Header = () => {
    return (
        <header>
            <div className="container headerContent">
                <div>
                    <img className="logoCompany" src={logoCompany} alt="m" />
                </div>
                <Menu />
            </div>
        </header>
    )
}

export default Header;