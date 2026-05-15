// useAOS.ts — hapus import css dari sini
"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import AOS from "aos";

export function useAOS() {
  const pathname = usePathname();

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out",
      once: true,
      offset: 100,      // ← elemen trigger 100px sebelum masuk viewport
      delay: 0,
      startEvent: "DOMContentLoaded",
    });
    AOS.refresh();
  }, [pathname]);
}