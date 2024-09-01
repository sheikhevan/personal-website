"use client";

import { ArrowDown } from "lucide-react";
import Image from "next/image";

export default function Home() {
  const handleScrollClick = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main>
      <div className="h-screen w-full bg-white bg-dot-hunter/[0.4] flex flex-col items-center justify-center relative">
        <p className="text-6xl sm:text-[11rem] font-bold relative bg-clip-text text-transparent bg-gradient-to-b from-sage to-fern py-6 text-left">
          Evan Alvarez
        </p>
        <p className="text-xl sm:text-3xl font-semibold text-fern">
          Programmer. Designer. Student.
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
        id="about"
        className="min-h-screen w-full bg-white bg-dot-hunter/[0.4] flex flex-col md:flex-row items-center justify-center relative"
      >
        <div className="w-full md:w-1/2 h-full flex items-center justify-end p-8 md:pr-4">
          <div className="relative w-4/5 aspect-square">
            <Image
              src="/evan_image_01.jpg"
              alt="Evan Alvarez"
              height={764}
              width={600}
              className="object-cover rounded-lg border-2 shadow-xl"
            />
          </div>
        </div>
        <div className="w-full md:w-1/2 p-8 md:pl-4">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-4xl font-bold text-fern mb-4">About Me</h2>
            <p className="text-lg text-hunter">
              Hey! I&apos;m Evan. I am a student at Westwood High School with a
              deep passion for programming. What I love most about programming
              is the creativity and uniqueness involved. Like a cryptographic
              hash, no two peoples solution to a complex problem will be the
              same. If you couldn&apos;t tell by that last sentence, I also take
              a strong interest in security and cryptography. On a normal day,
              you might find me working on a new project, contributing to open
              source, or even reading philosophy. I&apos;m always looking to
              connect with others who share my enthusiasm for programming and
              who will help me grow both personally and professionally.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
