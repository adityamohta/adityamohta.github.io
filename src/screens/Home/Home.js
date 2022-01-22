// External Imports
import React, { useEffect } from "react";
import GitHubCalendar from "github-calendar";
// My Imports
import "./styles.scss";
import "./github.scss";
import Images from "../../assets/images";

const Home = () => {
  useEffect(() => {
    GitHubCalendar(".calendar", "adityamohta", { responsive: true });
  }, []);

  return (
    <div className="max-w-screen-md my-12 mx-auto p-6 ">
      <div className="flex pb-5 flex-col items-center md:flex-row ">
        <img className="flex object-contain max-w-[200px] max-h-[200px]" {...Images.me} />
        <div className="flex-auto py-5 md:py-0 md:px-5">
          <h1 className="text-base md:text-4xl my-4 md:mt-0 uppercase font-bold tracking-wide">
            Kumar Aditya <span className="highlight">Mohta</span>
          </h1>
          <p>
            I am passionate about designing, problem-solving, and learning new technologies. Experienced in full-stack
            development, working with startups, building products from scratch, and scaling them up.
            <br />
            <br />
            Working at{" "}
            <a href="https://conjura.com" target="_blank">
              Conjura
            </a>{" "}
            as a Software Engineer.
          </p>
        </div>
      </div>
      <a href="https://github.com/adityamohta" target="_blank">
        <div className="calendar">...</div>
      </a>
      <div>
        <h6 className="mb-3">
          Solo developer, designer & founder of a micro startup: <b>“Chiku — Journal / Diary & Mood Tracker”</b>
        </h6>
        <ul>
          <li>100k+ downloads | 4.7+ rating</li>
          <li>
            Website:{" "}
            <a href="https://chiku.app" target="_blank">
              chiku.app
            </a>
          </li>
          <li>
            Blog:{" "}
            <a href="https://chiku.app/blog" target="_blank">
              chiku.app/blog
            </a>
          </li>
        </ul>
      </div>

      <hr />
      {/*<p>*/}
      {/*  5 years of professional experience in Full-stack development. Proficient in liaising with key stakeholders,*/}
      {/*  including team members & remote clients, to effectively conduct requirement gathering and optimize solutions as*/}
      {/*  per the requirements.*/}
      {/*  <br />*/}
      {/*</p>*/}

      <h2 className="uppercase font-bold tracking-wide text-2xl mb-3">Interests</h2>
      <p className="mb-6">
        Apart from being a web developer, I enjoy being indoors playing chess and my musical instruments; Guitar and
        Flute are my favourites. In addition, I follow several sci-fi and fantasy genre movies and television shows and
        spend a large amount of my free time exploring the latest technology advancements in the mobile and web
        development world.
        <br />
        <br />
        When forced outdoors, I love playing badminton.
      </p>

      <div className="social-icons">
        <a href="https://github.com/adityamohta" target="_blank" className="social-icon">
          <img {...Images.socialIcons.github} />
        </a>
        <a href="https://www.linkedin.com/in/kumaradityamohta" target="_blank" className="social-icon">
          <img {...Images.socialIcons.linkedin} />
        </a>
        <a href="https://www.behance.net/adityamohta" target="_blank" className="social-icon">
          <img {...Images.socialIcons.behance} />
        </a>
        <a href="https://www.chess.com/member/adityamohta21" target="_blank" className="social-icon">
          <img {...Images.socialIcons.chess} />
        </a>
      </div>
    </div>
  );
};

export default Home;
