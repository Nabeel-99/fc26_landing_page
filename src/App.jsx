import gsap from "gsap";
import "./App.css";
import Hero from "./sections/Hero";
import Navbar from "./components/Navbar";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Features from "./sections/Features";
import Modes from "./sections/Modes";
import Zlatan from "./sections/Zlatan";
import Outro from "./sections/Outro";
import { useEffect, useRef } from "react";
import ReactLenis from "lenis/react";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const lenisRef = useRef();
  useEffect(() => {
    const update = (time) => {
      lenisRef.current?.lenis?.raf(time * 1000);
    };
    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);
    return () => {
      gsap.ticker.remove(update);
    };
  }, []);
  return (
    <ReactLenis
      root
      options={{
        autoRaf: false,
        duration: 2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        syncTouch: false,
      }}
      ref={lenisRef}
    >
      <main className="flex flex-col items-center h-full w-screen ">
        <Navbar />
        <Hero />
        <Features />
        <Modes />
        <Zlatan />
        <Outro />
      </main>
    </ReactLenis>
  );
}

export default App;
