import React from "react";

import Banner from '../../components/Banner';
import UserIcon from '../../components/UserIcon';
import UserAbout from '../../components/UserAbout';
import Buttons from '../../components/Buttons';
import ProjectCard from '../../components/ProjectCard';

import values from '../../utils/particles.json';
import Particles from 'react-particles-js';
import './styles_old.sass'
import '../../utils/background.sass';

const HomeOld = () => (
    <React.Fragment>
        <Particles className="background-particle-js" params={values}/>
        <div className="home">
            <div className="panel-center">
                <Banner greeting="" title="Kumar Aditya Mohta"/>
                <UserIcon />
                <UserAbout/>
            </div>
            <div className="panel-left">
                <table cellPadding="0" cellSpacing="0" border="0">
                    <tr><td><Buttons.HackerEarth /></td></tr>
                    <tr><td><Buttons.LinkedIn /></td></tr>
                    <tr><td><Buttons.Github /></td></tr>
                    <tr><td><Buttons.AmcatReport /></td></tr>
                    <tr><td><Buttons.Resume /></td></tr>
                    <tr><td><Buttons.ResumeDownload /></td></tr>
                </table>
            </div>
            <div className="panel-right">
                <h5 className="text-center">PROJECTS</h5>
                <ProjectCard
                    to="/ace"
                    title="ACE"
                    description="ACE can be used to create shared boards of lists of cards with notes. Built with React"/>
            </div>
        </div>
    </React.Fragment>
);

export default HomeOld;
