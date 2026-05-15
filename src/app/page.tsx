"use client";

import { useState } from "react";
import { usePreloader } from "@/components/hooks/usePreloader";
import LoadingScreen from "@/components/ui/LoadingScreen";
import Opening from "@/components/popup/Opening";

import Hero from "@/components/sections/Hero";
import Nama from "@/components/sections/Nama";
import OurStory from "@/components/sections/OurStory";
import Details from "@/components/sections/Details";
import Gallery from "@/components/sections/Gallery";
import Rsvp from "@/components/sections/Rsvp";
import Gift from "@/components/sections/Gift";
import Wishes from "@/components/sections/Wishes";
import ThankYou from "@/components/sections/ThankYou";

export default function Home() {
  const [start, setStart] = useState(false);
  const [showLoading, setShowLoading] = useState(true);
  const { progress } = usePreloader();

  return (
    <>
      {showLoading && (
        <LoadingScreen
          progress={progress}
          onDone={() => setShowLoading(false)}
        />
      )}

      <div className={!showLoading && !start ? "block" : "hidden"}>
        <Opening setStart={setStart} />
      </div>

      <div className={!showLoading && start ? "block" : "hidden"}>
        <Hero />
        <Nama />
        <Details />
        <Nama />
        <OurStory />
        <Gallery />
        <Rsvp />
        <Gift />
        <Nama />
        <Wishes />
        <ThankYou />
      </div>
    </>
  );
}
