import React from 'react'

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
        <h2 className='font-newscript text-[14px] lg:text-[20px] text-white/90'>Destiny and Kenny</h2>
        <p className='font-newserif text-[12px] text-white/90 tracking-widest lg:text-[18px]'>11.07.26</p>
      </div>
    </section>
  )
}

export default Nama 