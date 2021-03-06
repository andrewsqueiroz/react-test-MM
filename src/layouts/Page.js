import React from 'react';

import Header from '../components/header/Header';

const Page = props => {
    return (
        <div className='degrade'>
            <div id="top">
                <Header></Header>
            </div>

            <div>
                {props.children}
            </div>
        </div>
    )
}

export default Page