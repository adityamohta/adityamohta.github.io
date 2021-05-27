// External Imports
import React from "react";
// My Imports
import './styles.scss';
// import SideNav from "./components/SideNav";
// import Header from "./components/Header";
// import Experience from "./components/Experience";
// import Interests from "./components/Interests";
// import Projects from "./components/Projects";


const Home = () => (
  <div className="portfolio">

    <div className="portfolio-header">
      <img src="/assets/img/me-2@2x.jpg" alt=""/>
      <div className="portfolio-header-content">
        <h1>Kumar Aditya <span className="highlight">Mohta</span></h1>
        <p>
          I am passionate about designing, problem-solving, and learning new technologies. Experienced in full-stack
          development, working with startups, building products from scratch, and scaling them up.
        </p>
      </div>
    </div>

    <hr/>
    <p>
      5 years of professional experience in Full-stack development. Proficient in liaising with key stakeholders
      including team members & remote clients to effectively conduct requirement gathering and optimize solutions as per
      the requirements.
      <br/><br/>
      Currently working at misters.in as a Tech Lead & Full Stack Developer
      <br/><br/>
      I am also a solo developer & founder of a mental health app called:
      <br/>
      “Chiku — Journal / Diary & Mood Tracker" available on both IOS and Android.
    </p>
    <ul>
      <li>50k+ downloads | 4.5+ rating</li>
      <li>Website: <a href="https://chiku.app" target="_blank">chiku.app</a></li>
      <li>Blog: <a href="https://chiku.app/blog" target="_blank">chiku.app/blog</a></li>
    </ul>

    <hr/>

    <h2>Interests</h2>
    <p>
      Apart from being a web developer, I enjoy most of my time being indoors playing chess and my music instruments, Guitar and Flute are my favourite. I follow a number of sci-fi and fantasy genre movies and television shows and spend a large amount of my free time exploring the latest technology advancements in the mobile and web development world.
      <br/><br/>
      When forced outdoors, I enjoy playing badminton mostly.
    </p>

    <div className="social-icons">
      <a href="https://github.com/adityamohta" target="_blank"
         className="social-icon">
        <img src="/assets/img/github@3x.jpg" target="_blank"
             alt="Github"/>
      </a>
      <a href="https://www.linkedin.com/in/kumaradityamohta" target="_blank"
         className="social-icon">
        <img src="/assets/img/linkedin@3x.jpg" alt="LinkedIn"/>
      </a>
      <a href="https://www.behance.net/adityamohta" target="_blank"
         className="social-icon">
        <img src="/assets/img/behance@3x.jpg" alt="Behance"/>
      </a>
      <a href="https://www.chess.com/member/adityamohta21" target="_blank"
         className="social-icon">
        <img src="/assets/img/chess-com@3x.jpg" alt="Chess.com"/>
      </a>
    </div>
  </div>
);

export default Home;
