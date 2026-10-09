"use client";

import ChromaGrid from "./ChromaGrid";

const projects = [
  {
    id: 1,
    title: "AGOS — Early Warning System",
    description: "A conceptual early warning and safer-route system addressing flooding risks using ultrasonic sensors, LoRaWAN, PostGIS, and geographic data integration.",
    image: "bg-blue-900/20", 
  },
  {
    id: 2,
    title: "The Integration of AI Chatbots & Agents",
    description: "A video output exploring how AI systems interact with users, process information, and perform tasks across different technical fields.",
    image: "bg-emerald-900/20",
  },
  {
    id: 3,
    title: "My Engineering Journey",
    description: "An interview and video storytelling project reflecting on the experiences, challenges, and lessons that contribute to my growth as a developing engineer.",
    image: "bg-orange-900/20",
  }
];

const chromaItems = projects.map((p, index) => ({
  title: p.title,
  subtitle: p.description,
  // Replace these paths with the actual paths to your project images
  image: index === 0 
    ? "/images/agos.png" 
    : index === 1
    ? "/images/integration-of-ai-chatbots-and-agents.png" 
    : "/images/my-engineering-journey.png",
  borderColor: "#a1a1aa", // zinc-400
  gradient: "none",
  url: index === 0
    ? "https://drive.google.com/file/d/1xSOJzUCP6ZPPEmsuhhgxipsDbTg6OB69/view?usp=sharing"
    : index === 1
    ? "https://drive.google.com/file/d/1N0-P9RjBCMjAjO9bTYM1Bu3MMxABsNU-/view?usp=drive_link"
    : "https://drive.google.com/file/d/1Wba9_XQGR70nTkPoX4utrR6Nvuphvdag/view?usp=drive_link",
  handle: ""
}));

export default function WorkGallery() {
  return (
    <section id="work" className="w-full py-24 px-8 md:px-16 lg:px-24">
      
      <div className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
        <div>
          <p className="text-xs font-bold tracking-widest text-zinc-500 mb-2">COURSEWORK & PROJECTS</p>
          <h2 className="text-4xl font-bold md:text-5xl">Work Gallery</h2>
          <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-400 max-w-md">
            Outputs that combine software, hardware, data, and real-world problem-solving.
          </p>
        </div>
      </div>

      <div style={{ position: 'relative' }}>
        <ChromaGrid 
          items={chromaItems}
          radius={375}
          damping={0.9}
          fadeOut={0.1}
          ease="power3.out"
          columns={3}
          rows={1}
        />
      </div>
      
    </section>
  );
}