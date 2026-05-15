"use client";

import React from "react";
import Image from "next/image";
import useIsMobile from "@/components/hooks/useIsMobile";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animation";

const ThankYou = () => {
  const isMobile = useIsMobile();

  return (
    <section className="relative w-full min-h-[855px] lg:min-h-[945px] overflow-hidden">
      {/* BG Image */}
      <div className="absolute inset-0">
        <Image
          src={
            isMobile
              ? "/images/ThankYou/CouplePantai.webp" //MOBILE
              : "/images/ThankYou/Couple.webp" //DEKSTOP
          }
          alt="Couple"
          fill
          className="object-cover object-center"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center pt-[62px] lg:pt-[87px]">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 1.8, ease: "easeOut" }}
          style={{ willChange: "transform" }}
        >
          <h2 className="uppercase font-newscript text-[24px] lg:text-[46px] text-[#37546B] tracking-wide">
            T<span className="font-newserif lg:ml-3">HANK YOU</span>
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
          <p className="font-quattrocento text-[12px] lg:text-[18px] text-[#37546B] mt-[33px]">
            Thank you for being a part of our journey. <br className="block" />
            We look forward to sharing love, laughter,{" "}
            <br className="block lg:hidden" />
            and the beginning <br className="hidden lg:block" />
            of our forever with you.
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
          <p className="font-quattrocento text-[12px] lg:text-[18px] text-[#37546B] mt-[35px]">
            #DEEONLYONEFORKEN
          </p>
        </motion.div>
      </div>

      {/* Logo — absolute bottom */}
      <div className="absolute bottom-[10px] lg:bottom-[-38px] left-0 right-0 z-10 flex justify-center">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 1.8, ease: "easeOut" }}
          style={{ willChange: "transform" }}
        >
          <Image
            src="/images/ThankYou/LogoProvite.svg"
            alt="By Provite"
            width={149}
            height={187}
            className="object-contain w-[89px] lg:w-[149px]"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default ThankYou;

// 'use client'

// import React from 'react'
// import Image from 'next/image'
// import useIsMobile from '@/components/hooks/useIsMobile'

// const ThankYou = () => {
//   const isMobile = useIsMobile()

//   return (
//     <section className='relative w-full h-[855px] lg:h-[945px] overflow-hidden'>
//         <Image
//           src={isMobile
//             ? "/images/ThankYou/CouplePantai.webp"  // mobile
//             : "/images/ThankYou/Couple.webp"          // desktop
//           }
//           alt='Couple'
//           fill
//           className='object-cover object-center'
//         />

//         <div className="absolute inset-0 flex flex-col items-center text-center pt-[62px] lg:pt-[87px]">
//             <h2 className='uppercase font-newscript text-[24px] lg:text-[46px] text-[#37546B] tracking-wide'>T<span className='font-newserif lg:ml-3'>HANK YOU</span></h2>
//             <p className='font-quattrocento text-[12px] lg:text-[18px] text-[#37546B] mt-[33px]'>
//                 Thank you for being a part of our journey. <br className='block' />
//                 We look forward to sharing love, laughter, <br className='block lg:hidden' />
//                 and the beginning <br className='hidden lg:block' />
//                 of our forever with you.
//             </p>

//             <p className='font-quattrocento text-[12px] lg:text-[18px] text-[#37546B] mt-[35px]'>
//                #DEEONLYONEFORKEN
//             </p>
//         </div>

//         <div className="absolute bottom-[10px] lg:bottom-[-38px] left-0 right-0 flex justify-center">
//             <Image
//                 src="/images/ThankYou/LogoProvite.svg"
//                 alt='By Provite'
//                 width={149}
//                 height={187}
//                 className='object-contain w-[89px] lg:w-[149px]'
//             />
//         </div>
//     </section>
//   )
// }

// export default ThankYou
