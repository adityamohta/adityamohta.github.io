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
  const [darkMode, setDarkMode] = useState(() => {
    if (localStorage.getItem("color-theme")) {
      return localStorage.getItem("color-theme") === "dark";
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

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
      <div className="md:py-10"></div>
      <div className="max-w-screen-sm md:max-w-screen-md pb-14 px-6 mx-auto">
        <div className="flex flex-col items-center pb-2 relative">
          <img className="flex object-contain max-w-[150px] max-h-[150px] rounded-full" {...Images.me} />
          <div className="flex-auto text-center">
            <h1 className="text-2xl md:text-4xl font-bold tracking-wid mt-2">
              <span className="dark:text-slate-100">Kumar Aditya Mohta</span>
            </h1>

            <p className="text-slate-500 dark:text-slate-400 mb-4">
              {"Staff Engineer @ "}
              <a href="https://conjura.com" target="_blank" rel="noreferrer">
                Conjura
              </a>
              &nbsp;
              <DarkModeButton checked={!darkMode} onClick={toggleDarkMode} />
            </p>
            <p className="text-slate-500 dark:text-slate-200">
              I am committed to design, problem-solving, and learning new technologies. I have experience in full-stack
              development, working with startups, and managing product development from inception to scalability.
              Outside of work, I enjoy running, playing chess, frisbee, badminton, and soccer.
            </p>
            <p className="mt-5"></p>
          </div>
        </div>
        <div className="social-icons mb-6">
          <a href="https://github.com/adityamohta" target="_blank" rel="noreferrer" className="social-icon">
            <SiGithub size={25} />
          </a>
          <a
            href="https://www.linkedin.com/in/kumaradityamohta"
            target="_blank"
            rel="noreferrer"
            className="social-icon"
          >
            <SiLinkedin size={25} />
          </a>
          <a href="https://www.chess.com/member/adityamohta21" target="_blank" rel="noreferrer" className="social-icon">
            <SiChessdotcom size={25} />
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
