import React from "react";

const Skills = ({ skillsRef }) => {
  return (
    <div className="h-full max-sm:flex  max-sm:flex-col gap-10 absolute inset-0 p-5 xl:p-10 skills-bg z-20">
      <div className="xl:absolute left-10 xl:max-w-xl top-40">
        <p className="text-5xl lg:text-6xl will-skills-fade xl:text-8xl text-green-500 tracking-tight">
          Skills
        </p>
        <p className="text-xl will-skills-fade xl:max-w-lg xl:text-2xl mt-8">
          Every flick, feint, and move flows with precision—skill inputs feel
          sharper thanks to improved responsiveness and timing.
        </p>
      </div>
      <div className="bg-white mt-5 p-3 will-skills-fade w-full xl:absolute top-40 right-20 xl:rotate-5 xl:max-w-3xl">
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
