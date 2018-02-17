require('./sass/buttons.sass');

import React from 'react';

export const HackerEarth = (props) => (
    <a className="btn-custom btn-hacker-earth" href="https://www.hackerearth.com/@kumaraditya.mohta" target="_blank">
        HackerEarth <span className="fas fa-arrow-right"/>
    </a>
);

export const LinkedIn = (props) => (
    <a className="btn-custom btn-linkedin" href="https://www.linkedin.com/in/kumaradityamohta" target="_blank">
        <span className="btn-logo fab fa-linkedin" aria-hidden="true"/> LinkedIn <span className="fas fa-arrow-right"/>
    </a>
);

export const Github = (props) => (
    <a className="btn-custom btn-github" href="https://github.com/adityamohta" target="_blank">
        <span className="btn-logo fab fa-github" aria-hidden="true"/> GitHub <span className="fas fa-arrow-right"/>
    </a>
);

export const AmcatReport = (props) => (
    <a className="btn-custom btn-amcat" href="assets/doc/amcat_report.pdf" target="_blank">
        <span className="btn-logo fas fa-newspaper" aria-hidden="true"/> &nbsp;<small>AMCAT</small> Report <span className="fas fa-arrow-right"/>
    </a>
);

export const Resume = (props) => (
    <a className="btn-custom btn-resume" href="assets/doc/cv.pdf" target="_blank">
        <span className="btn-logo fas fa-file-alt" aria-hidden="true"/> Resume <span className="fas fa-arrow-right"/>
    </a>
);

export const ResumeDownload = (props) => (
    <a className="btn-custom btn-download" href="assets/doc/cv.pdf" target="_blank" download="aditya_mohta">
        <span className="btn-logo fas fa-download" aria-hidden="true"/> Download<span className="fas fa-arrow-right"/>
    </a>
);
