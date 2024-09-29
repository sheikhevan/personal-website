"use client";

import { ArrowDown } from "lucide-react";
import Image from "next/image";

export default function Home() {
  const handleSmoothScroll = (targetId: string) => {
    document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" });
  };

  const skills = [
    { name: "HTML", icon: "/icons/html.svg" },
    { name: "CSS", icon: "/icons/css.svg" },
    { name: "JavaScript", icon: "/icons/javascript.svg" },
    { name: "TypeScript", icon: "/icons/typescript.svg" },
    { name: "React", icon: "/icons/react.svg" },
    { name: "NextJS", icon: "/icons/next.svg" },
    { name: "Rust", icon: "/icons/rust.svg" },
  ];

  return (
      <main>
        <div className="h-screen w-full bg-white bg-dot-hunter/[0.4] flex flex-col items-center justify-center relative">
          <p className="text-6xl sm:text-[11rem] text-center font-bold relative bg-clip-text text-transparent bg-gradient-to-b from-sage to-fern py-6">
            Evan Alvarez
          </p>
          <p className="text-xl sm:text-3xl font-semibold text-fern">
            Programmer. Designer. Student.
          </p>
          <button
              onClick={() => handleSmoothScroll("about")}
              className="absolute bottom-8 bg-white border-fern border-2 text-fern hover:bg-fern hover:text-white rounded-full p-4 transition-colors duration-300"
              aria-label="Scroll to about section"
          >
            <ArrowDown size={24} />
          </button>
        </div>

        <div id="about" className="w-full bg-white bg-dot-hunter/[0.4] py-16">
          <div className="container mx-auto flex flex-col md:flex-row items-center justify-center">
            <div className="w-full md:w-1/2 mb-8 md:mb-0 md:pr-8">
              <div className="relative w-full aspect-square max-w-md mx-auto px-4 sm:px-0">
                <Image
                    src="/evan_image_01.jpg"
                    alt="Evan Alvarez"
                    height={764}
                    width={600}
                    className="rounded-lg border-2 shadow-xl"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-4xl font-bold text-fern mb-4">About Me</h2>
                <p className="text-lg text-hunter">
                  Hey! I&apos;m Evan. I am a student at Westwood High School with
                  a deep passion for programming. What I love most about
                  programming is the creativity and uniqueness involved. Like a
                  cryptographic hash, no two peoples solution to a complex problem
                  will be the same. If you couldn&apos;t tell by that last
                  sentence, I also take a strong interest in security and
                  cryptography. On a normal day, you might find me working on a
                  new project, contributing to open source, or even reading
                  philosophy. I&apos;m always looking to connect with others who
                  share my enthusiasm for programming and who will help me grow
                  both personally and professionally.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div id="skills" className="w-full bg-white bg-dot-hunter/[0.4] py-16 relative">
          <div className="container mx-auto flex flex-col md:flex-row items-start justify-center">
            <div className="w-full md:w-1/2 mb-8 md:mb-0 md:pr-8">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-4xl font-bold text-fern mb-4">Skills</h2>
                <p className="text-lg text-hunter mb-4">
                  Over the 5 years i&apos;ve been programming, these are some of
                  the skills i&apos;ve learned. Mainly, I do web development,
                  because I like the design aspect that goes along with it. In the
                  past, i&apos;ve also written code in Python, Java, C, and C++,
                  though I would not say these are my forte.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="flex flex-col md:flex-row items-center justify-between">
                  <ul className="space-y-4 mb-8 md:mb-0">
                    {skills.map((skill, index) => (
                        <li key={index} className="flex items-center space-x-4">
                          <Image
                              src={skill.icon}
                              alt={skill.name}
                              width={32}
                              height={32}
                          />
                          <span className="text-lg font-semibold text-hunter">
                        {skill.name}
                      </span>
                        </li>
                    ))}
                  </ul>
                  <div className="flex justify-center md:justify-end">
                    <a
                        href="https://github.com/sheikhevan/sheikhevan"
                        className="inline-block"
                    >
                      <Image
                          alt="github.com/sheikhevan"
                          height={200}
                          width={400}
                          src="https://github-readme-stats.vercel.app/api/top-langs?username=sheikhevan&langs_count=8&theme=transparent&layout=donut-vertical&card_width=320"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
  );
}