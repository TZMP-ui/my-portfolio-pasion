"use client";

import { useState } from "react";

export default function HeroImage() {
  const [error, setError] = useState(false);

  return (
    <div className="z-10 flex h-[75vh] w-full max-w-4xl items-end justify-center pointer-events-none overflow-hidden">
      {!error && (
        <img 
          src="/images/profile-picture.png" 
          alt="Zach Profile Picture" 
          className="w-full h-full object-cover object-top"
          onError={() => setError(true)}
        />
      )}
    </div>
  );
}

