import './styles.sass';

import React from 'react';
import {Link} from "react-router-dom";

const ProjectCard = (props) => (
    <Link className="project-card" to={props.to}>
        <p className="project-title">{ props.title }</p>
        <p className="project-description">{ props.description }</p>
    </Link>
);
export default ProjectCard;

