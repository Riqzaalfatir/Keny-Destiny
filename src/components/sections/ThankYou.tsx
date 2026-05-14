import React from 'react'
import Image from 'next/image'

const ThankYou = () => {
  return (
    <section className='relative w-full h-[855px]'>
        <Image
          src="/images/ThankYou/CouplePantai.webp"
          alt='Couple'
          fill
          className='object-cover object-center'
        />

        <div className="absolute inset-0 flex flex-col items-center text-center pt-[62px]">
            <h2 className='uppercase font-newscript text-[24px] text-[#37546B] tracking-wide'>T<span className='font-newserif'>HANK YOU</span></h2>
            <p className='font-quattrocento text-[12px] text-[#37546B] mt-[33px]'>
                Thank you for being a part of our journey.<br />
                We look forward to sharing love, laughter,<br />
                and the beginning of our forever with you.
            </p>

            <p className='font-quattrocento text-[12px] text-[#37546B] mt-[35px]'>
               #DEEONLYONEFORKEN
            </p>
        </div>

        <div className="absolute bottom-[10px] left-0 right-0 flex justify-center">
            <Image 
                src="/images/ThankYou/LogoProvite.svg"
                alt='By Provite'
                width={89}
                height={111}
                className='object-contain'
            />
        </div>
    </section>
  )
}

export default ThankYou