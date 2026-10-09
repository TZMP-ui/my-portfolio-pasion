import Marquee from "@/components/Marquee";
import WorkGallery from "@/components/WorkGallery";
import WhatICanDo from "@/components/WhatICanDo";
import About from "@/components/About";
import Awards from "@/components/Awards";
import Certificates from "@/components/Certificates";
import Contact from "@/components/Contact"; // Import the Contact section

import FadeIn from "@/components/FadeIn";
import Particles from "@/components/Particles";
import ScrollReveal from "@/components/ScrollReveal";
import HeroImage from "@/components/HeroImage";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#E5E5E5] text-zinc-900 transition-colors duration-300 dark:bg-[#111111] dark:text-white">
      
      {/* Global Particles Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* Light Mode Particles */}
        <div className="absolute inset-0 transition-opacity duration-700 ease-in-out dark:opacity-0 opacity-20">
          <Particles
            particleColors={['#18181b', '#3f3f46']}
            particleCount={250}
            particleSpread={10}
            speed={0.1}
            particleBaseSize={100}
            moveParticlesOnHover={true}
            alphaParticles={false}
            disableRotation={false}
            className=""
          />
        </div>
        {/* Dark Mode Particles */}
        <div className="absolute inset-0 transition-opacity duration-700 ease-in-out opacity-0 dark:opacity-15">
          <Particles
            particleColors={['#ffffff', '#a1a1aa']}
            particleCount={250}
            particleSpread={10}
            speed={0.1}
            particleBaseSize={100}
            moveParticlesOnHover={true}
            alphaParticles={false}
            disableRotation={false}
            className=""
          />
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative flex min-h-screen items-end justify-center overflow-hidden border-b border-zinc-300 dark:border-zinc-800">

        <div className="absolute top-1/2 w-full -translate-y-1/2 pointer-events-none z-10">
          <Marquee />
        </div>
        <HeroImage />
        <div className="absolute bottom-12 right-12 hidden rotate-90 text-xs font-semibold tracking-widest text-zinc-500 md:block z-10">
          SCROLL DOWN &rarr;
        </div>
      </section>

      <section className="flex min-h-[60vh] items-center justify-center px-8 md:px-24 py-24 text-center">
        <ScrollReveal
          scrollContainerRef={undefined}
          baseOpacity={0}
          enableBlur={true}
          baseRotation={3}
          blurStrength={8}
          containerClassName="max-w-4xl"
        >
          I have always been curious about how technology works, from the software that users interact with to the hardware that makes modern computing possible.
        </ScrollReveal>
      </section>

      <FadeIn>
        <WorkGallery />
      </FadeIn>
      
      <FadeIn>
        <WhatICanDo />
      </FadeIn>
      
      <FadeIn>
        <About />
      </FadeIn>
      
      <FadeIn>
        <Awards />
      </FadeIn>
      
      <FadeIn>
        <Certificates />
      </FadeIn>
      
      <FadeIn>
        <Contact />
      </FadeIn>

    </main>
  );
}