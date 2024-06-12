// External Imports
import React, { useEffect, useState } from "react";
import GitHubCalendar from "github-calendar";
import { SiChessdotcom, SiGithub, SiLinkedin } from "react-icons/si";

import "github-calendar/dist/github-calendar-responsive.css";


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
    <div className="antialiased bg-white dark:bg-slate-900 text-slate-500 dark:text-slate-200 min-h-screen">
      <div className="text-right p-5 md:pt-10 pr-10 pb-4 md:pb-0">
        <DarkModeButton checked={!darkMode} onClick={toggleDarkMode} />
      </div>
      <div className="md:py-10"></div>
      <div class="absolute z-20 top-0 inset-x-0 flex justify-center overflow-hidden pointer-events-none">
        <div className="w-[108rem] flex-none flex justify-end">
          <picture>
            <source srcset="/img/docs.avif" type="image/avif" />
            <img src="/img/docs.png" alt="." class="w-[71.75rem] flex-none max-w-none dark:hidden" decoding="async" />
          </picture>
          <picture>
            <source srcset="/img/docs-dark.avif" type="image/avif" />
            <img src="/img/docs-dark.png" alt="." class="w-[90rem] flex-none max-w-none hidden dark:block" decoding="async" />
          </picture>
        </div>
      </div>
      <div className="max-w-screen-sm md:max-w-screen-md pb-14 px-6 mx-auto">
        <div className="flex flex-col items-center md:flex-row pb-2">
          <img className="shadow-2xl flex object-contain max-w-[200px] max-h-[200px] rounded-2xl" {...Images.me} />
          <div className="flex-auto pt-5 md:py-0 md:px-5">
            <h1 className="text-2xl md:text-4xl mt-4 md:mt-0 uppercase font-bold tracking-wid text-center md:text-left">
              <span className="dark:text-slate-100">Kumar Aditya </span>
              <span className="text-cyan-500 dark:text-cyan-300">Mohta</span>
            </h1>
            <p className="text-slate-500 dark:text-slate-400 mb-4 text-center md:text-left">
              {"Senior Software Engineer @ "}
              <a href="https://conjura.com" target="_blank" rel="noreferrer">
                Conjura
              </a>
            </p>
            <p className="mb-2 text-slate-500 dark:text-slate-200">
              Passionate about designing, problem-solving, and learning new technologies. Experienced in full-stack
              development, working with startups, building products from scratch, and scaling them up.
            </p>
          </div>
        </div>
        {/* <hr className="dark:border-slate-700 border-slate-200	my-5" /> */}
        {/* <div className="">
          <h6 className="mb-3 text-slate-500 dark:text-slate-200">
            Founder of a micro startup: <br/>
            <a href="https://chiku.app" target="_blank" rel="noreferrer" className="no-underline"><b>Chiku — Journal / Diary & Mood Tracker</b></a> | 100k+ downloads | 4.7+ rating
          </h6>
        </div> */}

        {/* <hr className="dark:border-slate-700 border-slate-200 my-5" /> */}
        <p className="mt-5">
          When I'm not coding, you'll find me running, playing chess, frisbee, badminton, or kicking around a football!
          {/* Besides being an engineer, I sleep... a lot! and ❤️&nbsp; ♟️&nbsp; 🏃🏻&nbsp; 🥏&nbsp; 🏸️&nbsp; ⚽️ */}
        </p>
        <div className="social-icons mb-6 mt-3">
          <a href="https://github.com/adityamohta" target="_blank" rel="noreferrer" className="social-icon">
            <SiGithub size={25}/>
          </a>
          <a href="https://www.linkedin.com/in/kumaradityamohta" target="_blank" rel="noreferrer" className="social-icon">
            <SiLinkedin size={25}/>
          </a>
          <a href="https://www.chess.com/member/adityamohta21" target="_blank" rel="noreferrer" className="social-icon">
            <SiChessdotcom size={25}/>
          </a>
        </div>
        <a href="https://github.com/adityamohta" target="_blank" rel="noreferrer">
          <div className="calendar">...</div>
        </a>
      </div>
    </div>
  );
};

export default Home;
