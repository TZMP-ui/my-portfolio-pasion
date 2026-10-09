"use client";

import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {

  return (
    <section id="contact" className="w-full py-24 px-8 md:px-16 lg:px-24">
      
      {/* Section Header */}
      <div className="mb-16">
        <p className="mb-2 text-xs font-bold tracking-widest text-zinc-500 uppercase">Get In Touch</p>
        <h2 className="text-6xl font-bold tracking-tighter uppercase md:text-8xl">
          Let&apos;s Work<br />Together
        </h2>
      </div>

      <div className="flex flex-col justify-between gap-16 md:flex-row">
        
        {/* Left Column: Pitch & Resume */}
        <div className="flex flex-col items-start md:w-1/2">
          <h3 className="mb-4 text-2xl font-bold">Looking for the next problem worth solving.</h3>
          <p className="mb-8 max-w-md text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
            I&apos;m open to opportunities where I can contribute to software testing, web development, IT operations, and digital workflows.
          </p>

        </div>

        {/* Right Column: Contact Links & Form */}
        <div className="flex flex-col gap-4 md:w-1/2">
          
          {/* Email Card */}
          <a href="mailto:timothyzachmpasion@gmail.com" className="group flex items-center justify-between rounded-2xl border border-zinc-300 bg-white p-6 transition-colors hover:border-zinc-400 dark:border-zinc-800 dark:bg-[#1A1A1A] dark:hover:border-zinc-600">
            <div className="flex items-center gap-4">
              <Mail className="text-zinc-400 transition-colors group-hover:text-zinc-900 dark:group-hover:text-white" />
              <div>
                <p className="mb-1 text-xs font-bold tracking-widest text-zinc-500 uppercase">Email</p>
                <p className="text-sm font-semibold">timothyzachmpasion@gmail.com</p>
              </div>
            </div>
            <span className="text-xs font-bold text-zinc-400">01</span>
          </a>

          {/* GitHub Card */}
          <a href="https://github.com/TZMP-ui" target="_blank" rel="noreferrer" className="group flex items-center justify-between rounded-2xl border border-zinc-300 bg-white p-6 transition-colors hover:border-zinc-400 dark:border-zinc-800 dark:bg-[#1A1A1A] dark:hover:border-zinc-600">
            <div className="flex items-center gap-4">
              <FaGithub className="text-zinc-400 transition-colors group-hover:text-zinc-900 dark:group-hover:text-white" />
              <div>
                <p className="mb-1 text-xs font-bold tracking-widest text-zinc-500 uppercase">GitHub</p>
                <p className="text-sm font-semibold">github.com/TZMP-ui</p>
              </div>
            </div>
            <span className="text-xs font-bold text-zinc-400">02</span>
          </a>

          {/* LinkedIn Card */}
          <a href="https://www.linkedin.com/in/tzmp-undefined-341a68432" target="_blank" rel="noreferrer" className="group flex items-center justify-between rounded-2xl border border-zinc-300 bg-white p-6 transition-colors hover:border-zinc-400 dark:border-zinc-800 dark:bg-[#1A1A1A] dark:hover:border-zinc-600">
            <div className="flex items-center gap-4">
              <FaLinkedin className="text-zinc-400 transition-colors group-hover:text-zinc-900 dark:group-hover:text-white" />
              <div>
                <p className="mb-1 text-xs font-bold tracking-widest text-zinc-500 uppercase">LinkedIn</p>
                <p className="text-sm font-semibold">linkedin.com/in/tzmp-undefined-341a68432</p>
              </div>
            </div>
            <span className="text-xs font-bold text-zinc-400">03</span>
          </a>



        </div>
      </div>
    </section>
  );
}