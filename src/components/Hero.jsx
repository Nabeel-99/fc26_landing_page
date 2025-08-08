import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import React from "react";
import { useMediaQuery } from "react-responsive";

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  useGSAP(() => {
    const maskPostion = isMobile ? "" : "";
    const title = new SplitText(".hero-title", { type: "chars, words" });
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#hero",
        start: "top top",
        end: "+=300%",
        scrub: 2.5,
        pin: true,
        pinSpacing: true,
      },
    });

    gsap.from(title.chars, {
      stagger: 0.03,
      y: 30,
      opacity: 0,
      duration: 1,
      ease: "expo.out",
    });
    tl.to(".will-fade", { opacity: 0 })
      .to(".hero-image", { opacity: 0 })
      .to(
        ".masked-img",
        {
          scale: 0.8,
          maskPosition: "center 15%",
          maskSize: isMobile ? "100%" : "33%",
          opacity: 100,
        },
        "-=0.5"
      )
      .to(
        ".masked-img",
        { opacity: 0, duration: 1, ease: "power2.inOut" },
        "-=0.5"
      )
      .from(".fade-in", { opacity: 0, duration: 1.8 }, "-=0.5")
      .to(
        ".coming-soon",
        {
          opacity: 1,
          maskImage:
            "radial-gradient(circle at 50% 100%, black 80%,  transparent 100%)",
          ease: "power2.out",
          duration: 1.5,
        },
        "-=0.8"
      );
  }, []);
  return (
    <>
      <section
        id="hero"
        className="relative flex flex-col h-screen items-center px-4 lg:px-0 w-full  "
      >
        <img
          src="./images/hero-image.avif"
          alt="hero-image"
          className="w-screen h-screen hero-image  object-cover absolute -z-50    "
        />

        <img
          src="./images/hero-image.avif"
          alt="hero-image"
          className="w-full h-screen object-cover absolute -z-50 mask-no-repeat masked-img  mask-center   mask-[url('./images/mask.svg')] mask-size-[3000%]   "
        />

        <div className=""></div>
        <div className="absolute inset-0 h-screen w-screen -z-10 bg-black opacity-50"></div>
        <div className="mt-40  flex flex-col h-full gap-40 items-center  w-full ">
          <img
            src="./images/mask.svg"
            alt=""
            className=" max-w-full will-fade lg:w-[480px]"
          />
          <img
            src="./images/mask.svg"
            alt=""
            className="fade-in absolute top-[20%] scale-[0.8]   max-w-full lg:w-[480px]"
          />
          <h1 className="hero-title will-fade text-2xl lg:text-7xl text-center font-bold capitalize tracking-tight">
            EXPERIENCE THE <br className="hidden lg:block" /> FUTURE OF FOOTBALL
          </h1>
          <div className="flex coming-soon  flex-col  items-center absolute top-2/5  gap-10">
            <p className="text-center text-gradient  text-6xl lg:text-9xl lg:leading-[0.9em] tracking-tight">
              COMING <br />
              SEPT 26TH
            </p>
            <p className="text-3xl lg:text-5xl">Available on</p>
            <div className="flex items-center justify-center gap-8 px-36 lg:px-0">
              <img src="./images/ps5.svg" className="w-32" />
              <img src="./images/xbox.svg" className="w-60" />
              <img src="./images/pc.png" className="w-20" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
