"use client";
import { useEffect, useState } from "react";

type Props = {
  progress: number;
  onDone?: () => void;
};

export default function LoadingScreen({ progress, onDone }: Props) {
  const [fading, setFading] = useState(false);

  useEffect(() => {
    if (progress === 100) {
      setFading(true);
      const timer = setTimeout(() => onDone?.(), 600); // fade 600ms lalu panggil onDone
      return () => clearTimeout(timer);
    }
  }, [progress]);

  return (
    <div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center transition-opacity duration-500"
      style={{
        backgroundColor: "#F7F4EF",
        opacity: fading ? 0 : 1,
        pointerEvents: fading ? "none" : "auto",
      }}
    >
      <h1 className="uppercase font-newscript text-[52px] text-[#37546B] leading-[56px]">
        D<span className="font-newserif">ESTINY</span>
      </h1>
      <p className="font-newscript text-[36px] text-[#37546B] leading-[36px]">&amp;</p>
      <h1 className="uppercase font-newscript text-[52px] text-[#37546B] leading-[56px]">
        K<span className="font-newserif">ENNY</span>
      </h1>

      <p className="font-quattrocento text-[13px] text-[#37546B]/70 mt-4">
        Saturday, 11 July 2026
      </p>

      <div
        className="mt-10 rounded-full overflow-hidden"
        style={{ width: 180, height: 2, backgroundColor: "rgba(55,84,107,0.2)" }}
      >
        <div
          className="h-full rounded-full transition-all duration-300"
          style={{ width: `${progress}%`, backgroundColor: "#37546B" }}
        />
      </div>

      <p className="font-quattrocento text-[12px] text-[#37546B]/50 mt-2">
        {progress}%
      </p>
    </div>
  );
}