"use client";

import { Cpu, Map, BookOpen, Compass, Search, Wrench, Lightbulb } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="w-full py-24 px-8 md:px-16 lg:px-24">
      
      <div className="mb-12">
        <p className="mb-2 text-xs font-bold tracking-widest text-zinc-500 uppercase">About Me</p>
        <h2 className="text-4xl font-bold tracking-tight md:text-6xl">
          Curious Mind. <span className="text-zinc-400">Developing Engineer.</span>
        </h2>
      </div>

      <div className="rounded-3xl border border-zinc-300 bg-white p-8 shadow-sm dark:border-zinc-800 dark:bg-[#1A1A1A] md:p-12">
        
        <div className="mb-8 flex flex-col gap-6 border-b border-zinc-200 pb-8 dark:border-zinc-800 md:flex-row md:items-center md:justify-between">
          
          <div className="flex items-center gap-6">
            <div className="h-24 w-24 shrink-0 overflow-hidden rounded-full border-2 border-zinc-300 bg-zinc-200 dark:border-zinc-700 dark:bg-zinc-800">
              <img src="/images/card-picture.png" alt="Zach" className="w-full h-full object-cover" />
            </div>
            <div>
              <h3 className="text-2xl font-bold uppercase tracking-wide">Timothy Zach M. Pasion</h3>
              <p className="mt-1 text-sm font-semibold text-zinc-500">1st Year Computer Engineering Student</p>
            </div>
          </div>

          <div className="flex gap-8 text-center md:text-left">
            <div>
              <p className="text-3xl font-bold">ETY</p>
              <p className="text-xs font-bold uppercase tracking-widest text-zinc-500">Scholar</p>
            </div>
            <div>
              <p className="text-3xl font-bold">1st</p>
              <p className="text-xs font-bold uppercase tracking-widest text-zinc-500">Year Student</p>
            </div>
            <div>
              <p className="text-3xl font-bold">MU</p>
              <p className="text-xs font-bold uppercase tracking-widest text-zinc-500">Mapúa Univ</p>
            </div>
          </div>
        </div>

        <div className="mb-12 max-w-4xl space-y-4 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
          <p>
            Entering Computer Engineering has challenged me to expand beyond what I already know, teaching me that becoming an engineer requires patience, critical thinking, and the willingness to learn from mistakes.
          </p>
          <p>
            When concepts are difficult to understand or projects don&apos;t immediately work, I treat them as part of the engineering process: identify the problem, understand its cause, test solutions, and improve the design.
          </p>

        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-widest text-zinc-500">Currently</p>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3 rounded-xl border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-[#222222]">
                <Cpu className="text-zinc-400" size={20} />
                <div>
                  <p className="text-sm font-bold">Bridging</p>
                  <p className="text-xs text-zinc-500">Software & Computer Hardware</p>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-xl border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-[#222222]">
                <Search className="text-zinc-400" size={20} />
                <div>
                  <p className="text-sm font-bold">Exploring</p>
                  <p className="text-xs text-zinc-500">Artificial Intelligence Integrations</p>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-xl border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-[#222222]">
                <BookOpen className="text-zinc-400" size={20} />
                <div>
                  <p className="text-sm font-bold">Studying</p>
                  <p className="text-xs text-zinc-500">Math, Science, and Electronics</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-widest text-zinc-500">Trait</p>
            <div className="grid grid-cols-2 gap-3">
              <div className="flex flex-col items-center justify-center gap-2 rounded-xl border border-zinc-200 bg-zinc-50 p-4 text-center dark:border-zinc-800 dark:bg-[#222222]">
                <Compass className="text-zinc-400" size={24} />
                <p className="text-sm font-bold">Curious</p>
              </div>
              <div className="flex flex-col items-center justify-center gap-2 rounded-xl border border-zinc-200 bg-zinc-50 p-4 text-center dark:border-zinc-800 dark:bg-[#222222]">
                <Wrench className="text-zinc-400" size={24} />
                <p className="text-sm font-bold">Problem Solver</p>
              </div>
              <div className="flex flex-col items-center justify-center gap-2 rounded-xl border border-zinc-200 bg-zinc-50 p-4 text-center dark:border-zinc-800 dark:bg-[#222222]">
                <Map className="text-zinc-400" size={24} />
                <p className="text-sm font-bold">Adaptable</p>
              </div>
              <div className="flex flex-col items-center justify-center gap-2 rounded-xl border border-zinc-200 bg-zinc-50 p-4 text-center dark:border-zinc-800 dark:bg-[#222222]">
                <Lightbulb className="text-zinc-400" size={24} />
                <p className="text-sm font-bold">Analytical</p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}