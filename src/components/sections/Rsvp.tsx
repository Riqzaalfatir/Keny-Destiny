import React from "react";
import Image from "next/image";

const Rsvp = () => {
  return (
    <section className="bg-[#F7F4EF]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col items-center justify-center pt-[80px] pb-[118px]">
          <h2 className="uppercase font-newscript text-[24px] text-[#37546B] tracking-wide">
            R<span className="font-newserif">SVP</span>
          </h2>
          <p className="font-quattrocento text-[12px] text-[#37546B] mt-[38px]">
            Dear Mr. /Mrs. / Ms.
          </p>
          <p className="font-quattrocento text-[12px] text-[#37546B] mt-[26px]">Sela</p>
          <p className="font-quattrocento text-[12px] text-[#37546B] text-center mt-[24px]">
            Kindly confirm your attendance before
            <br />
            16 May 2026
          </p>
          <div className="flex items-center justify-center gap-[19px] mt-[31px]">
            <button className="w-[146px] h-[33px] uppercase bg-[#37546B] rounded-full font-quattrocento text-[12px] text-[#DADAD9]">
              ATTEND
            </button>
            <button className="w-[146px] h-[33px] uppercase bg-transparent border border-[#37546B] rounded-full font-quattrocento text-[12px] text-[#37546B]">
              ATTEND
            </button>
          </div>
          <p className="font-quattrocento text-[12px] text-[#37546B] mt-[41px]">
            Confirm your selection?
          </p>
          <button className="uppercase w-[222px] h-[33px] bg-[#37546B] font-quattrocento text-[12px] text-white rounded-full mt-[32px]">
            CONFIRM NOT ATTEND
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
  );
};

export default Rsvp;
