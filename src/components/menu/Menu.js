import React from 'react';

import { Link } from 'react-router-dom';

const Menu = () => {
    return (
        
        <ul>
            <li>
                <Link  to='/politica-de-privacidade'>
                  Políticas de privacidade
                </Link>
            </li>
            <li >
                <Link to='/logout'>
                  Sair
                </Link>
            </li>
        </ul>
    )
}

export default Menu;