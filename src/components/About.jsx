import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-green-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-green-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
        As a full-stack MERN developer and competitive programmer, I have a passion for creating innovative solutions along with knowledge in React, Node.js, Express, MongoDB, and other web technologies.
        </p>

        <br />

        <p className="text-xl">
        In addition to my development skills, I have also improved my problem-solving abilities through competitive programming, where I have solved over 700+ problems across various platforms like Codeforces and Codechef. This has enabled me to think creatively and approach problems effeciently.
        </p>
      </div>
    </div>
  );
};

export default About;