import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

const Zlatan = () => {
  const zlatanRef = useRef(null);
  useGSAP(() => {
    gsap.set("#zlatan", { marginTop: "100vh", opacity: 0 });
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#zlatan",
        scrub: 2.5,
        start: "top 80%",
        end: "90% top",
        // pin: true,
      },
    });
    tl.to("#zlatan", { marginTop: 0, opacity: 1 });
    zlatanRef.current.onloadedmetadata = () => {
      tl.to(zlatanRef.current, {
        duration: 1.8,
        currentTime: zlatanRef.current.duration,
      });
    };
  }, []);
  return (
    <section id="zlatan" className="min-h-screen  ">
      <div className="">
        <video
          ref={zlatanRef}
          src="./videos/zlatancopy-optimized.mp4"
          playsInline
          muted
          preload="auto"
          className="object-cover w-full h-full"
        />
      </div>
    </section>
  );
};

export default Zlatan;
