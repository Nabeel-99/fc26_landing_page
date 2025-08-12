import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useRef, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import Intro from "../components/Intro";
import Skills from "../components/Skills";
import Dribble from "../components/Dribble";

gsap.registerPlugin(ScrollTrigger);

const Features = () => {
  const introVideoRef = useRef(null);
  const dribblingVideoRef = useRef(null);
  const skillsRef = useRef(null);
  const isMobile = useMediaQuery({ maxWidth: 767 });

  useGSAP(() => {
    // Initial states
    gsap.set("#features", { marginTop: "-200vh", opacity: 0 });
    gsap.set(".dribbling-bg", { opacity: 0, zIndex: 10, maskImage: "none" });
    gsap.set(".skills-bg", { opacity: 0, zIndex: 20, maskImage: "none" });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#features",
        pin: true,
        start: isMobile ? "top 10%" : "center center",
        end: "+=300%",
        pinSpacing: true,
        scrub: 2.5,
      },
    });

    //  fade hero and show intro
    tl.to("#hero", {
      opacity: 0,
      delay: 2,
    })
      .to(
        "#features",
        { opacity: 1, duration: 1, ease: "power2.inOut" },
        "-=0.5"
      )
      .from(".features-title", {
        duration: 1,
        x: -100,
        opacity: 0,
        ease: "expo.out",
      })
      .from(".intro-video-bg", { duration: 1, opacity: 0 }, 0)

      //  play intro video & reveal dribbling
      .to(introVideoRef.current, {
        duration: 1.8,
        currentTime: () => introVideoRef.current?.duration || 0,
        ease: "none",
      })
      .to(".will-video-fade", { opacity: 0 }, "-=0.5")
      .to(
        ".dribbling-bg",
        {
          opacity: 1,
          maskImage:
            "radial-gradient(circle at left 100%, black 80%, transparent 100%)",
          maskSize: "150% 150%",
        },
        "-=0.5"
      )
      // play dribbling video & reveal skills
      .to(dribblingVideoRef.current, {
        duration: 1.8,
        currentTime: () => dribblingVideoRef.current?.duration || 0,
        ease: "none",
      })
      .to(".will-dribble-fade", { opacity: 0 }, "-=0.5")
      .to(
        ".skills-bg",
        {
          opacity: 1,
          maskImage:
            "radial-gradient(circle at right 100%, black 80%, transparent 100%)",
          maskSize: "150% 150%",
        },
        "-=0.2"
      )
      // play skills video
      .to(skillsRef.current, {
        duration: 1.8,
        currentTime: () => skillsRef.current?.duration || 0,
        ease: "none",
      });
  }, [isMobile]);

  //  preloaded videos and scroll positions sync
  useEffect(() => {
    const videos = [
      introVideoRef.current,
      dribblingVideoRef.current,
      skillsRef.current,
    ];
    let loaded = 0;
    const handleLoaded = () => {
      loaded++;
      if (loaded === videos.length) {
        ScrollTrigger.refresh();
      }
    };
    videos.forEach((video) => {
      if (video) {
        video.onloadedmetadata = handleLoaded;
      }
    });
    return () => {
      videos.forEach((video) => {
        if (video) {
          video.onloadedmetadata = null;
        }
      });
    };
  }, []);

  return (
    <section id="features" className="relative min-h-screen intro-bg">
      {/* Intro */}
      <Intro introVideoRef={introVideoRef} />

      {/* Dribbling  */}
      <Dribble dribblingVideoRef={dribblingVideoRef} />

      {/* Skills */}
      <Skills skillsRef={skillsRef} />
    </section>
  );
};

export default Features;
