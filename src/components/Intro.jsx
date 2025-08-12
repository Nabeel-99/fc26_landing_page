import React from "react";

const Intro = ({ introVideoRef }) => {
  return (
    <div className="w-screen h-screen pt-20 lg:px-10">
      <p className="text-5xl text-center will-video-fade text-gradient lg:text-left lg:text-8xl features-title tracking-tight">
        EXPERIENCE <br /> THE GAME
      </p>
      <div className="flex lg:absolute will-video-fade top-40 right-20 mt-10 lg:mt-0 bottom-30">
        <div className="bg-white intro-video-bg p-3 h-full w-full lg:rotate-5 lg:max-w-3xl overflow-hidden">
          <video
            ref={introVideoRef}
            src="./videos/intro-optimized.mp4"
            muted
            playsInline
            preload="auto"
            className="object-cover w-screen lg:w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Intro;
