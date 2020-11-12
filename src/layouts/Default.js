import React from 'react';

import Header from '../components/header/Header';

const Default = props => {
    return (
        <div >
            <div id="top">
                <Header></Header>
            </div>

            <div className='centerPage'>
                {props.children}
            </div>
        </div>
    )
}

export default Default