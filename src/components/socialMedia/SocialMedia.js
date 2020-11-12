import React from 'react';
import './style.css';

import twitter from '../../assets/imgs/icon-twitter.svg';
import google from '../../assets/imgs/icon-google.svg';
import linkdin from '../../assets/imgs/icon-linkdin.svg';
import facebook from '../../assets/imgs/icon-facebook.svg';

const SocialMedia = () => {
    return (
        <div className='containerIcons'>
            <a href="https://pt-br.facebook.com/" target="_blanck">
                <img className="icon" src={facebook} alt="Twitter" />
            </a>
            <a href="https://www.google.com/" target="_blanck">
                <img className="icon" src={google} alt="Twitter" />
            </a>
            <a href="https://www.linkedin.com/" target="_blanck">
                <img className="icon" src={linkdin} alt="Twitter" />
            </a>
            <a href="https://twitter.com/" target="_blanck">
                <img className="icon" src={twitter} alt="Twitter" />
            </a>
        </div>
    )
}

export default SocialMedia;