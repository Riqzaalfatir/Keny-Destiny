"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animation";

type Props = {
  setStart: (val: boolean) => void;
};

export default function Opening({ setStart }: Props) {
  return (
    <section className="fixed inset-0 z-[9998] flex items-center justify-center bg-[#F7F4EF] ">
      <div className="flex flex-col items-center justify-center text-center">
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="show"
          transition={{ duration: 1.8, ease: "easeIn", delay: 0.3 }}
        >
          <h2 className="font-quattrocento text-[14px] lg:text-[20px] text-[#37546B] uppercase">
            The Engagement of
          </h2>
        </motion.div>

        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="show"
          transition={{ duration: 1.8, ease: "easeInOut", delay: 0.2 }}
        >
          <h1 className="font-newscript text-[42px] lg:text-[46px] text-[#37546B] leading-none mt-[22px] lg:mt-[20px]">
            D
            <span className="font-newserif text-[36px] lg:text-[46px]">
              ESTINY
            </span>
            <span className="text-[18px] lg:text-[22px] ml-1">and</span>
            <br />
            <span className="ml-[59px] lg:ml-[75px]">
              K
              <span className="font-newserif text-[36px] lg:text-[46px] -ml-1">
                ENNY
              </span>
            </span>
          </h1>
        </motion.div>

        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="show"
          transition={{ duration: 1.8, ease: "easeInOut", delay: 0.2 }}
        >
          <p className="font-quattrocento text-[12px] lg:text-[18px] text-[#37546B] mt-[20px]">
            Dear Mr. /Mrs. / Ms.
          </p>
          <p className="font-quattrocento text-[16px] lg:text-[20px] text-[#37546B] mt-[21px] lg:mt-[14px]">
            Sela.
          </p>
        </motion.div>

        <div className="relative  w-[390px] min-w-[390px] h-[260px] lg:w-[580px] lg:min-w-[580px] -mt-[29px] lg:mt-[95px]">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate="show"
            transition={{ duration: 2.2, ease: "easeInOut", delay: 0.2 }}
          >
            <Image
              src="/images/Opening/Amplop.svg"
              alt="Amplop"
              width={411}
              height={411}
              priority
              className="absolute bottom-0 left-1/2 -translate-x-1/2 cursor-pointer w-[272px] lg:w-[411px]"
              onClick={() => setStart(true)}
            />
          </motion.div>

          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate="show"
            transition={{ duration: 2.2, ease: "easeInOut", delay: 0.8 }}
          >
            <Image
              src="/images/Opening/Emblem.svg"
              alt="Amplop"
              width={113}
              height={113}
              priority
              className="absolute bottom-14 lg:bottom-20 left-1/2 -translate-x-1/2 pointer-events-none w-[74px] lg:w-[113px]"
            />
          </motion.div>

          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate="show"
            transition={{ duration: 2, ease: "easeIn", delay: 0.4 }}
          >
            <Image
              src="/images/Opening/BUNGAKIRIHD.png"
              alt=""
              width={197}
              height={255}
              priority
              className="absolute -bottom-2 lg:-bottom-3 left-2 z-[3] w-[130px] lg:w-[197px]"
            />
          </motion.div>

          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate="show"
            transition={{ duration: 2, ease: "easeIn", delay: 0.4 }}
          >
            <Image
              src="/images/Opening/BUNGAKANANHD.png"
              alt=""
              width={225}
              height={275}
              priority
              className="absolute bottom-1 lg:-bottom-2 right-5 lg:right-[8px] z-[3] w-[144px] lg:w-[225px]"
            />
          </motion.div>
        </div>

      <motion.div
            variants={fadeIn}
            initial="hidden"
            animate="show"
            transition={{ duration: 2.2, ease: "easeIn", delay: 0.6 }}
            className="-mt-10 lg:-mt-[57px]"
          >
        <a
          onClick={() => setStart(true)}
          className="font-quattrocento text-[12px] lg:text-[18px] text-[#37546B]"
        >
          click the envelope to open
        </a>
      </motion.div>

      </div>
    </section>
  );
}
