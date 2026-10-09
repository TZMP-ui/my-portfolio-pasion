"use client";

import { Award, Briefcase, GraduationCap } from "lucide-react";

export default function Awards() {
  return (
    <section id="awards" className="w-full py-24 px-8 md:px-16 lg:px-24">
      
      <div className="mb-16">
        <h2 className="text-4xl font-bold tracking-tight md:text-5xl border-l-4 border-zinc-900 dark:border-white pl-6 py-2">
          Achievements & Experience
        </h2>
        <p className="mt-6 text-sm text-zinc-600 dark:text-zinc-400">
          Academic recognitions and early professional exposure that have shaped my engineering perspective.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        
        <div className="grid grid-cols-2 gap-4">
          <div className="h-56 rounded-2xl bg-zinc-200 dark:bg-zinc-800 overflow-hidden">
            <img src="/images/work-and-achievements1.png" alt="Achievement 1" className="w-full h-full object-cover" />
          </div>
          <div className="h-56 rounded-2xl bg-zinc-300 dark:bg-zinc-700 mt-12 overflow-hidden">
            <img src="/images/work-and-achievements2.png" alt="Achievement 2" className="w-full h-full object-cover" />
          </div>
          <div className="h-56 rounded-2xl bg-zinc-300 dark:bg-zinc-700 -mt-8 overflow-hidden">
            <img src="/images/work-and-achievements3.jpg" alt="Achievement 3" className="w-full h-full object-cover" />
          </div>
          <div className="h-56 rounded-2xl bg-zinc-200 dark:bg-zinc-800 mt-4 overflow-hidden">
            <img src="/images/work-and-achievements4.png" alt="Achievement 4" className="w-full h-full object-cover" />
          </div>
        </div>

        <div className="flex flex-col gap-4 justify-center">
          <div className="flex items-start gap-6 p-6 rounded-2xl border border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-[#1A1A1A] hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors">
            <GraduationCap className="text-zinc-400 mt-1 shrink-0" size={28} />
            <div>
              <p className="text-lg font-bold">ETY Yuchengco Scholar</p>
              <p className="text-xs font-bold text-zinc-500 uppercase mt-1">Mapúa University | Present</p>
              <p className="text-sm mt-2 text-zinc-600 dark:text-zinc-400">Pursuing a Bachelor of Science in Computer Engineering.</p>
            </div>
          </div>
          
          <div className="flex items-start gap-6 p-6 rounded-2xl border border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-[#1A1A1A] hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors">
            <Award className="text-zinc-400 mt-1 shrink-0" size={28} />
            <div>
              <p className="text-lg font-bold">ETY Yuchengco SHS Scholar</p>
              <p className="text-xs font-bold text-zinc-500 uppercase mt-1">Mapúa University | Grade 11-12</p>
              <p className="text-sm mt-2 text-zinc-600 dark:text-zinc-400">Recipient of the scholarship throughout Senior High School.</p>
            </div>
          </div>
          
          <div className="flex items-start gap-6 p-6 rounded-2xl border border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-[#1A1A1A] hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors">
            <Briefcase className="text-zinc-400 mt-1 shrink-0" size={28} />
            <div>
              <p className="text-lg font-bold">Work Immersion Trainee</p>
              <p className="text-xs font-bold text-zinc-500 uppercase mt-1">Microgenesis Business Systems</p>
              <p className="text-sm mt-2 text-zinc-600 dark:text-zinc-400">Gained exposure to a professional technology environment and workplace practices.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}