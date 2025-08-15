import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef, useState } from "react";
import { FaXmark } from "react-icons/fa6";

const Outro = () => {
  const [isOpen, setIsOpen] = useState(false);
  const fillRef = useRef(null);
  const textRef = useRef(null);

  const openTrailer = () => {
    setIsOpen(true);
  };
  const closeTrailer = () => {
    setIsOpen(false);
  };
  const onEnter = () => {
    gsap.to(fillRef.current, {
      scale: 3.2,
      duration: 1,
      ease: "power2.inOut",
    });
    gsap.to(textRef.current, {
      color: "black",
      duration: 0.5,
      ease: "power2.inOut",
    });
  };

  const onLeave = () => {
    gsap.to(fillRef.current, { scale: 0, duration: 0.5, ease: "power2.inOut" });
    gsap.to(textRef.current, {
      color: "white",
      duration: 0.5,
      ease: "power2.inOut",
    });
  };

  useGSAP(() => {
    gsap.set("#outro", { opacity: 1, marginTop: "10vh" });
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#outro",
        start: "top 30%",
        end: "top 20%",
        scrub: true,
      },
    });
    tl.to("#zlatan", { opacity: 0 });
    tl.from("#outro", { opacity: 0, ease: "power1.inOut" });
  }, []);
  return (
    <>
      <section
        id="outro"
        className="  flex items-center justify-center  h-screen w-full relative"
      >
        <div className="flex  flex-col items-center pt-10  justify-center    w-full h-full    gap-10">
          <img
            src="/images/mask.svg"
            alt=""
            className=" scale-[0.8]   max-w-full lg:w-[480px]"
          />
          <p className="text-center text-gradient text-6xl md:text-8xl xl:text-9xl lg:leading-[0.9em] tracking-tight">
            COMING <br />
            SEPT 26TH
          </p>
          {/* watch trailer btm */}
          <div
            className="relative overflow-hidden border border-[#015e42] bg-gradient-to-r from-[#0a0a0a] via-[#1c1c1c] to-[#0a0a0a] rounded-3xl w-44 h-12  cursor-pointer "
            onMouseEnter={onEnter}
            onMouseLeave={onLeave}
          >
            <button
              ref={textRef}
              onClick={openTrailer}
              href="https://youtu.be/TSi0iJYSQ24?si=uR5JtX_f3yW-chp8"
              className="relative flex items-center justify-center text-center w-full h-full z-20 cursor-pointer "
            >
              Watch Trailer
            </button>
            <div
              ref={fillRef}
              className="hidden md:block md:absolute left-1/2 bottom-0  w-40 h-40 rounded-full bg-gradient-to-t from-[#105fa5] via-[#47da71] to-[#10da3c] scale-0 "
            />
          </div>

          <div className="flex flex-col gap-5  items-center">
            <p className="text-3xl lg:text-5xl">Available on</p>
            <div className="flex items-center justify-center gap-8 px-36 lg:px-0">
              <img loading="lazy" src="/images/ps5.svg" className="w-32" />
              <img loading="lazy" src="/images/xbox.svg" className="w-60" />
              <img loading="lazy" src="/images/pc.png" className="w-20" />
            </div>
          </div>
        </div>
      </section>
      {/* iframe */}
      {isOpen && (
        <React.Fragment>
          <div className="fixed inset-0 bg-black w-full h-full z-30 "></div>
          <div className="w-full fixed inset-0  z-50">
            <div className=" p-10 inset-0 w-full h-full lg:max-w-7xl   mx-auto">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/TSi0iJYSQ24?autoplay=1"
                allowFullScreen
                title="FC26 Trailer"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                style={{
                  border: "none",
                }}
              />
            </div>
            <div className="absolute top-10 right-10">
              <button
                onClick={closeTrailer}
                className="border p-2 rounded-full bg-white text-black cursor-pointer"
              >
                <span className="sr-only">close</span>
                <FaXmark />
              </button>
            </div>
          </div>
        </React.Fragment>
      )}
    </>
  );
};

export default Outro;
