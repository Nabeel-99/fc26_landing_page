import React from "react";

const Skills = ({ skillsRef }) => {
  return (
    <div className="h-full max-sm:flex max-sm:flex-col gap-10 absolute inset-0 p-5 lg:p-10 skills-bg z-20">
      <div className="lg:absolute left-10 lg:max-w-xl top-40">
        <p className="text-5xl will-skills-fade lg:text-8xl text-green-500 tracking-tight">
          Skills
        </p>
        <p className="text-xl will-skills-fade max-w-lg lg:text-2xl mt-8">
          Every flick, feint, and move flows with precision—skill inputs feel
          sharper thanks to improved responsiveness and timing.
        </p>
      </div>
      <div className="bg-white p-3 will-skills-fade w-full lg:absolute top-40 right-20 lg:rotate-5 lg:max-w-3xl">
        <video
          ref={skillsRef}
          src="./videos/skills-optimized.mp4"
          muted
          playsInline
          preload="auto"
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
};

export default Skills;
