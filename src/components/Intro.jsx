import React from "react";

const Intro = ({ introVideoRef }) => {
  return (
    <div className="w-screen h-screen pt-20 intro-bg lg:px-10">
      <p className="text-5xl lg:text-6xl text-center will-video-fade text-gradient xl:text-left xl:text-8xl features-title tracking-tight">
        EXPERIENCE <br className="hidden xl:block" /> THE GAME
      </p>
      <div className="flex xl:absolute will-video-fade top-40 right-20 mt-10 lg:mt-5 bottom-30">
        <div className="bg-white intro-video-bg p-3 h-full w-full xl:rotate-5 xl:max-w-3xl overflow-hidden">
          <video
            ref={introVideoRef}
            src="/videos/intro-optimized.mp4"
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
