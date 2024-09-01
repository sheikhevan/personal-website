"use client";

import { ArrowDown } from "lucide-react";
import { useRef } from "react";

export default function Home() {
  const aboutRef = useRef<HTMLDivElement>(null);

  const handleScrollClick = () => {
    aboutRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main>
      <div className="h-screen w-full bg-white bg-dot-hunter/[0.4] flex flex-col items-center justify-center relative">
        <p className="text-6xl sm:text-[11rem] font-bold relative bg-clip-text text-transparent bg-gradient-to-b from-sage to-fern py-6 text-left">
          Evan Alvarez
        </p>
        <p className="text-xl sm:text-3xl font-semibold text-fern">
          I like to code.
        </p>
        <button
          onClick={handleScrollClick}
          className="absolute bottom-8 bg-white border-fern border-2 text-fern hover:bg-fern hover:text-white rounded-full p-4 transition-colors duration-300"
          aria-label="Scroll to next section"
        >
          <ArrowDown size={24} />
        </button>
      </div>
      <div
        ref={aboutRef}
        className="h-screen w-full bg-white bg-dot-hunter/[0.4] flex flex-col items-center justify-center relative"
      ></div>
    </main>
  );
}
