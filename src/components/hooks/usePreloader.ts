"use client";
import { useEffect, useState } from "react";

const IMAGES_TO_PRELOAD = [
  "/images/Hero/AmplopUtama.svg",
  "/images/Hero/Bungamawar.svg",
  "/images/Hero/BungaMawarKecil.svg",
  "/images/Hero/OrnamentNama.svg",
  "/images/Hero/OrnamentKotak.svg",
  "/images/Hero/OrnamentLingkar.svg",
  "/images/Hero/OrnamentDetails.svg",
  "/images/Hero/OrnamentKotakBiru.png",
  "/images/Hero/OrnamentKindly.svg",
  "/images/Hero/PasFoto1.svg",
  "/images/Hero/PasFoto2.svg",
  "/images/Hero/OrnamentmawarKanann.png",
  "/images/Hero/MawarBiru.svg",
  "/images/Hero/OrnamentK.svg",
  "/images/OurStory/CouplePas1.webp",
  "/images/OurStory/CouplePas2.webp",
  "/images/OurStory/CouplePas3.webp",
  "/images/ThankYou/BgThankYou.webp",
  "/images/Hero/BungaBelakang.webp",
  "/images/Hero/Emblem.svg",
  "/images/Hero/K.svg",

  "/images/Opening/Amplop.svg",
  "/images/Opening/Emblem.svg",
  "/images/Opening/BUNGAKIRIHD.png",
  "/images/Opening/BUNGAKANANHD.png"
];

export function usePreloader() {
  const [progress, setProgress] = useState(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
  const total = IMAGES_TO_PRELOAD.length;

  if (total === 0) {
    setProgress(100);
    setLoaded(true);
    return;
  }

  let count = 0;

  IMAGES_TO_PRELOAD.forEach((src) => {
    const img = new window.Image();
    img.src = src;
    img.onload = img.onerror = () => {
      count++;
      setProgress(Math.round((count / total) * 100));
      if (count === total) setLoaded(true);
    };
  });
}, []);

  return { loaded, progress };
}