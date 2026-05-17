"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeUp, fadeLeft, fadeRight } from "@/lib/animation";

type Gift = {
  bank: string;
  number: string;
  name: string;
};

const gifts: Gift[] = [
  {
    bank: "BCA",
    number: "7773222110",
    name: "A/n Petra Destiny Hartanto",
  },
];

const Gift = () => {
  const [copied, setCopied] = useState<number | null>(null);

  const handleCopy = (number: string, index: number): void => {
    navigator.clipboard.writeText(number);
    setCopied(index);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <section
      id="gift"
      className="relative w-full flex items-start justify-center  bg-[#F7F4EF]"
    >
      {/* Konten */}
      <div className="relative z-10 flex flex-col items-center text-center pb-[39px] lg:pb-[40px]">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 1.8, ease: "easeOut" }}
          style={{ willChange: "transform" }}
        >
          <h2 className="uppercase font-newscript text-[24px] lg:text-[46px] text-[#37546B] tracking-wide">
            W<span className="font-newserif">EDDING GIFT</span>
          </h2>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 1.8, ease: "easeOut" }}
          style={{ willChange: "transform" }}
        >
          <p className="text-[12px] lg:text-[18px] font-quattrocento text-[#37546B] mt-[35px] lg:mt-[43px] tracking-wide leading-relaxed">
            Your presence and prayers
            <br />
            are the greatest blessing to us.
            <br />
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
          <p className="text-[12px] lg:text-[18px] font-quattrocento text-[#37546B] tracking-wide mt-[12px] lg:mt-[18px] leading-relaxed">
            Should you wish to honor us with a gift,
            <br />
            please find the details below
            <br />
            for your convenience.
            <br />
          </p>
        </motion.div>

        {/* List rekening */}
        <div className="w-full max-w-[224px] lg:max-w-[368px] flex flex-col gap-6 mt-[35px] lg:mt-[45px]">
          {gifts.map((gift, index) => (
            <div key={index} className="w-full">
              {/* Info bank */}
              <div className="flex items-center justify-between">
                <div className="text-left">
                  <motion.div
                    variants={fadeRight}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.45 }}
                    transition={{ duration: 1.6, ease: "easeOut" }}
                    style={{ willChange: "transform" }}
                  >
                    <p className="text-[12px] lg:text-[16px] font-quattrocento text-[#37546B]">
                      {gift.bank}
                    </p>
                  </motion.div>

                  <motion.div
                    variants={fadeRight}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.45 }}
                    transition={{ duration: 1.7, ease: "easeOut" }}
                    style={{ willChange: "transform" }}
                  >
                    <p className="text-[12px] lg:text-[16px] font-quattrocento text-[#37546B]">
                      {gift.number}
                    </p>
                  </motion.div>

                  <motion.div
                    variants={fadeRight}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.45 }}
                    transition={{ duration: 1.8, ease: "easeOut" }}
                    style={{ willChange: "transform" }}
                  >
                    <p className="text-[12px] lg:text-[16px] font-quattrocento text-[#37546B]">
                      {gift.name}
                    </p>
                  </motion.div>
                </div>

                {/* Tombol COPY */}
                <motion.div
                  variants={fadeLeft}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.45 }}
                  transition={{ duration: 1.8, ease: "easeOut" }}
                  style={{ willChange: "transform" }}
                >
                  <button
                    onClick={() => handleCopy(gift.number, index)}
                    className="text-[10px] lg:text-[16px] font-quattrocento text-[#37546B] tracking-widest pb-[0.5px] border-b border-[#37546B] transition-opacity hover:opacity-70"
                  >
                    {copied === index ? "COPIED!" : "COPY"}
                  </button>
                </motion.div>
              </div>
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.45 }}
                transition={{ duration: 1.8, ease: "easeOut" }}
                style={{ willChange: "transform" }}
              >
                {/* Garis bawah */}
                <div className="mt-3 border-b border-[#37546B]/80" />
              </motion.div>
            </div>
          ))}
        </div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 1.8, ease: "easeOut" }}
          style={{ willChange: "transform" }}
          className=" mt-[107px] lg:mt-[99px]"
        >
          <a
            href="#hero"
            className="font-quattrocento underline text-[12px] lg:text-[18px] text-[#37546B]"
          >
            Return to envelope
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Gift;
