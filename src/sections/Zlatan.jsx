import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

const Zlatan = () => {
  const zlatanRef = useRef(null);

  useGSAP(() => {
    gsap.set("#zlatan", { marginTop: "30vh", opacity: 0 });

    gsap.timeline({
      scrollTrigger: {
        trigger: "#zlatan",
        start: "top top",
        end: "90% top",
        scrub: 2.5,
        pin: true,
      },
    });
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#zlatan",
        scrub: 2.5,
        start: "top 70%",
        end: "90% top",
        // pin: true,
      },
    });
    tl.to("#zlatan", { opacity: 1 });
    zlatanRef.current.onloadedmetadata = () => {
      tl.to(zlatanRef.current, {
        duration: 1.8,
        currentTime: zlatanRef.current.duration,
      });
    };
  }, []);
  return (
    <section id="zlatan" className="min-h-screen w-full  ">
      <div className="">
        <video
          ref={zlatanRef}
          src="/videos/zlatan-optimized.mp4"
          playsInline
          muted
          preload="auto"
          className="object-cover w-screen h-screen md:h-full"
        />
      </div>
    </section>
  );
};

export default Zlatan;
