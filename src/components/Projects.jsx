import React from "react";
import VoiceGPT from "../assets/portfolio/VoiceGPT.png";
import UrbanNest from "../assets/portfolio/UrbanNest.png";
import CryptoBugs from "../assets/portfolio/CryptoBugs.png";
import KBC from "../assets/portfolio/KBC.png";
import Codechef from "../assets/portfolio/Codechef.png";
import Codeforces from "../assets/portfolio/Codeforces.png";

const Projects = () => {
  const projects = [
    {
      id: 1,
      src: UrbanNest,
      demo:'https://urban-nest.netlify.app/',
      code:'https://github.com/jarus1029/Urban-Nest',
    },
    {
      id: 2,
      src: CryptoBugs,
      demo:'https://suraj-crypto-bugs.netlify.app/',
      code:'https://github.com/jarus1029/Crypto-Bugs',
    },
    {
      id: 3,
      src: VoiceGPT,
      demo:'https://voicegptsuraj.netlify.app/',
      code:'https://github.com/jarus1029/VoiceGPT',
    },
    {
      id: 4,
      src: KBC,
      demo:'https://surajkbc.netlify.app/',
      code:'https://github.com/jarus1029/KBC',
    },
    {
      id: 5,
      src: Codeforces,
      demo:'https://codeforces.com/profile/Suraj_pract',
      code:'https://codeforces.com/profile/Suraj_pract',
    },
    {
      id: 6,
      src: Codechef,
      demo:'https://www.codechef.com/users/jarus_s',
      code:'https://www.codechef.com/users/jarus_s',
    },
  ];

  return (
    <div
      name="projects"
      className="bg-gradient-to-b from-black to-green-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-green-500">
            Projects
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {projects.map(({ id, src,demo,code }) => (
            <div key={id} className="shadow-md shadow-green-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button  
                onClick={(e) => {
                      e.preventDefault();
                      window.location.href=demo;}}
                className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Demo
                </button>
                <button 
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href=code;}}
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;