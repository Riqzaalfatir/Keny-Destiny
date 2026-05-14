import React from "react";
import Image from "next/image";

const OurStory = () => {
  return (
    <section className="bg-[#F7F4EF]">
      <div className="max-w-7xl mx-auto px-4 overflow-x-hidden">
        <div className="flex flex-col items-center justify-center pt-[84px] pb-[86px] gap-[72px]">
          <div className="text-center">
            <h1 className="font-newserif text-[24px] text-[#37546B] tracking-wide leading-none">
              OUR
              <br />
              <span className="font-newscript">L</span>OVE STORY
            </h1>
            <div className="mt-[35px] flex flex-col items-center justify-center gap-[20px]">
              <p className="font-quattrocento text-[12px] text-[#37546B]">
                They say love finds you when you least expect it — and for
                <br />
                us, it began somewhere between coffee conversations
                <br />
                and rounds of golf. What started as easy laughter and
                <br />
                simple moments slowly became something neither of us
                <br />
                planned for. Before we knew it, casual chats turned into
                <br />
                long video calls across thousands of miles, where time
                <br />
                zones no longer mattered and goodbyes were never quite
                <br />
                easy.
              </p>

              <p className="font-quattrocento text-[12px] text-[#37546B]">
                As our friendship grew, it revealed something deeper —<br />
                shared values, shared prayers, and dreams that seemed to
                <br />
                fit effortlessly together. Even though our time in the same
                <br /> place felt brief, there was a quiet peace we couldn’t
                ignore.
                <br /> From the very beginning, we sensed that God was writing
                <br />
                a story far greater than anything we could have planned.
                <br />
                Doors opened, timelines aligned, and step by step, He
                <br />
                gently led us toward each other.
              </p>

              <p className="font-quattrocento text-[12px] text-[#37546B]">
                Somehow, God brought together two people who weren’t
                <br />
                even looking for love and turned them into best friends
                <br /> choosing to walk through life side by side. With
                laughter, a<br /> little spontaneity, and a whole lot of faith,
                we continue this
                <br />
                journey knowing our story didn’t happen by chance — it
                <br />
                was lovingly written by Him all along
              </p>
            </div>
          </div>

          {/* bagian foto */}
          <div className="relative w-[390px] min-w-[390px]">

            <Image
              src="/images/Hero/OrnamentLingkar.svg"
              alt="Bunga Mawar Kecil"
              width={184}
              height={184}
              className="absolute top-[0px] left-[57.82px]"
            />
            <Image
              src="/images/OurStory/CouplePas1.webp"
              alt="Foto 1"
              width={251}
              height={251}
              className="absolute top-[17px] left-[-19px] z-[5]"
            />

            <Image
              src="/images/OurStory/CouplePas2.webp"
              alt="Foto 2"
              width={225}
              height={225}
              className="absolute top-[-17px] right-[-17px] z-[3]"
            />

            <Image
              src="/images/OurStory/CouplePas3.webp"
              alt="Foto 3"
              width={230}
              height={230}
              className="absolute top-[125px] right-[53px] z-[4]"
            />

            {/* ORNAMENT */}
            <Image
              src="/images/OurStory/Kunci.svg"
              alt="Ornament"
              width={178}
              height={178}
              className="absolute top-[205px] right-[13px] z-[4]"
            />

            <Image
              src="/images/OurStory/Mawar.png"
              alt="Ornament"
              width={78}
              height={78}
              className="absolute top-[279px] left-[120px] z-[4]"
            />

            <Image
              src="/images/OurStory/BungaHijau.svg"
              alt="Ornament"
              width={45}
              height={45}
              className="absolute top-[308px] left-[165px] z-[4]"
            />

            <Image
              src="/images/OurStory/Ranting.webp"
              alt="Ornament"
              width={111}
              height={111}
              className="absolute top-[206px] left-[95px]"
            />

            <Image
              src="/images/OurStory/MawarBiruKanan.svg"
              alt="Ornament"
              width={120}
              height={120}
              className="absolute top-[95px] right-[2px] z-[4]"
            />

            <Image
              src="/images/OurStory/MawarBiruTengahAtas.svg"
              alt="Ornament"
              width={154}
              height={154}
              className="absolute top-[10px] right-[118px] z-[6]"
            />

            {/* spacer sesuai tinggi area foto */}
            <div className="h-[350px]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
