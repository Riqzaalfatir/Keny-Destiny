'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '@/lib/animation'

const Nama = () => {
  return (
    <section className='relative'>
      {/* bg biru solid */}
      <div className="absolute inset-0 bg-[#233851]" />
      
      {/* gambar bunga di atas bg biru, opacity rendah */}
      <div 
        className="absolute inset-0 bg-cover bg-[50%_40%]"
        style={{ backgroundImage: "url('/images/Nama/Bunga.webp')" }}
      />
      
      {/* teks paling atas */}
      <div className="relative z-10 flex flex-col items-center justify-center py-[23px] lg:pt-[27px] lg:pb-[23px]">
        <motion.h2
          variants={fadeIn}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className='font-newscript text-[14px] lg:text-[20px] text-white/80'
        >
          Destiny and Kenny
        </motion.h2>
        <motion.p
          variants={fadeIn}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 1.2, ease: "easeInOut", delay: 0.3 }}
          className='font-newserif text-[12px] text-white/80 tracking-widest lg:text-[18px]'
        >
          11.07.26
        </motion.p>
      </div>
    </section>
  )
}

export default Nama
// import React from 'react'

// const Nama = () => {
//   return (
//     <section className='relative'>
//       {/* bg biru solid */}
//       <div className="absolute inset-0 bg-[#233851]" />
      
//       {/* gambar bunga di atas bg biru, opacity rendah */}
//       <div 
//         className="absolute inset-0 bg-cover bg-[50%_40%]"
//         style={{ backgroundImage: "url('/images/Nama/Bunga.webp')" }}
//       />
      
//       {/* teks paling atas */}
//       <div className="relative z-10 flex flex-col items-center justify-center py-[23px] lg:pt-[27px] lg:pb-[23px]">
//         <h2 className='font-newscript text-[14px] lg:text-[20px] text-white/80'>Destiny and Kenny</h2>
//         <p className='font-newserif text-[12px] text-white/80 tracking-widest lg:text-[18px]'>11.07.26</p>
//       </div>
//     </section>
//   )
// }

// export default Nama 