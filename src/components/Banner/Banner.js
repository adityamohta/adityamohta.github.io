import './styles.sass';

import React from 'react';

const Banner = (props) => (
    <div className="banner">
        <span className="banner-greeting">{ props.greeting }</span>
        <h2 className="banner-title">{ props.title }</h2>
    </div>
);
export default Banner;
