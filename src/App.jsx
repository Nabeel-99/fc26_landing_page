import gsap from "gsap";
import "./App.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Features from "./components/Features";

gsap.registerPlugin(ScrollTrigger, useGSAP);
function App() {
  return (
    <main className="flex flex-col items-center h-full w-screen ">
      <Navbar />
      <Hero />
      <Features />
      <div className="min-h-screen border z-10 mt-[-80vh] bg-red-500">bro</div>
    </main>
  );
}

export default App;
