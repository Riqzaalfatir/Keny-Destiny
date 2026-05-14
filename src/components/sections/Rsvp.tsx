"use client";

import React, { useState } from "react";
import Image from "next/image";
import NotifModal from "@/components/popup/NotifModal";

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
          <div className="flex flex-col items-center justify-center pt-[80px] pb-[118px]">
            <h2 className="uppercase font-newscript text-[24px] text-[#37546B] tracking-wide">
              R<span className="font-newserif">SVP</span>
            </h2>
            <p className="font-quattrocento text-[12px] text-[#37546B] mt-[38px]">
              Dear Mr. /Mrs. / Ms.
            </p>
            <p className="font-quattrocento text-[12px] text-[#37546B] mt-[26px]">
              Sela
            </p>
            <p className="font-quattrocento text-[12px] text-[#37546B] text-center mt-[24px]">
              Kindly confirm your attendance before
              <br />
              16 May 2026
            </p>

            {/* BUTTON ATTEND / UNABLE TO ATTEND */}
            <div className="flex items-center justify-center gap-[19px] mt-[31px]">
              <button
                onClick={() => setPilihan(pilihan === "hadir" ? null : "hadir")}
                className={`w-[146px] h-[33px] uppercase rounded-full font-quattrocento text-[12px] border border-[#37546B] transition-all
                  ${pilihan === "hadir" 
                    ? "bg-[#37546B] text-[#DADAD9]"
                    : "bg-transparent text-[#37546B]"
                  }`}
              >
                ATTEND
              </button>
              <button
              onClick={() => setPilihan(pilihan === "tidak_hadir" ? null : "tidak_hadir")}
                className={`w-[146px] h-[33px] uppercase rounded-full font-quattrocento text-[12px] border border-[#37546B] transition-all
                  ${pilihan === "tidak_hadir"
                    ? "bg-[#37546B] text-[#DADAD9]"
                    : "bg-transparent text-[#37546B]"
                  }`}
              >
                UNABLE TO ATTEND
              </button>
            </div>

            <p className="font-quattrocento text-[12px] text-[#37546B] mt-[41px]">
              Confirm your selection?
            </p>

            {/* BUTTON CONFIRM */}
            <button
              onClick={handleConfirm}
              className="uppercase w-[222px] h-[33px] bg-[#37546B] hover:bg-[#2E4559] active:bg-[#243545] transition-colors duration-200 font-quattrocento text-[12px] text-white rounded-full mt-[32px]"
            >
              {pilihan === "hadir"
                ? "CONFIRM ATTEND"
                : pilihan === "tidak_hadir"
                  ? "CONFIRM NOT ATTEND"
                  : "CONFIRM"}
            </button>

            <p className="font-quattrocento text-[12px] text-[#37546B] mt-[58px]">
              Having trouble with RSVP?
            </p>
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="h-[33px] w-[160px] bg-[#12877B] hover:bg-[#0F6B61] active:bg-[#0A4F47] transition-colors duration-200 text-white flex items-center justify-center font-quattrocento text-[12px] rounded-full gap-[6px] mt-[23px]"
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
          </div>
        </div>
      </section>

      {/* MODAL */}
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
  // "use client"

  // import React, { useState } from "react";
  // import Image from "next/image";
  // import NotifModal from "../popup/NotifModal";

  // type Pilihan = "hadir" | "tidak_hadir" | null
  // type ModalType = string | null

  // const Rsvp = () => {
  //   const [pilihan, setPilihan] = useState<Pilihan>(null)
  //   const [modalType, setModalType] = useState<ModalType>(null)

  //   const handleConfirm = (): void => {
  //     if (!pilihan) {
  //       setModalType("incomplete_rsvp");
  //       return;
  //     }
  //     setModalType("confirm_rsvp")
  //   }

  //   const handleFinalConfirm = (): void => {
  //   setModalType(null);
  //   if (pilihan === "hadir") {
  //     setModalType("rsvp_confirmed_hadir");
  //   } else {
  //     setModalType("rsvp_confirmed_tidak_hadir");
  //   }
  // };

  //   return (
  //     <>
  //     <section className="bg-[#F7F4EF]">
  //       <div className="max-w-7xl mx-auto px-4">
  //         <div className="flex flex-col items-center justify-center pt-[80px] pb-[118px]">
  //           <h2 className="uppercase font-newscript text-[24px] text-[#37546B] tracking-wide">
  //             R<span className="font-newserif">SVP</span>
  //           </h2>
  //           <p className="font-quattrocento text-[12px] text-[#37546B] mt-[38px]">
  //             Dear Mr. /Mrs. / Ms.
  //           </p>
  //           <p className="font-quattrocento text-[12px] text-[#37546B] mt-[26px]">Sela</p>
  //           <p className="font-quattrocento text-[12px] text-[#37546B] text-center mt-[24px]">
  //             Kindly confirm your attendance before
  //             <br />
  //             16 May 2026
  //           </p>

  //           <div className="flex items-center justify-center gap-[19px] mt-[31px]">

  //             <button 
  //               onClick={() => setPilihan("hadir")}
  //               className={`w-[146px] h-[33px] uppercase rounded-full font-quattrocento text-[12px] ${
  //                 pilihan === "hadir" || pilihan === null
  //                 ? "bg-[#37546B] text-[#DADAD9]"
  //                 : "bg-transparent text-[#37546B]"
  //               }`}>
  //               ATTEND
  //             </button>

  //             <button 
  //                 onClick={() => setPilihan("tidak_hadir")}

  //             className={`w-[146px] h-[33px] uppercase bg-transparent border rounded-full font-quattrocento text-[12px] ${
  //               pilihan === "tidak_hadir"
  //               ? "bg-[#37546B] text-[#DADAD9]"
  //               : "bg-transparent text-[#37546B]"
  //             }`}>
  //               UNABLE TO ATTEND
  //             </button>

  //           </div>
  //           <p className="font-quattrocento text-[12px] text-[#37546B] mt-[41px]">
  //             Confirm your selection?
  //           </p>

  //           <button 
  //           onClick={handleConfirm}
  //           className="uppercase w-[222px] h-[33px] bg-[#37546B] font-quattrocento text-[12px] text-white rounded-full mt-[32px]">
  //             {pilihan === "hadir" ? "CONFIRM ATTEND" : pilihan === "tidak_hadir" ? "CONFIRM NOT ATTEND" : "CONFIRM"}
  //           </button>

  //           <p className="font-quattrocento text-[12px] text-[#37546B] mt-[58px]">
  //             Having trouble with RSVP?
  //           </p>
  //           <a
  //             href="https://wa.me/6283121712571"
  //             target="_blank"
  //             rel="noopener noreferrer"
  //             className="h-[33px] w-[160px] bg-[#12877B] hover:bg-[#0F6B61] active:bg-[#0A4F47] transition-colors duration-200 text-white flex items-center justify-center font-quattrocento text-[12px] rounded-full gap-[6px] mt-[23px]"
  //           >
  //             <Image
  //               src="/images/Rsvp/LogoWa.svg"
  //               alt="Logo Wa"
  //               width={18}
  //               height={18}
  //               className="object-contain"
  //             />
  //             CHAT SUPPORT
  //           </a>
  //         </div>
  //       </div>
  //     </section>

  //     {modalType && (
  //       <NotifModal
  //         type={modalType}
  //         onClose={() => setModalType(null)}
  //         onConfirm={handleFinalConfirm}
  //         waNumber="6283121712571"
  //       />
  //     )}
  // </>
  //   );
  // };

  // export default Rsvp;
