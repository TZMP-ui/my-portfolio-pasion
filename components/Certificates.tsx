"use client";

import { Award } from "lucide-react";

const certificates = [
  {
    title: "Introduction to Technical Writing",
    issuer: "Coursera",
    image: "/images/introduction to technical writing.png",
  },
  {
    title: "Creating a Portfolio Using Weebly",
    issuer: "Coursera",
    image: "/images/creating-a-portfolio-using-weebly.png",
  },
  {
    title: "Learning How to Learn: Powerful mental tools to help you master tough subjects",
    issuer: "Coursera",
    image: "/images/learning-how-to-learn-powerful-mental-tools-to-help-you-master-tough-subjects.png",
  },
  {
    title: "Power and Foreign Policy in International Relations",
    issuer: "Coursera",
    image: "/images/power-and-foreign-policy-in-International-relations.png",
  },
  {
    title: "Design Thinking for Innovation",
    issuer: "Coursera",
    image: "/images/design-thinking-for-innovation.png",
  },
  {
    title: "ETY Yuchengco Scholarship Certification",
    issuer: "Mapúa University",
    image: "/images/ety-yuchengco-scholarship.png",
  }
];

export default function Certificates() {
  return (
    <section id="certificates" className="w-full py-24 px-8 md:px-16 lg:px-24">
      
      <div className="mb-16">
        <h2 className="text-4xl font-bold tracking-tight md:text-5xl border-l-4 border-zinc-900 dark:border-white pl-6 py-2">
          Certificates
        </h2>
        <p className="mt-6 text-sm text-zinc-600 dark:text-zinc-400">
          Professional and academic certifications that demonstrate my commitment to continuous learning.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificates.map((cert, index) => (
          <div 
            key={index} 
            className="group flex flex-col gap-4 rounded-2xl border border-zinc-300 bg-white dark:border-zinc-800 dark:bg-[#1A1A1A] hover:border-zinc-500 dark:hover:border-zinc-500 transition-all hover:-translate-y-1 shadow-sm overflow-hidden"
          >
            <div className="relative w-full bg-zinc-100 dark:bg-zinc-800/50 flex items-center justify-center border-b border-zinc-200 dark:border-zinc-800">
              <img 
                src={cert.image} 
                alt={`${cert.title} Certificate`} 
                className="w-full h-auto object-contain z-20"
                onError={(e) => {
                  // Fallback to hide broken image icon when placeholder image isn't created yet
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>

            <div className="p-6 pt-2 flex flex-col gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-100 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100">
                <Award size={20} />
              </div>
              <div>
                <p className="text-xs font-bold text-zinc-500 uppercase tracking-wider mb-2">{cert.issuer}</p>
                <h3 className="text-lg font-bold leading-tight text-zinc-900 dark:text-white">{cert.title}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
      
    </section>
  );
}
