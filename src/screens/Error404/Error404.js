// External Imports
import React from "react";
// My Imports
import './styles.sass';


const Dynasty = () => (
    <div className="error404">
        <video poster="/assets/img/404.png" id="bgvid" playsInline autoPlay muted loop>
            <source src="/assets/vid/error.mp4" type="video/mp4" />
        </video>
        <div id="polina">
            <h1>Error 404</h1>
            <p>we are looking for your page...but we can't find it :/</p>
        </div>
    </div>
);

export default Dynasty;
