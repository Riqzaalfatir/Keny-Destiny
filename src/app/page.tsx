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

      {!showLoading && !start && <Opening setStart={setStart} />}

      {!showLoading && start && (
        <>
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
        </>
      )}
    </>
  );
}
// "use client";

// import { usePreloader } from "@/components/hooks/usePreloader"; // ← tambahkan

// import Hero from "@/components/sections/Hero";
// import Nama from "@/components/sections/Nama";
// import OurStory from "@/components/sections/OurStory";
// import Details from "@/components/sections/Details";
// import Gallery from "@/components/sections/Gallery";
// import Rsvp from "@/components/sections/Rsvp";
// import Gift from "@/components/sections/Gift";
// import Wishes from "@/components/sections/Wishes";
// import ThankYou from "@/components/sections/ThankYou";
// import LoadingScreen from "@/components/ui/LoadingScreen";

// export default function Home() {
//   const { loaded, progress } = usePreloader();

//   if (!loaded) return <LoadingScreen progress={progress} />;

//   return (
//     <>
//       <Hero />
//       <Nama />
//       <Details />
//       <Nama />
//       <OurStory />
//       <Gallery />
//       <Rsvp />
//       <Gift />
//       <Nama />
//       <Wishes />
//       <ThankYou />
//     </>
//   );
// }