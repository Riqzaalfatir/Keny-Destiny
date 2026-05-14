"use client";
import React, { useState } from "react";

type Gift = {
  bank: string;
  number: string;
  name: string;
};


const gifts: Gift[] = [  {

    bank: "BCA",
    number: "7773222110",
    name: "A/n Petra Destiny Hartanto",
  },
  // Tambah rekening lain
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
      <div className="relative z-10 flex flex-col items-center text-center pb-[39px]">
        <h2 className="uppercase font-newscript text-[24px] text-[#37546B] tracking-wide">
          W<span className="font-newserif">EDDING GIFT</span>
        </h2>

        <p className="text-[12px] font-quattrocento text-[#37546B] mt-[35px] tracking-wide leading-relaxed">
         Your presence and prayers<br />
         are the greatest blessing to us.<br />
        </p>

        <p className="text-[12px] font-quattrocento text-[#37546B] tracking-wide mt-[12px] leading-relaxed">
Should you wish to honor us with a gift,<br />
please find the details below<br />
for your convenience.<br />
        </p>

        {/* List rekening */}
        <div className="w-full max-w-[224px] flex flex-col gap-6 mt-[35px]">
          {gifts.map((gift, index) => (
            <div key={index} className="w-full">
              {/* Info bank */}
              <div className="flex items-center justify-between">
                <div className="text-left">
                  <p className="text-[12px] font-quattrocento text-[#37546B]">
                    {gift.bank}
                  </p>
                  <p className="text-[12px] font-quattrocento text-[#37546B]">
                    {gift.number}
                  </p>
                  <p className="text-[12px] font-quattrocento text-[#37546B]">
                    {gift.name}
                  </p>
                </div>

                {/* Tombol COPY */}
                <button
                  onClick={() => handleCopy(gift.number, index)}
                  className="text-[10px] font-quattrocento text-[#37546B] tracking-widest pb-[0.5px] border-b border-[#37546B] transition-opacity hover:opacity-70"
                >
                  {copied === index ? "COPIED!" : "COPY"}
                </button>
              </div>

              {/* Garis bawah */}
              <div className="mt-3 border-b border-[#37546B]/80" />
            </div>
          ))}
        </div>

                            <a href="" className='font-quattrocento underline text-[12px] text-[#37546B] mt-[107px]'>Return to envelope</a>

      </div>
    </section>
  );
};

export default Gift;