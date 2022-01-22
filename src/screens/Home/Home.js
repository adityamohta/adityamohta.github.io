// External Imports
import React, { useEffect, useState } from "react";
import GitHubCalendar from "github-calendar";
// My Imports
import "./styles.scss";
import "./github.scss";
import Images from "../../assets/images";
import DarkModeButton from "./DarkModeButton";

const Home = () => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    GitHubCalendar(".calendar", "adityamohta", { responsive: true });
    // On page load or when changing themes, best to add inline in `head` to avoid FOUC
    if (
      localStorage.getItem("color-theme") === "dark" ||
      (!("color-theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setDarkMode(true);
    } else {
      setDarkMode(false);
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      localStorage.setItem("color-theme", "dark");
      document.documentElement.classList.add("dark");
    } else {
      localStorage.setItem("color-theme", "light");
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    if (darkMode) {
      setDarkMode(false);
    } else {
      setDarkMode(true);
    }
  };

  return (
    <div className="bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-200">
      <div className="text-right pt-10 pr-10">
        <DarkModeButton checked={!darkMode} onClick={toggleDarkMode} />
      </div>
      <div className="max-w-screen-md pb-14 px-6 mx-auto">
        <div className="flex flex-col items-center md:flex-row pb-2">
          <img className="flex object-contain max-w-[200px] max-h-[200px] rounded-2xl" {...Images.me} />
          <div className="flex-auto pt-5 md:py-0 md:px-5">
            <h1 className="text-2xl md:text-4xl mt-4 md:mt-0 uppercase font-bold tracking-wide">
              <span className="dark:text-slate-100">Kumar Aditya </span>
              <span className="text-cyan-500 dark:text-cyan-300">Mohta</span>
            </h1>
            <p className="text-slate-500 dark:text-slate-400 mb-4">
              {"Software Engineer @ "}
              <a href="https://conjura.com" target="_blank">
                Conjura
              </a>
            </p>

            <p className="mb-2">
              Passionate about designing, problem-solving, and learning new technologies. Experienced in full-stack
              development, working with startups, building products from scratch, and scaling them up.
            </p>
          </div>
        </div>
        <hr className="dark:border-slate-700 border-slate-200	my-5" />
        <div className="">
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

        <hr className="dark:border-slate-700 border-slate-200 my-5" />
        {/*<p>*/}
        {/*  5 years of professional experience in Full-stack development. Proficient in liaising with key stakeholders,*/}
        {/*  including team members & remote clients, to effectively conduct requirement gathering and optimize solutions as*/}
        {/*  per the requirements.*/}
        {/*  <br />*/}
        {/*</p>*/}
        <p className="mb-6">
          Apart from being an engineer, I enjoy being indoors playing chess and my music instruments; Guitar and Flute
          are my favourites. When forced outdoors, I love playing badminton.
        </p>

        <div className="social-icons mb-4">
          <a href="https://github.com/adityamohta" target="_blank" className="social-icon">
            <img className="rounded-xl" {...Images.socialIcons.github} />
          </a>
          <a href="https://www.linkedin.com/in/kumaradityamohta" target="_blank" className="social-icon">
            <img className="rounded-xl" {...Images.socialIcons.linkedin} />
          </a>
          <a href="https://www.behance.net/adityamohta" target="_blank" className="social-icon">
            <img className="rounded-xl" {...Images.socialIcons.behance} />
          </a>
          <a href="https://www.chess.com/member/adityamohta21" target="_blank" className="social-icon">
            <img className="rounded-xl" {...Images.socialIcons.chess} />
          </a>
        </div>
        <a href="https://github.com/adityamohta" target="_blank">
          <div className="calendar">...</div>
        </a>
      </div>
    </div>
  );
};

export default Home;
