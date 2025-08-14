import React from "react";

const Dribble = ({ dribblingVideoRef }) => {
  return (
    <div className="h-full flex flex-col items-center md:justify-center gap-10 absolute inset-0 p-5 xl:p-10 dribbling-bg z-10">
      <div className="flex flex-col gap-3 xl:absolute right-10 xl:max-w-xl top-40">
        <p className="text-5xl lg:text-6xl will-dribble-fade xl:text-8xl text-green-500 tracking-tight">
          Dribbling
        </p>
        <p className="text-xl will-dribble-fade xl:text-2xl mt-8">
          Dynamic Dribbling delivers an agile and incredibly responsive
          experience—players stay closer to the ball, accelerate fluidly, and
          break free with precision.
        </p>
      </div>
      <div className="bg-white mt-4 p-3 will-dribble-fade w-full xl:absolute top-40 left-10 xl:-rotate-5 xl:max-w-3xl">
        <video
          ref={dribblingVideoRef}
          src="/videos/dribbling-optimized.mp4"
          muted
          playsInline
          preload="auto"
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
};

export default Dribble;
