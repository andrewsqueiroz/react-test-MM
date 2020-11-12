import React from 'react';
import './style.css';

const Title = (props) => {
    return (
        <div className='TitlePage'>
            <h1>
                {props.regular} <strong>{props.bold}</strong>
            </h1>
        </div>
    )
}

export default Title;