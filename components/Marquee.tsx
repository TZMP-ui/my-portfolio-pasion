"use client";
import { motion } from "framer-motion";

export default function Marquee() {
  return (
    <div className="absolute flex w-full overflow-hidden whitespace-nowrap opacity-30 pointer-events-none select-none">
      <motion.div
        className="flex gap-10 text-[12vw] font-bold tracking-tighter text-transparent [-webkit-text-stroke:2px_#111] dark:[-webkit-text-stroke:2px_#eee]"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 30,
        }}
      >
        <span>TIMOTHY ZACH PASION TIMOTHY ZACH PASION</span>
        <span>TIMOTHY ZACH PASION TIMOTHY ZACH PASION</span>
      </motion.div>
    </div>
  );
}