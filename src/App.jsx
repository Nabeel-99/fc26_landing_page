import gsap from "gsap";
import "./App.css";
import Hero from "./sections/Hero";
import Navbar from "./components/Navbar";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Features from "./sections/Features";
import Modes from "./sections/Modes";

gsap.registerPlugin(ScrollTrigger, useGSAP);
function App() {
  return (
    <main className="flex flex-col items-center h-full w-screen ">
      <Navbar />
      <Hero />
      <Features />
      <Modes />
    </main>
  );
}

export default App;
