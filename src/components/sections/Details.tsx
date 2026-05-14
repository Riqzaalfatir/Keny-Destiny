import React from 'react'
import Image from 'next/image'

const Details = () => {
  return (
    <section className='bg-[#F7F4EF]'>
        <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-col items-center justify-center gap-[71px] pt-[86px] pb-[39px]">

                <div className='flex flex-col items-center justify-center text-center gap-[33px]'>
                    <h2 className='uppercase font-newserif text-[24px] text-[#37546B] leading-none'>
                        THE FINER<br />
                        <span className='font-newscript ml-[30px]'>D</span>etails
                    </h2>
                    <p className='font-quattrocento text-[12px] text-[#37546B]'>
                        Our hearts are full as we get ready to celebrate with you!<br />
                        Here are all the details to help you enjoy every moment of<br />
                        our wedding
                    </p>
                </div>

                <div className='flex flex-col items-center justify-center text-center gap-[8px]'>
                   <h3 className='uppercase font-quattrocento font-bold text-[14px] text-[#37546B]'>RECEPTION</h3>
                   <p className='font-quattrocento text-[12px] text-[#37546B]'>
                    Our celebration will begin at 6:00 PM at The House<br />
                    Convention Hall. We kindly ask guests to arrive by 5:30 PM<br />
                    to be seated and settled before we begin.
                   </p>
                   <p className='font-quattrocento text-[12px] text-[#37546B] mt-2'>
                    We’ll gather for dinner, drinks, and dancing as we toast to<br />
                    love, laughter, and our new beginning together.
                   </p>
                </div>

                <div className='flex flex-col items-center justify-center text-center'>
                   <h3 className='uppercase font-quattrocento font-bold text-[14px] text-[#37546B]'>DRESS CODE</h3>
                   <p className='font-quattrocento text-[12px] text-[#37546B] mt-[9px]'>
                    We kindly invite our guests to dress in formal attire and<br />
                    avoid wearing white. To help bring our vision to life, we’d<br />
                    love for you to choose outfits inspired by our color palette. 
                   </p>

                    <Image
                             src="/images/Details/Warna.svg"
                             alt="Bunga Mawar Kecil"
                             width={136}
                             height={40}
                             className="mt-[45px]"
                           />

                    <a href="" className='font-quattrocento underline text-[12px] text-[#37546B] mt-[108px]'>Return to envelope</a>
                </div>

            </div>


        </div>
    </section>
  )
}

export default Details