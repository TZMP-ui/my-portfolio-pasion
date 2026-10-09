"use client";

import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaPython } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

export default function WhatICanDo() {
  return (
    <section id="what-i-can-do" className="w-full py-24 px-8 md:px-16 lg:px-24">
      
      <div className="mb-16">
        <p className="text-xs font-bold tracking-widest text-zinc-500 mb-2 uppercase">My Capabilities</p>
        <h2 className="text-6xl font-bold tracking-tighter md:text-8xl">Skills</h2>
      </div>

      <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">
        
        <div className="flex flex-col">
          <div className="mb-8 flex items-start justify-between border-b border-zinc-300 pb-4 dark:border-zinc-800">
            <span className="text-4xl font-light text-zinc-400">01</span>
            <h3 className="text-right text-base font-bold tracking-widest w-1/2 uppercase">Software & Front-End</h3>
          </div>
          <p className="mb-10 text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
            Designing front-end web pages and exploring computer hardware. I practice bridging the gap between hardware and software to build useful, reliable, and meaningful technological solutions.
          </p>
          
          <div className="grid grid-cols-3 gap-6 sm:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4">
            <div className="flex aspect-square items-center justify-center rounded-2xl bg-zinc-100 text-5xl text-[#3776AB] dark:bg-[#1A1A1A] hover:-translate-y-1 transition-transform shadow-sm"><FaPython /></div>
            <div className="flex aspect-square items-center justify-center rounded-2xl bg-zinc-100 text-5xl text-[#61DAFB] dark:bg-[#1A1A1A] hover:-translate-y-1 transition-transform shadow-sm"><FaReact /></div>
            <div className="flex aspect-square items-center justify-center rounded-2xl bg-zinc-100 text-5xl text-[#E34F26] dark:bg-[#1A1A1A] hover:-translate-y-1 transition-transform shadow-sm"><FaHtml5 /></div>
            <div className="flex aspect-square items-center justify-center rounded-2xl bg-zinc-100 text-5xl text-[#1572B6] dark:bg-[#1A1A1A] hover:-translate-y-1 transition-transform shadow-sm"><FaCss3Alt /></div>
            <div className="flex aspect-square items-center justify-center rounded-2xl bg-zinc-100 text-5xl text-[#F7DF1E] dark:bg-[#1A1A1A] hover:-translate-y-1 transition-transform shadow-sm"><FaJs /></div>
            <div className="flex aspect-square items-center justify-center rounded-2xl bg-zinc-100 text-5xl text-[#06B6D4] dark:bg-[#1A1A1A] hover:-translate-y-1 transition-transform shadow-sm"><SiTailwindcss /></div>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="mb-8 flex items-start justify-between border-b border-zinc-300 pb-4 dark:border-zinc-800">
            <span className="text-4xl font-light text-zinc-400">02</span>
            <h3 className="text-right text-base font-bold tracking-widest w-1/2 uppercase">Data & Analytics</h3>
          </div>
          <p className="mb-10 text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
            Strengthening my ability to interpret information, identify patterns, and approach problems analytically to support engineering design and artificial intelligence research.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6 text-base text-center font-bold dark:border-zinc-700 dark:bg-[#1A1A1A] hover:-translate-y-1 transition-transform shadow-sm">Data Analysis</div>
            <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6 text-base text-center font-bold dark:border-zinc-700 dark:bg-[#1A1A1A] hover:-translate-y-1 transition-transform shadow-sm">Statistics</div>
            <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6 text-base text-center font-bold dark:border-zinc-700 dark:bg-[#1A1A1A] hover:-translate-y-1 transition-transform shadow-sm">Probability</div>
            <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6 text-base text-center font-bold dark:border-zinc-700 dark:bg-[#1A1A1A] hover:-translate-y-1 transition-transform shadow-sm">Technical Research</div>
          </div>
        </div>

      </div>
    </section>
  );
}