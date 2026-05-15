"use client";

import { dummyPesan } from "@/components/data/wishes";
import { useState, useEffect } from "react";
import Image from "next/image";
import WishesCard from "@/components/popup/WishesCard";
import NotifModal from "@/components/popup/NotifModal";
import { motion } from "framer-motion";
import { fadeUp, fadeIn, stagger } from "@/lib/animation";

type PesanItem = {
  id: number;
  nama: string;
  pesan: string;
};

type ModalType = string | null; 

const Wishes = () => {
  const [nama, setNama] = useState<string>("");
  const [pesan, setPesan] = useState<string>("");
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const [showAll, setShowAll] = useState<boolean>(false);
  const [selectedMessage, setSelectedMessage] = useState<PesanItem | null>(
    null,
  );
  const [pesanList, setPesanList] = useState<PesanItem[]>(dummyPesan);
  const [modalType, setModalType] = useState<ModalType>(null); // ← tambah

  const handleSubmit = (): void => {
    if (!nama || !pesan) {
      setModalType("incomplete_wishes"); 
      return;
    }

    const newPesan: PesanItem = {
      id: Date.now(),
      nama,
      pesan,
    };

    setPesanList((prev) => [newPesan, ...prev]);
    setShowPopup(true);
    setNama("");
    setPesan("");
  };

  useEffect(() => {
    const saved = localStorage.getItem("pesan");
    if (saved) {
      setPesanList(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("pesan", JSON.stringify(pesanList));
  }, [pesanList]);

  return (
    <>
      <section className="relative w-full flex flex-col items-center px-8 bg-[#F7F4EF] pt-[61px] lg:pt-[100px] pb-[87px] lg:pb-[132px]">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 1.8, ease: "easeOut" }}
          style={{ willChange: "transform" }}
        >
          <h2 className="uppercase font-newscript text-[24px] lg:text-[46px] text-[#37546B] tracking-wide">
            Y<span className="font-newserif">OUR WISHES</span>
          </h2>
        </motion.div>

        <div className="max-w-[284px] lg:max-w-[564px] mx-auto">
          <div className="flex flex-col items-center">
            <div className="w-full flex flex-col gap-[20px] mt-[40px]">
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 1.8, ease: "easeOut" }}
                style={{ willChange: "transform" }}
              >
                <input
                  type="text"
                  value={nama}
                  placeholder="Desy (Tester)"
                  onChange={(e) => setNama(e.target.value)}
                  className="w-full text-[#37546B] font-quattrocento border-[1px] text-[12px] lg:text-[18px]  bg-transparent border-[#37546B]/50 px-[13px] lg:px-[23px] h-[33px] lg:h-[40px] rounded-full outline-none placeholder:text-[#37546B]/50"
                />
              </motion.div>

              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 1.8, ease: "easeOut" }}
                style={{ willChange: "transform" }}
              >
                <textarea
                  value={pesan}
                  onChange={(e) => setPesan(e.target.value)}
                  className="w-full text-[#37546B] font-quattrocento border-[1px] text-[12px] lg:text-[18px] bg-transparent border-[#37546B]/50 px-[13px] lg:px-[23px] h-[60px] lg:h-[261px] rounded-xl outline-none placeholder:text-[#37546B]/50 resize-none"
                />
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
                  onClick={handleSubmit}
                  className="bg-[#37546B] hover:bg-[#2E4559] w-full active:bg-[#243545] transition-colors duration-200 rounded-full h-[33px] lg:h-[40px] text-[12px] lg:text-[18px] font-quattrocento uppercase flex items-center justify-center gap-1.5 lg:gap-2 text-[#DADAD9]"
                >
                  <Image
                    src="/images/Wishes/Panah.svg"
                    alt="Kirim"
                    width={24}
                    height={30}
                    className="object-cover w-[15px] h-[19px] lg:w-[24px]"
                  />
                  Send
                </button>
              </motion.div>

              
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 1.8, ease: "easeOut" }}
                style={{ willChange: "transform" }}
              >
                <div
                  className={`w-full rounded-2xl h-[329px] lg:h-[526px] overflow-y-auto scrollbar-hide mt-[15px] ${
                    showAll ? "bg-transparent rounded-none" : "bg-[#37546B]"
                  }`}
                >
                  {!showAll ? (
                    <div>
                      <div className="sticky top-0 w-full h-[18px] bg-[#37546B] z-10" />
                      <div className="px-[13px] lg:px-[23px] py-[2px]">
                        {pesanList.slice(0, 8).map((item, index, array) => (
                          <div key={item.id}>
                            <p className="text-[#DADAD9] font-quattrocento text-[12px] lg:text-[18px] font-bold mb-[4px] lg:mb-[12px]">
                              {item.nama}
                            </p>
                            <p className="text-[#DADAD9] font-quattrocento text-[12px] lg:text-[18px] tracking-[0.5px] mb-[10px]">
                              {item.pesan}
                            </p>
                            {index !== array.length - 1 && (
                              <div className="border-t border-[#DADAD9] mt-[8px] mb-[15px]" />
                            )}
                          </div>
                        ))}
                      </div>
                      <div className="sticky bottom-0 w-full h-[18px] bg-[#37546B] z-10" />
                    </div>
                ) : (
  <motion.div
    variants={stagger}
    initial="hidden"
    animate="show"
      transition={{ staggerChildren: 2.6 }}

    className="w-full"
  >
    <div className="grid grid-cols-2 gap-[2vw] lg:gap-[1.5vw]">
      {pesanList.map((item) => (
        <motion.div
          key={item.id}
          variants={fadeIn}
          transition={{ duration: 1.3, ease: "easeOut" }}
          onClick={() => setSelectedMessage(item)}
          className="rounded-md overflow-hidden shadow-md bg-[#F4F8F5] flex flex-col cursor-pointer"
        >
          <div className="p-[10px] relative flex-1 flex flex-col justify-center">
            <p className="absolute top-[8px] left-[10px] text-[22px] font-bold font-quattrocento text-[#37546B]">
              "
            </p>
            <p className="font-quattrocento text-[12px] lg:text-[18px] text-[#37546B] text-center mt-6 mb-2 line-clamp-4">
              {item.pesan}
            </p>
          </div>
          <div className="bg-[#37546B] h-[35px] flex items-center justify-center px-6">
            <p className="text-white text-center line-clamp-1 text-[13px] lg:text-[19px] font-quattrocento">
              {item.nama}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  </motion.div>
)}
                </div>
              </motion.div>

              <WishesCard
                data={selectedMessage}
                onClose={() => setSelectedMessage(null)}
              />

              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 1.8, ease: "easeOut" }}
                style={{ willChange: "transform" }}
              >
                <button
                  onClick={() => setShowAll(!showAll)}
                  className="bg-[#37546B] w-full hover:bg-[#2E4559] active:bg-[#243545] transition-colors duration-200 rounded-full h-[33px] lg:h-[40px] text-[12px] font-quattrocento lg:text-[18px] uppercase flex items-center justify-center gap-1.5 lg:gap-2 text-[#DADAD9]"
                >
                  <Image
                    src="/images/Wishes/Pesan.svg"
                    alt="Pesan"
                    width={20}
                    height={25}
                    className="object-cover w-[15px] h-[19px] lg:w-[20px]"
                  />
                  {showAll ? "BACK" : "VIEW ALL MESSAGES"}
                </button>
              </motion.div>
            </div>
          </div>
        </div>

        {/* POPUP KETIKA PESAN DIKIRIM */}
        {showPopup && (
          <div className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-50">
            <div className="bg-[#F5F2EC] rounded-2xl p-6 w-[340px] text-center shadow-xl border border-[#37546B]/20">
              <h3 className="text-[22px] font-quattrocento font-semibold text-[#37546B] mb-3 tracking-wide">
                Pesan Terkirim!
              </h3>
              <div className="w-10 h-[2px] bg-[#37546B] mx-auto mb-4 opacity-60" />
              <p className="text-[16px] text-[#37546B] font-quattrocento leading-relaxed mb-6">
                Terima kasih atas doa dan ucapan baik Anda. Kami sangat
                menghargai pesan yang telah diberikan.
              </p>
              <button
                onClick={() => setShowPopup(false)}
                className="bg-[#37546B] hover:bg-[#2E4559] transition-all text-white px-6 py-2 rounded-full text-[14px] tracking-wide font-quattrocento"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </section>

      {/* NOTIF MODAL — untuk incomplete_wishes */}
      {modalType && (
        <NotifModal
          type={modalType}
          onClose={() => setModalType(null)}
          onConfirm={() => setModalType(null)}
          waNumber="6281234567890"
        />
      )}
    </>
  );
};

export default Wishes;
