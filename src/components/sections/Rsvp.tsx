"use client";

import React, { useState } from "react";
import Image from "next/image";
import NotifModal from "@/components/popup/NotifModal";
import { motion } from "framer-motion";
import { fadeUp, fadeLeft, fadeRight } from "@/lib/animation";

type Pilihan = "hadir" | "tidak_hadir" | null;
type ModalType = string | null;

const Rsvp = () => {
  const [pilihan, setPilihan] = useState<Pilihan>(null);
  const [modalType, setModalType] = useState<ModalType>(null);

  const handleConfirm = (): void => {
    if (!pilihan) {
      setModalType("incomplete_rsvp");
      return;
    }
    setModalType("confirm_rsvp");
  };

  const handleFinalConfirm = (): void => {
    setModalType(null);
    if (pilihan === "hadir") {
      setModalType("rsvp_confirmed_hadir");
    } else {
      setModalType("rsvp_confirmed_tidak_hadir");
    }
  };

  return (
    <>
      <section id="rsvp" className="bg-[#F7F4EF]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col items-center justify-center pt-[80px] lg:pt-[97px] pb-[118px] lg:pb-[175px]">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 1.8, ease: "easeOut" }}
              style={{ willChange: "transform" }}
            >
              <h2 className="uppercase font-newscript text-[24px] lg:text-[46px] text-[#37546B] tracking-wide">
                R<span className="font-newserif">SVP</span>
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
              <p className="font-quattrocento text-[12px] lg:text-[18px] text-[#37546B] mt-[38px] lg:mt-[57px]">
                Dear Mr. /Mrs. / Ms.
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
              <p className="font-quattrocento text-[12px] lg:text-[18px] text-[#37546B] mt-[26px] lg:mt-[48px]">
                Sela
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
              <p className="font-quattrocento text-[12px] lg:text-[18px] text-[#37546B] text-center mt-[24px] lg:mt-[48px]">
                Kindly confirm your attendance before
                <span className="block font-bold">16 May 2026</span>
              </p>
            </motion.div>

            {/* BUTTON ATTEND / UNABLE TO ATTEND */}
            <div className="flex items-center justify-center gap-[19px] mt-[31px] lg:mt-[47px]">
              <motion.div
                variants={fadeRight}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.45 }}
                transition={{ duration: 1.8, ease: "easeOut" }}
                style={{ willChange: "transform" }}
              >
                <button
                  onClick={() =>
                    setPilihan(pilihan === "hadir" ? null : "hadir")
                  }
                  className={`w-[146px] h-[33px] lg:w-[172px] lg:h-[40px] uppercase rounded-full font-quattrocento text-[12px] lg:text-[18px] border border-[#37546B] transition-all
                  ${
                    pilihan === "hadir"
                      ? "bg-[#37546B] text-[#DADAD9]"
                      : "bg-transparent text-[#37546B]"
                  }`}
                >
                  ATTEND
                </button>
              </motion.div>

              <motion.div
                variants={fadeLeft}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.45 }}
                transition={{ duration: 1.8, ease: "easeOut" }}
                style={{ willChange: "transform" }}
              >
                <button
                  onClick={() =>
                    setPilihan(pilihan === "tidak_hadir" ? null : "tidak_hadir")
                  }
                  className={`w-[146px] h-[33px] lg:w-[172px] lg:h-[40px] uppercase rounded-full font-quattrocento text-[12px] lg:text-[18px] border border-[#37546B] transition-all
                  ${
                    pilihan === "tidak_hadir"
                      ? "bg-[#37546B] text-[#DADAD9]"
                      : "bg-transparent text-[#37546B]"
                  }`}
                >
                  NOT ATTEND
                </button>
              </motion.div>
            </div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 1.8, ease: "easeOut" }}
              style={{ willChange: "transform" }}
            >
              <p className="font-quattrocento text-[12px] lg:text-[18px] text-[#37546B] mt-[41px] lg:mt-[42px]">
                {pilihan === "tidak_hadir"
                  ? "ARE YOU SURE?"
                  : "Confirm your selection?"}
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
              <button
                onClick={handleConfirm}
                className="uppercase w-[222px] h-[33px] lg:w-[368px] lg:h-[40px] bg-[#37546B] hover:bg-[#2E4559] active:bg-[#243545] transition-colors duration-200 font-quattrocento text-[12px] lg:text-[18px] text-white rounded-full mt-[32px] lg:mt-[42px]"
              >
                {pilihan === "hadir"
                  ? "CONFIRM ATTEND"
                  : pilihan === "tidak_hadir"
                    ? "CONFIRM NOT ATTEND"
                    : "CONFIRM"}
              </button>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 1.8, ease: "easeOut" }}
              style={{ willChange: "transform" }}
            >
              <p className="font-quattrocento text-[12px] lg:text-[18px] text-[#37546B] mt-[58px] lg:mt-[81px]">
                Having trouble with RSVP?
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
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="h-[33px] w-[160px] lg:w-[212px] lg:h-[40px] bg-[#12877B] hover:bg-[#0F6B61] active:bg-[#0A4F47] transition-colors duration-200 text-white flex items-center justify-center font-quattrocento text-[12px] lg:text-[18px] rounded-full gap-[6px] mt-[23px] lg:mt-[44px]"
              >
                <Image
                  src="/images/Rsvp/LogoWa.svg"
                  alt="Logo Wa"
                  width={18}
                  height={18}
                  className="object-contain"
                />
                CHAT SUPPORT
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {modalType && (
        <NotifModal
          type={modalType}
          onClose={() => setModalType(null)}
          onConfirm={handleFinalConfirm}
          waNumber="6281234567890"
        />
      )}
    </>
  );
};

export default Rsvp;