// src/components/Hero.tsx

import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="w-full pt-[67px] lg:pt-[71px] flex justify-center overflow-x-hidden bg-[#F7F4EF]"
    >
      <div className="relative w-[390px] min-w-[390px] lg:w-[590px] lg:min-w-[590px]">
        <Image
          src="/images/Hero/AmplopUtama.svg"
          alt="Amplop Utama"
          width={481}
          height={481}
          className="absolute right-[48px] lg:right-[29px] z-[2] w-[280px] lg:w-[481px] "
        />

        <Image
          src="/images/Hero/Bungamawar.svg"
          alt="Bunga Mawar"
          width={237}
          height={237}
          className="absolute top-[200px] right-[23px] lg:top-[342px] lg:right-[-10px] z-[4] w-[138px] lg:w-[237px]"
        />

        <Image
          src="/images/Hero/BungaBelakang.png"
          alt="Bunga Mawar"
          width={223}
          height={223}
          className="absolute top-[164px] right-[27px] w-[130px] lg:w-[223px]"
        />

        <Image
          src="/images/Hero/BungaMawarKecil.svg"
          alt="Bunga Mawar Kecil"
          width={100}
          height={99}
          className="absolute top-[236px] right-[85px] lg:top-[396px] lg:right-[90px]  z-[8] w-[59px] lg:w-[100px]"
        />

        {/* PLEASE JOIN */}
        <div className="absolute top-[145px] left-[15px] lg:top-[255px] lg:left-[-10px] z-[10]">
          <Image
            src="/images/Hero/OrnamentNama.svg"
            alt="Ornament Nama"
            width={425}
            height={672}
            className=" w-[248px] lg:w-[425px]"
          />

          <div className="absolute inset-0 flex flex-col items-center justify-start mt-[108px] lg:mt-[200px] mr-[10px] px-2 ">
            <p className="font-quattrocento text-[12px] lg:text-[18px] text-center text-[#37546B] leading-[14px] lg:leading-[23px]">
              PLEASE JOIN US FOR
              <br />
              THE ENGAGEMENT
              <br />
              CELEBRATION OF
            </p>

            <div className="flex flex-col items-center justify-center gap-[6px] lg:gap-[15px] leading-none mt-[16px] lg:mt-[33px]">
              <p className="font-newserif text-[30px] lg:text-[46px] text-center text-[#37546B]">
                DESTINY
              </p>
              <p className="font-newscript text-[16px] lg:text-[22px] text-center text-[#37546B]">
                and
              </p>
              <p className="font-newserif text-[30px] lg:text-[46px] text-center text-[#37546B]">
                KENNY
              </p>
            </div>

            <p className="font-quattrocento text-[12px] lg:text-[18px] text-center text-[#37546B] mt-[10px] lg:mt-[15px]">
              JULY 11TH 2026
            </p>
          </div>
        </div>

        {/* THE HOUSE */}
        <div className="absolute top-[264px] lg:top-[455px] right-[35px] lg:right-[9px] z-[7]">
          <Image
            src="/images/Hero/OrnamentKotak.svg"
            alt="Ornament Kotak"
            width={268}
            height={181}
            className="w-[156px] lg:w-[268px]"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center leading-[13px] lg:leading-[24px]">
            <p className="font-quattrocento text-[12px] lg:text-[18px] text-center  text-[#37546B] mt-2 lg:mt-0">
              6:00PM
              <br />
              THE HOUSE
              <br />
              CONVENTION HALL
              <br />
              BANDUNG
            </p>
          </div>
        </div>

        <Image
          src="/images/Hero/OrnamentLingkar.svg"
          alt="Ornament Lingkar"
          width={228}
          height={228}
          className="absolute top-[343px] right-[61.5px] lg:top-[595px] lg:right-[58px] z-[7]  w-[133px] lg:w-[228px]"
        />

        {/* CLICK HERE */}
        <div className="absolute top-[360px] right-[10px] lg:top-[622px] lg:right-[-35px] z-[7] pointer-events-none">
          <Image
            src="/images/Hero/OrnamentDetails.svg"
            alt="Bunga Mawar Kecil"
            width={397}
            height={397}
            className=" w-[231px] lg:w-[397px]"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
            <a href="#details" className="pointer-events-auto mt-[30px] lg:mt-[60px]">
              <p className="font-quattrocento text-[12px] lg:text-[18px] uppercase text-[#37546B]">
                Click here to
                <br />
                see the
              </p>
              <h2 className="font-newscript text-[30px] lg:text-[46px] text-[#37546B] mt-1 lg:mt-3">
                Details
              </h2>
            </a>
          </div>
        </div>

        {/* WISH */}
        <div className="absolute top-[478px] lg:top-[813px] left-[70px] lg:left-[60px] z-[6]">
          <Image
            src="/images/Hero/OrnamentKotakBiru.png"
            alt="Bunga Mawar Kecil"
            width={271}
            height={271}
            className=" w-[149x] lg:w-[271px]"
          />

          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <a href="#gift">
              <p className="font-quattrocento text-[30px] lg:text-[52px] lg:mt-[18px] text-white">
                WISH
              </p>
            </a>
          </div>
        </div>

        <Image
          src="/images/Hero/OrnamentLingkar.svg"
          alt="Bunga Mawar Kecil"
          width={351}
          height={351}
          className="absolute top-[556px] lg:top-[953px] left-[100px] lg:left-[130px] z-[6] pointer-events-none  w-[204px] lg:w-[351px]"
        />

        {/* READ OUR */}
        <div className="absolute top-[615px] lg:top-[1062px] left-[70px] lg:left-[70px] z-[10]">
          <Image
            src="/images/Hero/PasFoto1.svg"
            alt="Bunga Mawar Kecil"
            width={225}
            height={400}
            className=" w-[131px] lg:w-[225px]"
          />
          <a href="#details">
            <p className="absolute bottom-[25px] lg:bottom-[46px] left-0 right-0 text-center uppercase font-newserif text-[12px] lg:text-[18px] text-[#37546B]">
              READ OUR
            </p>
          </a>
        </div>

        <Image
          src="/images/Hero/OrnamentmawarKanan.svg"
          alt="Bunga Mawar Kecil"
          width={133}
          height={267}
          className="absolute top-[623px] left-[192px] lg:top-[1070px] lg:left-[280px] z-[9] pointer-events-none  w-[78px] lg:w-[135px]"
        />

        {/* KINDLY */}
        <div className="absolute top-[502px] lg:top-[860px] right-[32px] lg:right-[20px] z-[8]">
          <Image
            src="/images/Hero/OrnamentKindly.svg"
            alt="Bunga Mawar Kecil"
            width={247}
            height={497}
            className=" w-[144px] lg:w-[247px]"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center mt-[90px] text-center lg:mt-[160px]">
            <a href="#rsvp">
              <p className="uppercase underline decoration-1 underline-offset-[2px]  font-quattrocento text-[18px] lg:text-[26px] text-white">
                KINDLY
              </p>
              <p className="uppercase underline decoration-1 underline-offset-[2px]  font-quattrocento text-[18px] lg:text-[26px] text-white">
                RSVP
              </p>
              <p className="uppercase underline decoration-1 underline-offset-[2px]  font-quattrocento text-[18px] lg:text-[26px] text-white">
                HERE
              </p>
            </a>
          </div>
        </div>

        {/* LOVE STORY */}
        <div className="absolute top-[750px] lg:top-[1290px] left-[103px] lg:left-[123px] z-[9]">
          <Image
            src="/images/Hero/PasFoto2.svg"
            alt="Bunga Mawar Kecil"
            width={361}
            height={361}
            className=" w-[210px] lg:w-[361px]"
          />

          <a href="#story">
            <p className="absolute bottom-[11px] lg:bottom-[20px] left-0 right-0 text-center uppercase font-newscript text-[12px] lg:text-[18px] text-[#37546B]">
              L<span className="font-newserif">OVE STORY</span>
            </p>
          </a>
        </div>

        <Image
          src="/images/Hero/MawarBiru.svg"
          alt="Bunga Mawar Kecil"
          width={172}
          height={229}
          className="absolute top-[810px] lg:top-[1395px] left-[72px] lg:left-[70px] z-[10] pointer-events-none  w-[100px] lg:w-[172px]"
        />

        <div className="absolute top-[717px] lg:top-[1238px] right-[4px] lg:right-[-22px] z-[10] pointer-events-none">
          <Image
            src="/images/Hero/OrnamentK.svg"
            alt="Ornament K"
            width={374}
            height={494}
            className=" w-[224px] lg:w-[374px]"
          />

          <div className="absolute top-[60px] left-[50px] right-0 lg:top-[100px] lg:left-[85px] flex items-center justify-center">
            <Image
              src="/images/Hero/LogoK.svg"
              alt="Logo K"
              width={98}
              height={98}
              className="object-contain  w-[59px] lg:w-[98px]"
            />
          </div>
        </div>

        {/* spacer — adjust h sampai semua ornament keliatan */}
        <div className="h-[1070px] lg:h-[1820px]" />

        {/* Return to envelope selalu di bawah spacer */}
        <a href="#hero">
          <p className="relative underline text-center font-quattrocento text-[12px] lg:text-[18px] text-[#37546B] pb-[39px]">
            Return to envelope
          </p>
        </a>
      </div>
    </section>
  );
}













































// BELUM DI DEKSTOP KAN(BARU MOBILE STYLE)
// // src/components/Hero.tsx

// import Image from "next/image";

// export default function Hero() {
//   return (
//     <section
//       id="hero"
//       className="w-full pt-[67px] flex justify-center overflow-x-hidden bg-[#F7F4EF]"
//     >
//       <div className="relative w-[390px] min-w-[390px]">
//         <Image
//           src="/images/Hero/AmplopUtama.svg"
//           alt="Amplop Utama"
//           width={280}
//           height={280}
//           className="absolute right-[48px] z-[2]"
//         />

//         <Image
//           src="/images/Hero/Bungamawar.svg"
//           alt="Bunga Mawar"
//           width={138}
//           height={138}
//           className="absolute top-[200px] right-[23px] z-[4]"
//         />

//         <Image
//           src="/images/Hero/BungaBelakang.png"
//           alt="Bunga Mawar"
//           width={130}
//           height={130}
//           className="absolute top-[164px] right-[27px]"
//         />

//         <Image
//           src="/images/Hero/BungaMawarKecil.svg"
//           alt="Bunga Mawar Kecil"
//           width={59}
//           height={58}
//           className="absolute top-[236px] right-[85px] z-[8]"
//         />

//         {/* PLEASE JOIN */}
//         <div className="absolute top-[145px] left-[15px] z-[10]">
//           <Image
//             src="/images/Hero/OrnamentNama.svg"
//             alt="Ornament Nama"
//             width={248}
//             height={392}
//           />

//           <div className="absolute inset-0 flex flex-col items-center justify-start mt-[108px] mr-[10px] px-2 ">
//             <p className="font-quattrocento text-[12px] text-center text-[#37546B] leading-[14px]">
//               PLEASE JOIN US
//               <br />
//               FOR THE
//               <br />
//               ENGAGEMENT
//               <br />
//               CELEBRATION OF
//             </p>

//             <div className="flex flex-col items-center justify-center gap-[6px] leading-none mt-[16px]">
//               <p className="font-newserif text-[30px] text-center text-[#37546B]">
//                 DESTINY
//               </p>
//               <p className="font-newscript text-[16px] text-center text-[#37546B]">
//                 and
//               </p>
//               <p className="font-newserif text-[30px] text-center text-[#37546B]">
//                 KENNY
//               </p>
//             </div>

//             <p className="font-quattrocento text-[12px] text-center text-[#37546B] mt-[10px]">
//               JULY 11TH 2026
//             </p>
//           </div>
//         </div>

//         {/* THE HOUSE */}
//         <div className="absolute top-[264px] right-[35px] z-[7]">
//           <Image
//             src="/images/Hero/OrnamentKotak.svg"
//             alt="Ornament Kotak"
//             width={156}
//             height={106}
//           />
//           <div className="absolute inset-0 flex flex-col items-center justify-center leading-[13px]">
//             <p className="font-quattrocento text-[12px] text-center  text-[#37546B] mt-2">
//               6:00PM
//               <br />
//               THE HOUSE
//               <br />
//               CONVENTION HALL
//               <br />
//               BANDUNG
//             </p>
//           </div>
//         </div>

//         <Image
//           src="/images/Hero/OrnamentLingkar.svg"
//           alt="Bunga Mawar Kecil"
//           width={133}
//           height={133}
//           className="absolute top-[343px] right-[61.5px] z-[7]"
//         />

//         {/* CLICK HERE */}
//         <div className="absolute top-[360px] right-[10px] z-[7] pointer-events-none">
//           <Image
//             src="/images/Hero/OrnamentDetails.svg"
//             alt="Bunga Mawar Kecil"
//             width={231}
//             height={231}
//           />
//           <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
//             <a href="#details" className="pointer-events-auto mt-[30px]">
//               <p className="font-quattrocento text-[12px] uppercase text-[#37546B]">
//                 Click here
//                 <br />
//                 to see the
//               </p>
//               <h2 className="font-newscript text-[30px] text-[#37546B] mt-1">
//                 Details
//               </h2>
//             </a>
//           </div>
//         </div>

//         {/* WISH */}
//         <div className="absolute top-[478px] left-[70px] z-[6]">
//           <Image
//             src="/images/Hero/OrnamentKotakBiru.png"
//             alt="Bunga Mawar Kecil"
//             width={149}
//             height={149}
//           />

//           <div className="absolute inset-0 flex flex-col items-center justify-center">
//             <a href="#gift">
//               <p className="font-quattrocento text-[30px] text-white">WISH</p>
//             </a>
//           </div>
//         </div>

//         <Image
//           src="/images/Hero/OrnamentLingkar.svg"
//           alt="Bunga Mawar Kecil"
//           width={204}
//           height={204}
//           className="absolute top-[556px] left-[100px] z-[6] pointer-events-none"
//         />

//         {/* READ OUR */}
//         <div className="absolute top-[615px] left-[70px] z-[10]">
//           <Image
//             src="/images/Hero/PasFoto1.svg"
//             alt="Bunga Mawar Kecil"
//             width={131}
//             height={233}
//           />
//           <a href="#details">
//             <p className="absolute bottom-[25px] left-0 right-0 text-center uppercase font-newserif text-[12px] text-[#37546B]">
//               READ OUR
//             </p>
//           </a>
//         </div>

//         <Image
//           src="/images/Hero/OrnamentmawarKanan.svg"
//           alt="Bunga Mawar Kecil"
//           width={78}
//           height={156}
//           className="absolute top-[623px] left-[192px] z-[9] pointer-events-none"
//         />

//         {/* KINDLY */}
//         <div className="absolute top-[502px] right-[32px] z-[8]">
//           <Image
//             src="/images/Hero/OrnamentKindly.svg"
//             alt="Bunga Mawar Kecil"
//             width={144}
//             height={290}
//           />
//           <div className="absolute inset-0 flex flex-col items-center justify-center mt-[90px] text-center">
//             <a href="#rsvp">
//               <p className="uppercase underline decoration-1 underline-offset-[2px]  font-quattrocento text-[18px] text-white">
//                 KINDLY
//               </p>
//               <p className="uppercase underline decoration-1 underline-offset-[2px]  font-quattrocento text-[18px] text-white">
//                 RSVP
//               </p>
//               <p className="uppercase underline decoration-1 underline-offset-[2px]  font-quattrocento text-[18px] text-white">
//                 HERE
//               </p>
//             </a>
//           </div>
//         </div>

//         {/* LOVE STORY */}
//         <div className="absolute top-[750px] left-[103px] z-[9]">
//           <Image
//             src="/images/Hero/PasFoto2.svg"
//             alt="Bunga Mawar Kecil"
//             width={210}
//             height={210}
//           />

//           <a href="#story">
//             <p className="absolute bottom-[11px] left-0 right-0 text-center uppercase font-newscript text-[12px] text-[#37546B]">
//               L<span className="font-newserif">OVE STORY</span>
//             </p>
//           </a>
//         </div>

//         <Image
//           src="/images/Hero/MawarBiru.svg"
//           alt="Bunga Mawar Kecil"
//           width={100}
//           height={133}
//           className="absolute top-[810px] left-[72px] z-[10] pointer-events-none"
//         />

//         <div className="absolute top-[717px] right-[4px] z-[10] pointer-events-none">
//           <Image
//             src="/images/Hero/OrnamentK.svg"
//             alt="Ornament K"
//             width={224}
//             height={296}
//           />

//           <div className="absolute top-[60px] left-[50px] right-0 flex items-center justify-center">
//             <Image
//               src="/images/Hero/LogoK.svg"
//               alt="Logo K"
//               width={59}
//               height={59}
//               className="object-contain"
//             />
//           </div>
//         </div>

//         {/* spacer — adjust h sampai semua ornament keliatan */}
//         <div className="h-[1070px]" />

//         {/* Return to envelope selalu di bawah spacer */}
//         <a href="#hero">
//           <p className="relative underline text-center font-quattrocento text-[12px] text-[#37546B] pb-[39px]">
//             Return to envelope
//           </p>
//         </a>
//       </div>
//     </section>
//   );
// }
