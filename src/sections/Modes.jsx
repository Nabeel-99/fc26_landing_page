import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";

const Modes = () => {
  useGSAP(() => {
    // gsap.set("#modes", { marginTop: "-40vh", opacity: 0 });
    // const tl = gsap.timeline({
    //   scrollTrigger: {
    //     trigger: "#modes",
    //     start: "top top",
    //   },
    // });
    // tl.to("#features", { opacity: 0 }).to("#modes", {
    //   opacity: 1,
    //   duration: 1,
    // });
    // tl.to("#modes", { opacity: 1 });
  }, []);
  return (
    <section
      id="modes"
      className="flex flex-col relative z-50  px-10 min-h-screen  w-full"
    >
      <div className="flex flex-col">
        <p className="text-8xl text-gradient">Play Your Way</p>
        <img src="./images/palmer.jpg.avif" alt="" />
      </div>
    </section>
  );
};

export default Modes;
