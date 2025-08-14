import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";
import ModeCard from "../components/ModeCard";
import { SplitText } from "gsap/SplitText";
import { useMediaQuery } from "react-responsive";

const Modes = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  useGSAP(() => {
    const modeTxt = new SplitText(".modes-text", { type: "chars, words" });
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#modes",
        start: isMobile ? "top 80%" : "top 50%",
        end: "+=300%",
      },
    });
    gsap.from(".palmer", {
      scrollTrigger: {
        trigger: "#modes",
        start: "top 20%",
      },
      opacity: 0,
      x: 100,
      ease: "power3.inOut",
      duration: 1,
    });
    tl.from(".modes-title", { y: 20, opacity: 0, ease: "power3.inOut" }).from(
      modeTxt.words,
      {
        stagger: 0.02,
        opacity: 0,
        y: 10,
        ease: "expo.inOut",
      },
      "-=0.5"
    );
    gsap.utils.toArray(".modes-card").forEach((card) => {
      gsap.from(card, {
        scrollTrigger: {
          scrub: true,
          trigger: card,
          start: "top 90%",
          end: "bottom 60%",
        },
        scale: 0.8,
        opacity: 0,
        duration: 1.8,
        ease: "power1.inOut",
      });
    });
  }, []);
  return (
    <section
      id="modes"
      className="flex flex-col gap-6 lg:flex-row lg:justify-between relative px-4 lg:px-10 min-h-screen  w-full"
    >
      <div className="flex flex-col gap-10 lg:max-w-2/4">
        <p className="text-5xl modes-title tracking-tighter lg:text-8xl text-gradient">
          Play Your Way
        </p>
        <p className="text-xl modes-text">
          Whatever your style, there’s a way to play that’s made for you.
        </p>
        <div className="flex flex-col cards gap-2">
          <ModeCard
            title="NEW PLAY MENU"
            image={"/images/menu.jpg.avif"}
            description={` The FUT Play Menu in FC 26 is rebuilt for faster navigation, with
      a For You tab showing new, recent, and upcoming events, plus clear
      categories for all modes.`}
          />
          <ModeCard
            title="FUT CHAMPIONS"
            image={"/images/champions.jpg.avif"}
            description={` A competitive weekend showdown—qualify directly through Rivals using Qualification Points, skip playoffs, and compete in Finals or Challengers for tier-based rewards.`}
          />
          <ModeCard
            title="CAREER MODE"
            image={"/images/career.png.avif"}
            description={` Dynamic, story-driven career with Manager Live Challenges, ICONs & Heroes, deeper simulations, Authentic Gameplay, and unexpected events to keep every season fresh.`}
          />
          <ModeCard
            title="PRO CLUBS"
            image={"/images/proclubs.jpg.avif"}
            description={` Play as your custom Pro with Revised Clubs Progression, Archetypes, dynamic Clubs Live Events, and multi-club support—competitive and personalized like never before.`}
          />
        </div>
      </div>
      <div className="lg:sticky top-30 h-full">
        <div className="rounded-3xl xl:max-w-xl palmer p-3 border border-[#232323]">
          <img
            src="/images/palmer.jpg.avif"
            alt=""
            className="w-full h-full rounded-2xl  object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Modes;
