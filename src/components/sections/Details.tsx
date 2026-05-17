import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animation";

const Details = () => {
  return (
    <section id="details" className="bg-[#F7F4EF]">
      <div className="max-w-7xl mx-auto px-2">
        <div className="flex flex-col items-center justify-center gap-[71.5px] lg:gap-0 pt-[86px] lg:pt-[98px] pb-[39px] lg:pb-[40px]">

          <div className="flex flex-col items-center justify-center text-center gap-[33px] lg:gap-[59px]">

            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }} transition={{ duration: 1.8, ease: "easeOut" }}   style={{ willChange: "transform" }}  
>
              <h2 className="uppercase font-newserif text-[24px] lg:text-[46px] text-[#37546B] leading-none">
                THE FINER
                <br />
                <span className="font-newscript ml-[30px] lg:ml-[75px]">D</span>
                etails
              </h2>
            </motion.div>

            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }} transition={{ duration: 1.8, ease: "easeOut" }}   style={{ willChange: "transform" }}  
>
              <p className="font-quattrocento text-[12px] lg:text-[18px] text-[#37546B] leading-[20px] lg:leading-[38px]">
                Our hearts are full as we get ready to celebrate with you!
                <br />
                Here are all the details to help you enjoy every moment of <br className="block lg:hidden" />
                our wedding
              </p>
            </motion.div>

          </div>


          <div className="flex flex-col items-center justify-center text-center gap-[8px] lg:gap-[7px] lg:mt-[58px]">

            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }} transition={{ duration: 1.8, ease: "easeOut" }}   style={{ willChange: "transform" }} 
>
              <h3 className="uppercase font-quattrocento font-bold text-[14px] lg:text-[20px] text-[#37546B]">
                RECEPTION
              </h3>
            </motion.div>

            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }} transition={{ duration: 1.8, ease: "easeOut" }}   style={{ willChange: "transform" }}  
>
              <p className="font-quattrocento text-[12px] lg:text-[18px] text-[#37546B] leading-[20px] lg:leading-[38px]">
                Our celebration will begin at 6:00 PM at The House <br className="block lg:hidden" />
                Convention Hall. <br className="hidden lg:block" />
                We kindly ask guests to arrive by 5:30 PM <br className="block lg:hidden" />
                to be seated and settled <br className="hidden lg:block" />
                before we begin.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }} transition={{ duration: 1.8, ease: "easeOut" }}   style={{ willChange: "transform" }}  
>
              <p className="font-quattrocento text-[12px] lg:text-[18px] text-[#37546B] mt-3 lg:mt-9 leading-[20px] lg:leading-[38px]">
                We'll gather for dinner, drinks, and dancing as we toast to <br className="block lg:hidden" />
                love, <br className="hidden lg:block" />
                laughter, and our new beginning together.
              </p>
            </motion.div>

          </div>


          <div className="flex flex-col items-center justify-center text-center lg:mt-[65px]">

            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }} transition={{ duration: 1.8, ease: "easeOut" }}   style={{ willChange: "transform" }}  
>
              <h3 className="uppercase font-quattrocento font-bold text-[14px] lg:text-[20px] text-[#37546B]">
                DRESS CODE
              </h3>
            </motion.div>

            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }} transition={{ duration: 1.8, ease: "easeOut" }}   style={{ willChange: "transform" }}  
>
              <p className="font-quattrocento text-[12px] lg:text-[18px] text-[#37546B] mt-[9px] lg:mt-[7px] leading-[20px] lg:leading-[38px]">
                We kindly invite our guests to dress in formal attire and <br className="block lg:hidden" />
                avoid <br className="hidden lg:block" />
                wearing white. To help bring our vision to life, we'd <br className="block lg:hidden" />
                love for you to <br className="hidden lg:block" />
                choose outfits inspired by our color palette.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }} transition={{ duration: 1.8, ease: "easeOut" }}   style={{ willChange: "transform" }}  
>
              <Image
                src="/images/Details/Warna.svg"
                alt="Bunga Mawar Kecil"
                width={272}
                height={80}
                className="mt-[45px] lg:mt-[38px] w-[136px] lg:w-[272px]"
              />
            </motion.div>

            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }} transition={{ duration: 1.8, ease: "easeOut" }}   style={{ willChange: "transform" }} className="mt-[108px] lg:mt-[100px]"  
>
              <a
                href="#hero"
                className="font-quattrocento underline text-[12px] lg:text-[18px] text-[#37546B] mt-[108px] lg:mt-[100px]"
              >
                Return to envelope
              </a>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Details;