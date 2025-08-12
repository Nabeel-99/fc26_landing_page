import React from "react";

const Dribble = ({ dribblingVideoRef }) => {
  return (
    <div className="h-full max-sm:flex max-sm:flex-col gap-10 absolute inset-0 p-5 lg:p-10 dribbling-bg z-10">
      <div className="lg:absolute right-10 lg:max-w-xl top-40">
        <p className="text-5xl will-dribble-fade lg:text-8xl text-green-500 tracking-tight">
          Dribbling
        </p>
        <p className="text-xl will-dribble-fade lg:text-2xl mt-8">
          Dynamic Dribbling delivers an agile and incredibly responsive
          experience—players stay closer to the ball, accelerate fluidly, and
          break free with precision.
        </p>
      </div>
      <div className="bg-white p-3 will-dribble-fade w-full lg:absolute top-40 left-10 lg:-rotate-5 lg:max-w-3xl">
        <video
          ref={dribblingVideoRef}
          src="./videos/dribbling-optimized.mp4"
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
