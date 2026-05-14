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
  return (
    <>
      <Hero />
      <Nama/>
      <Details />
      <Nama/>
      <OurStory />
      <Gallery />
      <Rsvp />
      <Gift />
      <Nama/>
      <Wishes />
      <ThankYou />
    </>
  );
}