// External Imports
import React from "react";
// My Imports
import './styles.sass';
import SideNav from "./components/SideNav";
import Header from "./components/Header";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Awards from "./components/Awards";
import Interests from "./components/Interests";
import Projects from "./components/Projects";


const Home = () => (
    <div className="home">
        <SideNav/>
        <div className="container-fluid p-0">
            <Header/>
            <hr className="m-0"/>
            <Experience/>
            {/*<hr className="m-0"/>*/}
            {/*<Education/>*/}
            <hr className="m-0"/>
            <Projects/>
            <hr className="m-0"/>
            <Skills/>
            <hr className="m-0"/>
            <Interests/>
            {/*<hr className="m-0"/>*/}
            {/*<Awards/>*/}
        </div>
    </div>
);

export default Home;
