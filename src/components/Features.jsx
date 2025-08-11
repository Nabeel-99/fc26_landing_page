import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";
import { useMediaQuery } from "react-responsive";

const Features = () => {
  const introVideoRef = useRef(null);
  const dribblingVideoRef = useRef(null);
  const skillsRef = useRef(null);
  const isMobile = useMediaQuery({ maxWidth: 767 });
  useGSAP(() => {
    gsap.set("#features", { marginTop: "-150vh", opacity: 0 });
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#features",
        pin: true,
        start: isMobile ? "top 10%" : "center center",
        end: "+=400%",
        pinSpacing: true,
        scrub: 2.5,
      },
    });
    tl.to("#hero", { delay: 1, opacity: 0.2, duration: 1 });
    tl.to("#features", { opacity: 1, duration: 1 })
      .from(".features-title", {
        duration: 1,
        x: -100,
        opacity: 0,
        ease: "expo.out",
      })
      .from(".intro-video-bg", { duration: 1, opacity: 0 }, 0);

    introVideoRef.current.onloadedmetadata = () => {
      tl.to(introVideoRef.current, {
        duration: 1.8,
        currentTime: introVideoRef.current.duration,
        ease: "power2.inOut",
      })
        .to(".will-video-fade", { opacity: 0 }, "-=0.5")
        .to(
          ".dribbling-bg",
          {
            opacity: 1,
            maskImage:
              "radial-gradient(circle at left 100%, black 80%,  transparent 100%)",
            maskSize: "150% 150%",
          },
          "-=0.5"
        );
    };
    dribblingVideoRef.current.onloadedmetadata = () => {
      tl.to(
        dribblingVideoRef.current,
        {
          duration: 1.8,
          currentTime: dribblingVideoRef.current.duration,
        },
        "-=0.5"
      )
        .to(".will-dribble-fade", { opacity: 0 }, "-=0.5")
        .to(
          ".skills-bg",
          {
            opacity: 1,
            maskImage:
              "radial-gradient(circle at right 100%, black 80%,  transparent 100%)",
            maskSize: "150% 150%",
          },
          "-=0.2"
        );
    };

    skillsRef.current.onloadedmetadata = () => {
      tl.to(skillsRef.current, {
        duration: 1.8,
        currentTime: skillsRef.current.duration,
      });
    };
  }, []);
  return (
    <section id="features" className="relative min-h-screen intro-bg  ">
      <div className=" w-screen  h-screen pt-20 lg:px-10">
        <p className="text-5xl text-center will-video-fade text-gradient lg:text-left lg:text-8xl features-title tracking-tight">
          EXPERIENCE <br />
          THE GAME
        </p>
        <div className="flex lg:absolute will-video-fade  top-40 right-20 mt-10 lg:mt-0 bottom-30 ">
          <div className="bg-white intro-video-bg p-3 h-full w-full lg:rotate-5  lg:max-w-3xl overflow-hidden">
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
      <div className="h-full max-sm:flex max-sm:flex-col gap-10 absolute  inset-0  bottom-30 p-5 lg:p-10 dribbling-bg ">
        <div className="lg:absolute  right-10 lg:max-w-xl top-40">
          <p className="text-5xl  will-dribble-fade lg:text-8xl text-green-500 tracking-tight">
            Dribbling
          </p>
          <p className="text-xl  will-dribble-fade lg:text-2xl mt-8">
            Dynamic Dribbling delivers an agile and incredibly responsive
            experience—players stay closer to the ball, accelerate fluidly, and
            break free with precision.
          </p>
        </div>
        <div className="bg-white p-3 will-dribble-fade  w-full lg:absolute top-40 lg:-rotate-5  lg:max-w-3xl">
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
      <div className="h-full max-sm:flex max-sm:flex-col gap-10 absolute  inset-0  bottom-30 p-5 lg:p-10 skills-bg ">
        <div className="lg:absolute  left-10 lg:max-w-xl top-40">
          <p className="text-5xl   lg:text-8xl text-green-500 tracking-tight">
            Skills
          </p>
          <p className="text-xl max-w-lg  lg:text-2xl mt-8">
            Every flick, feint, and move flows with precision—skill inputs feel
            sharper thanks to improved responsiveness and timing.
          </p>
        </div>
        <div className="bg-white p-3  w-full lg:absolute top-40 right-20 lg:rotate-5   lg:max-w-3xl">
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
    </section>
  );
};

export default Features;
