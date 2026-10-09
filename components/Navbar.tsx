"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  return (
    <nav className="fixed top-0 z-50 flex w-full items-center justify-between border-b border-zinc-300 bg-[#E5E5E5]/80 px-8 py-4 backdrop-blur-md transition-colors duration-300 dark:border-zinc-800 dark:bg-[#111111]/80">
      
      <div className="flex items-center gap-3 text-sm font-bold tracking-widest">
        <div className="flex h-8 w-8 items-center justify-center rounded bg-zinc-900 text-white dark:bg-white dark:text-zinc-900">
          Z
        </div>
        ZACH
      </div>

      <div className="hidden gap-8 text-xs font-semibold tracking-widest md:flex">
        <Link href="#work" className="hover:text-zinc-500 transition-colors">PROJECTS</Link>
        <Link href="#what-i-can-do" className="hover:text-zinc-500 transition-colors">SKILLS</Link>
        <Link href="#about" className="hover:text-zinc-500 transition-colors">ABOUT</Link>
        <Link href="#awards" className="hover:text-zinc-500 transition-colors">EXPERIENCE</Link>
      </div>

      <div className="flex items-center gap-4">
        {mounted && (
          <button
            onClick={(e) => {
              const nextTheme = theme === "dark" ? "light" : "dark";
              
              if (!document.startViewTransition) {
                setTheme(nextTheme);
                return;
              }

              const x = e.clientX;
              const y = e.clientY;
              const endRadius = Math.hypot(
                Math.max(x, innerWidth - x),
                Math.max(y, innerHeight - y)
              );

              const transition = document.startViewTransition(() => {
                setTheme(nextTheme);
              });

              transition.ready.then(() => {
                document.documentElement.animate(
                  {
                    clipPath: [
                      `circle(0px at ${x}px ${y}px)`,
                      `circle(${endRadius}px at ${x}px ${y}px)`,
                    ],
                  },
                  {
                    duration: 700,
                    easing: "ease-in-out",
                    pseudoElement: "::view-transition-new(root)",
                  }
                );
              });
            }}
            className="rounded-full p-2 hover:bg-zinc-200 transition-colors dark:hover:bg-zinc-800"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        )}
      </div>
    </nav>
  );
}