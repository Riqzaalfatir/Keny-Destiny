import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp, fadeIn, stagger } from "@/lib/animation"

const OurStory = () => {
  return (
    <section id="story" className="bg-[#F7F4EF] z-20">
      <div className="max-w-7xl mx-auto px-2 overflow-x-hidden">
        <div className="flex flex-col items-center justify-center pt-[84px] pb-[86px] lg:pt-[105px] lg:pb-[73px] gap-[66px] lg:gap-[60px]">
          <div className="text-center">

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 1.8, ease: "easeOut" }}
              style={{ willChange: "transform" }}
            >
              <h1 className="font-newserif text-[24px] lg:text-[46px] text-[#37546B] tracking-wide leading-none">
                OUR
                <br />
                <span className="font-newscript">L</span>OVE STORY
              </h1>
            </motion.div>


            <div className="mt-[35px] lg:mt-[59px] flex flex-col items-center justify-center gap-[20px] lg:gap-[45px]">

               <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 1.8, ease: "easeOut" }}
              style={{ willChange: "transform" }}
            >
              <p className="font-quattrocento text-[12px] lg:text-[18px] text-[#37546B] leading-[20px] lg:leading-[32px]">
                They say love finds you when you least expect it — and for{" "}
                <br className="block lg:hidden" />
                us, it began <br className="hidden lg:block" />
                somewhere between coffee conversations{" "}
                <br className="block lg:hidden" />
                and rounds of golf. What <br className="hidden lg:block" />
                started as easy laughter and <br className="block lg:hidden" />
                simple moments slowly became <br className="hidden lg:block" />
                something neither of us <br className="block lg:hidden" />
                planned for. Before we knew it, casual chats{" "}
                <br className="hidden lg:block" />
                turned into <br className="block lg:hidden" />
                long video calls across thousands of miles, where time{" "}
                <br className="block" />
                zones no longer mattered and goodbyes were never quite{" "}
                <br className="block lg:hidden" />
                easy.
              </p>
                          </motion.div>

                 <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 1.8, ease: "easeOut" }}
              style={{ willChange: "transform" }}
            >
              <p className="font-quattrocento text-[12px] lg:text-[18px] text-[#37546B] leading-[20px] lg:leading-[32px]">
                As our friendship grew, it revealed something deeper —{" "}
                <br className="block lg:hidden" />
                shared <br className="hidden lg:block" />
                values, shared prayers, and dreams that seemed to{" "}
                <br className="block lg:hidden" />
                fit effortlessly <br className="hidden lg:block" />
                together. Even though our time in the same{" "}
                <br className="block lg:hidden" />
                place felt brief, there was <br className="hidden lg:block" />
                a quiet peace we couldn’t ignore.{" "}
                <br className="block lg:hidden" />
                From the very beginning, we sensed{" "}
                <br className="hidden lg:block" />
                that God was writing <br className="block lg:hidden" />
                a story far greater than anything we could have{" "}
                <br className="hidden lg:block" />
                planned. <br className="block lg:hidden" />
                Doors opened, timelines aligned, and step by step, He{" "}
                <br className="block lg:hidden" />
                gently <br className="hidden lg:block" />
                led us toward each other.
              </p>
              </motion.div>

               <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 1.8, ease: "easeOut" }}
              style={{ willChange: "transform" }}
            >
              <p className="font-quattrocento text-[12px] lg:text-[18px] text-[#37546B] leading-[20px] lg:leading-[32px]">
                Somehow, God brought together two people who weren’t{" "}
                <br className="block lg:hidden" />
                even <br className="hidden lg:block" />
                looking for love and turned them into best friends{" "}
                <br className="block lg:hidden" />
                choosing to walk <br className="hidden lg:block" />
                through life side by side. With laughter, a{" "}
                <br className="block lg:hidden" />
                little spontaneity, and a <br className="hidden lg:block" />
                whole lot of faith, we continue this{" "}
                <br className="block lg:hidden" />
                journey knowing our story didn’t{" "}
                <br className="hidden lg:block" />
                happen by chance — it <br className="block lg:hidden" />
                was lovingly written by Him all along.
              </p>
              </motion.div>
            </div>
          </div>

          
<motion.div
  variants={stagger}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true, amount: 0.05 }}
  className="relative w-[390px] min-w-[390px] lg:w-[690px] lg:min-w-[690px]"
>
  <motion.div variants={fadeIn} transition={{ duration: 1, ease: "easeIn" }} className="absolute top-[0px] left-[57.82px] w-[184px] lg:top-[7px] lg:left-[146px] lg:w-[266px]">
    <Image src="/images/Hero/OrnamentLingkar.svg" alt="Bunga Mawar Kecil" width={266} height={266} className="w-full" />
  </motion.div>

  <motion.div variants={fadeIn} transition={{ duration: 1.2, ease: "easeIn" }} className="absolute top-[17px] left-[-19px] lg:top-[32px] lg:left-[35px] z-[5] w-[251px] lg:w-[364px]">
    <Image src="/images/OurStory/CouplePas1.webp" alt="Foto 1" width={364} height={364} className="w-full" />
  </motion.div>

  <motion.div variants={fadeIn} transition={{ duration: 1.2, ease: "easeIn" }} className="absolute top-[-17px] right-[-17px] lg:top-[-17px] lg:right-[36px] z-[3] w-[225px] lg:w-[326px]">
    <Image src="/images/OurStory/CouplePas2.webp" alt="Foto 2" width={326} height={326} className="w-full" />
  </motion.div>

  <motion.div variants={fadeIn} transition={{ duration: 1.2, ease: "easeIn" }} className="absolute top-[125px] right-[53px] lg:top-[188px] lg:right-[137px] z-[4] w-[230px] lg:w-[334px]">
    <Image src="/images/OurStory/CouplePas3.webp" alt="Foto 3" width={334} height={334} className="w-full" />
  </motion.div>

  <motion.div variants={fadeIn} transition={{ duration: 1, ease: "easeIn" }} className="absolute top-[205px] right-[13px] lg:top-[306px] lg:right-[79px] z-[4] w-[178px] lg:w-[258px]">
    <Image src="/images/OurStory/Kunci.svg" alt="Ornament" width={258} height={258} className="w-full" />
  </motion.div>

  <motion.div variants={fadeIn} transition={{ duration: 1, ease: "easeIn" }} className="absolute top-[279px] left-[120px] lg:top-[410px] lg:left-[235px] z-[4] w-[78px] lg:w-[114px]">
    <Image src="/images/OurStory/Mawar.png" alt="Ornament" width={114} height={114} className="w-full" />
  </motion.div>

  <motion.div variants={fadeIn} transition={{ duration: 1, ease: "easeIn" }} className="absolute top-[308px] left-[165px] lg:top-[455px] lg:left-[301px] z-[4] w-[45px] lg:w-[66px]">
    <Image src="/images/OurStory/BungaHijau.svg" alt="Ornament" width={66} height={66} className="w-full" />
  </motion.div>

  <motion.div variants={fadeIn} transition={{ duration: 1, ease: "easeIn" }} className="absolute top-[206px] left-[98px] lg:top-[307px] lg:left-[198px] w-[111px] lg:w-[161px]">
    <Image src="/images/OurStory/Ranting.webp" alt="Ornament" width={161} height={161} className="w-full" />
  </motion.div>

  <motion.div variants={fadeIn} transition={{ duration: 1, ease: "easeIn" }} className="absolute top-[95px] right-[2px] lg:top-[135px] lg:right-[53px] z-[4] w-[127px] lg:w-[184px]">
    <Image src="/images/OurStory/MawarBiruKanan.svg" alt="Ornament" width={184} height={184} className="w-full" />
  </motion.div>

  <motion.div variants={fadeIn} transition={{ duration: 1, ease: "easeIn" }} className="absolute top-[10px] right-[118px] lg:top-[23px] lg:right-[232px] z-[6] w-[154px] lg:w-[224px]">
    <Image src="/images/OurStory/MawarBiruTengahAtas.svg" alt="Ornament" width={224} height={224} className="w-full" />
  </motion.div>

  <div className="h-[350px] lg:h-[570px]" />
</motion.div>



        </div>
      </div>
    </section>
  );
};

export default OurStory;
