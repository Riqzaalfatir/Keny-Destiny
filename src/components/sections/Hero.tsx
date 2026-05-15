import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp, fadeIn, stagger } from "@/lib/animation"; // tambah stagger

export default function Hero() {
  return (
    <section
      id="hero"
      className="w-full pt-[67px] lg:pt-[71px] flex flex-col items-center justify-center  bg-[#F7F4EF]"
    >
      {/* ✅ whileInView HANYA di sini, pakai stagger */}
      <motion.div
        className="relative w-[390px] min-w-[390px] lg:w-[590px] lg:min-w-[590px] overflow-x-hidden"
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.05 }}
      >

        {/* AMPLOP — className absolute pindah ke motion.div, Image pakai w-full */}
        <motion.div
          variants={fadeIn}
          transition={{ duration: 1, ease: "easeIn" }}
          className="absolute left-1/2 -translate-x-1/2 z-[2] w-[280px] lg:w-[481px]" 
        >
          <Image
            src="/images/Hero/AmplopUtama.svg"
            alt="Amplop Utama"
            width={481}
            height={481}
            className="w-full" 
          />
        </motion.div>

        {/* BUNGA BELAKANG */}
        <motion.div
          variants={fadeIn}
          transition={{ duration: 1, ease: "easeIn" }}
          className="absolute top-[164px] right-[37px] lg:top-[280px] lg:right-[20px] w-[130px] lg:w-[223px]"
        >
          <Image src="/images/Hero/BungaBelakang.webp" alt="Bunga Belakang" width={223} height={223} className="w-full" />
        </motion.div>

        {/* BUNGA MAWAR */}
        <motion.div
          variants={fadeIn}
          transition={{ duration: 1, ease: "easeIn" }}
          className="absolute top-[200px] right-[33px] lg:top-[342px] lg:right-[15px] z-[4] w-[138px] lg:w-[237px]"
        >
          <Image src="/images/Hero/Bungamawar.svg" alt="Bunga Mawar" width={237} height={237} className="w-full" />
        </motion.div>

        {/* BUNGA MAWAR KECIL */}
        <motion.div
          variants={fadeIn}
          transition={{ duration: 1, ease: "easeIn" }}
          className="absolute top-[236px] right-[90px] lg:top-[405px] lg:right-[112px] z-[8] w-[59px] lg:w-[100px]"
        >
          <Image src="/images/Hero/BungaMawarKecil.svg" alt="Bunga Mawar Kecil" width={100} height={99} className="w-full" />
        </motion.div>

        {/* ORNAMENT NAMA — ini yang ada div wrapper, motion.div tetap absolute */}
        <motion.div
          variants={fadeIn}
          transition={{ duration: 1, ease: "easeIn" }}
          className="absolute top-[145px] left-[5px] lg:top-[255px] lg:left-[-10px] z-[10] pointer-events-none"
        >
          <Image src="/images/Hero/OrnamentNama.svg" alt="Ornament Nama" width={425} height={672} className="w-[248px] lg:w-[425px]" />
          <div className="absolute inset-0 flex flex-col items-center justify-start mt-[108px] lg:mt-[200px] mr-[10px] px-2">
            <p className="font-quattrocento text-[12px] lg:text-[18px] text-center text-[#37546B] leading-[14px] lg:leading-[23px]">
              PLEASE JOIN US FOR<br />THE ENGAGEMENT<br />CELEBRATION OF
            </p>
            <div className="flex flex-col items-center justify-center gap-[6px] lg:gap-[15px] leading-none mt-[16px] lg:mt-[33px]">
              <p className="font-newserif text-[30px] lg:text-[46px] text-center text-[#37546B]">DESTINY</p>
              <p className="font-newscript text-[16px] lg:text-[22px] text-center text-[#37546B]">and</p>
              <p className="font-newserif text-[30px] lg:text-[46px] text-center text-[#37546B]">KENNY</p>
            </div>
            <p className="font-quattrocento text-[12px] lg:text-[18px] text-center text-[#37546B] mt-[10px] lg:mt-[15px]">JULY 11TH 2026</p>
          </div>
        </motion.div>

        {/* THE HOUSE */}
        <motion.div
          variants={fadeIn}
          transition={{ duration: 1, ease: "easeIn" }}
          className="absolute top-[264px] lg:top-[455px] right-[45px] lg:right-[33px] z-[7]"
        >
          <Image src="/images/Hero/OrnamentKotak.svg" alt="Ornament Kotak" width={268} height={181} className="w-[156px] lg:w-[268px]" />
          <div className="absolute inset-0 flex flex-col items-center justify-center leading-[13px] lg:leading-[24px]">
            <p className="font-quattrocento text-[12px] lg:text-[18px] text-center text-[#37546B] mt-2 lg:mt-0">
              6:00PM<br />THE HOUSE<br />CONVENTION HALL<br />BANDUNG
            </p>
          </div>
        </motion.div>

        {/* ORNAMENT LINGKAR kanan atas */}
        <motion.div
          variants={fadeIn}
          transition={{ duration: 1, ease: "easeIn" }}
          className="absolute top-[343px] right-[71.5px] lg:top-[595px] lg:right-[58px] z-[7] w-[133px] lg:w-[228px] pointer-events-none"
        >
          <Image src="/images/Hero/OrnamentLingkar.svg" alt="Ornament Lingkar" width={228} height={228} className="w-full" />
        </motion.div>

        {/* CLICK HERE */}
        <motion.div
          variants={fadeIn}
          transition={{ duration: 1, ease: "easeIn" }}
          className="absolute top-[360px] right-[20px] lg:top-[622px] lg:right-[-25px] z-[7] pointer-events-none"
        >
          <Image src="/images/Hero/OrnamentDetails.svg" alt="Ornament Details" width={397} height={397} className="w-[231px] lg:w-[397px]" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
            <a href="#details" className="pointer-events-auto mt-[30px] lg:mt-[60px]">
              <p className="font-quattrocento text-[12px] lg:text-[18px] uppercase text-[#37546B]">Click here to<br />see the</p>
              <h2 className="font-newscript text-[30px] lg:text-[46px] text-[#37546B] mt-1 lg:mt-3">Details</h2>
            </a>
          </div>
        </motion.div>

        {/* WISH */}
        <motion.div
          variants={fadeIn}
          transition={{ duration: 1, ease: "easeIn" }}
          className="absolute top-[478px] lg:top-[813px] left-[60px] z-[6] pointer-events-none"
        >
          <Image src="/images/Hero/Wish.svg" alt="Wish" width={271} height={271} className="w-[149px] lg:w-[271px]" />
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <a href="#gift" className="pointer-events-auto">
              <p className="font-quattrocento text-[30px] lg:text-[52px] lg:mt-[18px] text-white">WISH</p>
            </a>
          </div>
        </motion.div>

        {/* ORNAMENT LINGKAR kiri bawah */}
        <motion.div
          variants={fadeIn}
          transition={{ duration: 1, ease: "easeIn" }}
          className="absolute top-[556px] lg:top-[957px] left-[90px] lg:left-[130px] z-[6] w-[204px] lg:w-[351px] pointer-events-none"
        >
          <Image src="/images/Hero/OrnamentLingkar.svg" alt="Ornament Lingkar" width={351} height={351} className="w-full" />
        </motion.div>

        {/* READ OUR */}
        <motion.div
          variants={fadeIn}
          transition={{ duration: 1, ease: "easeIn" }}
          className="absolute top-[615px] lg:top-[1062px] left-[60px] lg:left-[70px] z-[10]"
        >
          <Image src="/images/Hero/PasFoto1.svg" alt="Pas Foto 1" width={225} height={400} className="w-[131px] lg:w-[225px]" />
          <a href="#details">
            <p className="absolute bottom-[25px] lg:bottom-[46px] left-0 right-0 text-center uppercase font-newserif text-[12px] lg:text-[18px] text-[#37546B]">READ OUR</p>
          </a>
        </motion.div>

        {/* ORNAMENT MAWAR KANAN */}
        <motion.div
          variants={fadeIn}
          transition={{ duration: 1, ease: "easeIn" }}
          className="absolute top-[623px] left-[182px] lg:top-[1070px] lg:left-[280px] z-[9] w-[78px] lg:w-[135px] pointer-events-none"
        >
          <Image src="/images/Hero/OrnamentmawarKanan.svg" alt="Ornament Mawar Kanan" width={133} height={267} className="w-full" />
        </motion.div>

        {/* KINDLY RSVP */}
        <motion.div
          variants={fadeIn}
          transition={{ duration: 1, ease: "easeIn" }}
          className="absolute top-[502px] lg:top-[860px] right-[42px] lg:right-[20px] z-[8] pointer-events-none"
        >
          <Image src="/images/Hero/OrnamentKindly.svg" alt="Ornament Kindly" width={247} height={497} className="w-[144px] lg:w-[247px]" />
          <div className="absolute inset-0 flex flex-col items-center justify-center mt-[90px] lg:mt-[160px] text-center">
            <a href="#rsvp" className="pointer-events-auto">
              <p className="uppercase underline decoration-1 underline-offset-[2px] font-quattrocento text-[18px] lg:text-[26px] text-white">KINDLY</p>
              <p className="uppercase underline decoration-1 underline-offset-[2px] font-quattrocento text-[18px] lg:text-[26px] text-white">RSVP</p>
              <p className="uppercase underline decoration-1 underline-offset-[2px] font-quattrocento text-[18px] lg:text-[26px] text-white">HERE</p>
            </a>
          </div>
        </motion.div>

        {/* LOVE STORY */}
        <motion.div
          variants={fadeIn}
          transition={{ duration: 1, ease: "easeIn" }}
          className="absolute top-[750px] lg:top-[1290px] left-[93px] lg:left-[123px] z-[9]"
        >
          <Image src="/images/Hero/PasFoto2.svg" alt="Pas Foto 2" width={361} height={361} className="w-[210px] lg:w-[361px]" />
          <a href="#story">
            <p className="absolute bottom-[11px] lg:bottom-[20px] left-0 right-0 text-center uppercase font-newscript text-[12px] lg:text-[18px] text-[#37546B]">
              L<span className="font-newserif">OVE STORY</span>
            </p>
          </a>
        </motion.div>

        {/* MAWAR BIRU */}
        <motion.div
          variants={fadeIn}
          transition={{ duration: 1, ease: "easeIn" }}
          className="absolute top-[810px] lg:top-[1395px] left-[62px] lg:left-[70px] z-[10] w-[100px] lg:w-[172px] pointer-events-none"
        >
          <Image src="/images/Hero/MawarBiru.svg" alt="Mawar Biru" width={172} height={229} className="w-full" />
        </motion.div>

        {/* ORNAMENT K */}
        <motion.div
          variants={fadeIn}
          transition={{ duration: 1, ease: "easeIn" }}
          className="absolute top-[717px] lg:top-[1238px] right-[14px] lg:right-[-22px] z-[10] pointer-events-none"
        >
          <Image src="/images/Hero/OrnamentK.svg" alt="Ornament K" width={374} height={494} className="w-[224px] lg:w-[374px]" />
          <div className="absolute top-[60px] left-[50px] right-0 lg:top-[100px] lg:left-[85px] flex items-center justify-center">
            <Image src="/images/Hero/LogoK.svg" alt="Logo K" width={98} height={98} className="object-contain w-[59px] lg:w-[98px]" />
          </div>
        </motion.div>

        <div className="h-[1070px] lg:h-[1820px]" />
      </motion.div>

  <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 1.8, ease: "easeOut" }}
          style={{ willChange: "transform" }}
        >
      <a href="#hero">
        <p className="relative underline text-center font-quattrocento text-[12px] lg:text-[18px] text-[#37546B] pb-[39px]">
          Return to envelope
        </p>
      </a>
      </motion.div>
    </section>
  );
}

// OPSI SEBELUM DIBERI ANIMASI
// import Image from "next/image";

// export default function Hero() {
//   return (
//     <section
//       id="hero"
//       className="w-full pt-[67px] lg:pt-[71px] flex flex-col items-center justify-center overflow-x-hidden bg-[#F7F4EF]"
//     >
//       <div className="relative w-[390px] min-w-[390px] lg:w-[590px] lg:min-w-[590px] ">
//         <Image
//           src="/images/Hero/AmplopUtama.svg"
//           alt="Amplop Utama"
//           width={481}
//           height={481}
//           className="absolute left-1/2 -translate-x-1/2 z-[2] w-[280px] lg:w-[481px]"
//         />

//         <Image
//           src="/images/Hero/Bungamawar.svg"
//           alt="Bunga Mawar"
//           width={237}
//           height={237}
//           className="absolute top-[200px] right-[33px] lg:top-[342px] lg:right-[-10px] z-[4] w-[138px] lg:w-[237px]"
//         />

//         <Image
//           src="/images/Hero/BungaBelakang.png"
//           alt="Bunga Mawar"
//           width={223}
//           height={223}
//           className="absolute top-[164px] right-[37px] w-[130px] lg:w-[223px]"
//         />

//         <Image
//           src="/images/Hero/BungaMawarKecil.svg"
//           alt="Bunga Mawar Kecil"
//           width={100}
//           height={99}
//           className="absolute top-[236px] right-[90px] lg:top-[396px] lg:right-[90px]  z-[8] w-[59px] lg:w-[100px]"
//         />

//         {/* PLEASE JOIN */}
//         <div className="absolute top-[145px] left-[5px] lg:top-[255px] lg:left-[-10px] z-[10] pointer-events-none">
//           <Image
//             src="/images/Hero/OrnamentNama.svg"
//             alt="Ornament Nama"
//             width={425}
//             height={672}
//             className=" w-[248px] lg:w-[425px]"
//           />

//           <div className="absolute inset-0 flex flex-col items-center justify-start mt-[108px] lg:mt-[200px] mr-[10px] px-2 ">
//             <p className="font-quattrocento text-[12px] lg:text-[18px] text-center text-[#37546B] leading-[14px] lg:leading-[23px]">
//               PLEASE JOIN US FOR
//               <br />
//               THE ENGAGEMENT
//               <br />
//               CELEBRATION OF
//             </p>

//             <div className="flex flex-col items-center justify-center gap-[6px] lg:gap-[15px] leading-none mt-[16px] lg:mt-[33px] ">
//               <p className="font-newserif text-[30px] lg:text-[46px] text-center text-[#37546B]">
//                 DESTINY
//               </p>
//               <p className="font-newscript text-[16px] lg:text-[22px] text-center text-[#37546B]">
//                 and
//               </p>
//               <p className="font-newserif text-[30px] lg:text-[46px] text-center text-[#37546B]">
//                 KENNY
//               </p>
//             </div>

//             <p className="font-quattrocento text-[12px] lg:text-[18px] text-center text-[#37546B] mt-[10px] lg:mt-[15px]">
//               JULY 11TH 2026
//             </p>
//           </div>
//         </div>

//         {/* THE HOUSE */}
//         <div className="absolute top-[264px] lg:top-[455px] right-[45px] lg:right-[9px] z-[7]">
//           <Image
//             src="/images/Hero/OrnamentKotak.svg"
//             alt="Ornament Kotak"
//             width={268}
//             height={181}
//             className="w-[156px] lg:w-[268px]"
//           />
//           <div className="absolute inset-0 flex flex-col items-center justify-center leading-[13px] lg:leading-[24px]">
//             <p className="font-quattrocento text-[12px] lg:text-[18px] text-center  text-[#37546B] mt-2 lg:mt-0">
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
//           alt="Ornament Lingkar"
//           width={228}
//           height={228}
//           className="absolute top-[343px] right-[71.5px] lg:top-[595px] lg:right-[58px] z-[7]  w-[133px] lg:w-[228px] pointer-events-none"
//         />

//         {/* CLICK HERE */}
//         <div className="absolute top-[360px] right-[20px] lg:top-[622px] lg:right-[-35px] z-[7] pointer-events-none">
//           <Image
//             src="/images/Hero/OrnamentDetails.svg"
//             alt="Bunga Mawar Kecil"
//             width={397}
//             height={397}
//             className=" w-[231px] lg:w-[397px]"
//           />
//           <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
//             <a href="#details" className="pointer-events-auto mt-[30px] lg:mt-[60px]">
//               <p className="font-quattrocento text-[12px] lg:text-[18px] uppercase text-[#37546B]">
//                 Click here to
//                 <br />
//                 see the
//               </p>
//               <h2 className="font-newscript text-[30px] lg:text-[46px] text-[#37546B] mt-1 lg:mt-3">
//                 Details
//               </h2>
//             </a>
//           </div>
//         </div>

//         {/* WISH */}
//         <div className="absolute top-[478px] lg:top-[813px] left-[60px] lg:left-[60px] z-[6] pointer-events-none">
//           <Image
//             src="/images/Hero/Wish.svg"
//             alt="Bunga Mawar Kecil"
//             width={271}
//             height={271}
//             className=" w-[149px] lg:w-[271px]"
//           />

//           <div className="absolute inset-0 flex flex-col items-center justify-center">
//             <a href="#gift" className="pointer-events-auto">
//               <p className="font-quattrocento text-[30px] lg:text-[52px] lg:mt-[18px] text-white">
//                 WISH
//               </p>
//             </a>
//           </div>
//         </div>

//         <Image
//           src="/images/Hero/OrnamentLingkar.svg"
//           alt="Bunga Mawar Kecil"
//           width={351}
//           height={351}
//           className="absolute top-[556px] lg:top-[953px] left-[90px] lg:left-[130px] z-[6] pointer-events-none  w-[204px] lg:w-[351px]"
//         />

//         {/* READ OUR */}
//         <div className="absolute top-[615px] lg:top-[1062px] left-[60px] lg:left-[70px] z-[10]">
//           <Image
//             src="/images/Hero/PasFoto1.svg"
//             alt="Bunga Mawar Kecil"
//             width={225}
//             height={400}
//             className=" w-[131px] lg:w-[225px]"
//           />
//           <a href="#details">
//             <p className="absolute bottom-[25px] lg:bottom-[46px] left-0 right-0 text-center uppercase font-newserif text-[12px] lg:text-[18px] text-[#37546B]">
//               READ OUR
//             </p>
//           </a>
//         </div>

//         <Image
//           src="/images/Hero/OrnamentmawarKanan.svg"
//           alt="Bunga Mawar Kecil"
//           width={133}
//           height={267}
//           className="absolute top-[623px] left-[182px] lg:top-[1070px] lg:left-[280px] z-[9] pointer-events-none  w-[78px] lg:w-[135px]"
//         />

//         {/* KINDLY */}
//         <div className="absolute top-[502px] lg:top-[860px] right-[42px] lg:right-[20px] z-[8] pointer-events-none">
//           <Image
//             src="/images/Hero/OrnamentKindly.svg"
//             alt="Bunga Mawar Kecil"
//             width={247}
//             height={497}
//             className=" w-[144px] lg:w-[247px] pointer-events-none"
//           />
//           <div className="absolute inset-0 flex flex-col items-center justify-center mt-[90px] text-center lg:mt-[160px]">
//             <a href="#rsvp" className="pointer-events-auto">
//               <p className="uppercase underline decoration-1 underline-offset-[2px]  font-quattrocento text-[18px] lg:text-[26px] text-white">
//                 KINDLY
//               </p>
//               <p className="uppercase underline decoration-1 underline-offset-[2px]  font-quattrocento text-[18px] lg:text-[26px] text-white">
//                 RSVP
//               </p>
//               <p className="uppercase underline decoration-1 underline-offset-[2px]  font-quattrocento text-[18px] lg:text-[26px] text-white">
//                 HERE
//               </p>
//             </a>
//           </div>
//         </div>

//         {/* LOVE STORY */}
//         <div className="absolute top-[750px] lg:top-[1290px] left-[93px] lg:left-[123px] z-[9]">
//           <Image
//             src="/images/Hero/PasFoto2.svg"
//             alt="Bunga Mawar Kecil"
//             width={361}
//             height={361}
//             className=" w-[210px] lg:w-[361px]"
//           />

//           <a href="#story">
//             <p className="absolute bottom-[11px] lg:bottom-[20px] left-0 right-0 text-center uppercase font-newscript text-[12px] lg:text-[18px] text-[#37546B]">
//               L<span className="font-newserif">OVE STORY</span>
//             </p>
//           </a>
//         </div>

//         <Image
//           src="/images/Hero/MawarBiru.svg"
//           alt="Bunga Mawar Kecil"
//           width={172}
//           height={229}
//           className="absolute top-[810px] lg:top-[1395px] left-[62px] lg:left-[70px] z-[10] pointer-events-none  w-[100px] lg:w-[172px]"
//         />

//         <div className="absolute top-[717px] lg:top-[1238px] right-[14px] lg:right-[-22px] z-[10] pointer-events-none">
//           <Image
//             src="/images/Hero/OrnamentK.svg"
//             alt="Ornament K"
//             width={374}
//             height={494}
//             className=" w-[224px] lg:w-[374px]"
//           />

//           <div className="absolute top-[60px] left-[50px] right-0 lg:top-[100px] lg:left-[85px] flex items-center justify-center">
//             <Image
//               src="/images/Hero/LogoK.svg"
//               alt="Logo K"
//               width={98}
//               height={98}
//               className="object-contain  w-[59px] lg:w-[98px]"
//             />
//           </div>
//         </div>

//         {/* spacer — adjust h sampai semua ornament keliatan */}
//         <div className="h-[1070px] lg:h-[1820px]" />

//       </div>
//          <a href="#hero">
//           <p className="relative underline text-center font-quattrocento text-[12px] lg:text-[18px] text-[#37546B] pb-[39px]">
//             Return to envelope
//           </p>
//         </a>
//     </section>
//   );
// }

// OPSI HERO VERSI PERTAMA YAITU AMPLOP MENGGUNAKAN RIGHT BUKAN CENTER HORIZONTAL

// import Image from "next/image";

// export default function Hero() {
//   return (
//     <section
//       id="hero"
//       className="w-full pt-[67px] lg:pt-[71px] flex flex-col items-center justify-center overflow-x-hidden bg-[#F7F4EF]"
//     >
//       <div className="relative w-[390px] min-w-[390px] lg:w-[590px] lg:min-w-[590px] ">
//         <Image
//           src="/images/Hero/AmplopUtama.svg"
//           alt="Amplop Utama"
//           width={481}
//           height={481}
//           className="absolute right-[48px] lg:right-[29px] z-[2] w-[280px] lg:w-[481px] "
//         />

//         <Image
//           src="/images/Hero/Bungamawar.svg"
//           alt="Bunga Mawar"
//           width={237}
//           height={237}
//           className="absolute top-[200px] right-[23px] lg:top-[342px] lg:right-[-10px] z-[4] w-[138px] lg:w-[237px]"
//         />

//         <Image
//           src="/images/Hero/BungaBelakang.png"
//           alt="Bunga Mawar"
//           width={223}
//           height={223}
//           className="absolute top-[164px] right-[27px] w-[130px] lg:w-[223px]"
//         />

//         <Image
//           src="/images/Hero/BungaMawarKecil.svg"
//           alt="Bunga Mawar Kecil"
//           width={100}
//           height={99}
//           className="absolute top-[236px] right-[85px] lg:top-[396px] lg:right-[90px]  z-[8] w-[59px] lg:w-[100px]"
//         />

//         {/* PLEASE JOIN */}
//         <div className="absolute top-[145px] left-[15px] lg:top-[255px] lg:left-[-10px] z-[10] pointer-events-none">
//           <Image
//             src="/images/Hero/OrnamentNama.svg"
//             alt="Ornament Nama"
//             width={425}
//             height={672}
//             className=" w-[248px] lg:w-[425px]"
//           />

//           <div className="absolute inset-0 flex flex-col items-center justify-start mt-[108px] lg:mt-[200px] mr-[10px] px-2 ">
//             <p className="font-quattrocento text-[12px] lg:text-[18px] text-center text-[#37546B] leading-[14px] lg:leading-[23px]">
//               PLEASE JOIN US FOR
//               <br />
//               THE ENGAGEMENT
//               <br />
//               CELEBRATION OF
//             </p>

//             <div className="flex flex-col items-center justify-center gap-[6px] lg:gap-[15px] leading-none mt-[16px] lg:mt-[33px] ">
//               <p className="font-newserif text-[30px] lg:text-[46px] text-center text-[#37546B]">
//                 DESTINY
//               </p>
//               <p className="font-newscript text-[16px] lg:text-[22px] text-center text-[#37546B]">
//                 and
//               </p>
//               <p className="font-newserif text-[30px] lg:text-[46px] text-center text-[#37546B]">
//                 KENNY
//               </p>
//             </div>

//             <p className="font-quattrocento text-[12px] lg:text-[18px] text-center text-[#37546B] mt-[10px] lg:mt-[15px]">
//               JULY 11TH 2026
//             </p>
//           </div>
//         </div>

//         {/* THE HOUSE */}
//         <div className="absolute top-[264px] lg:top-[455px] right-[35px] lg:right-[9px] z-[7]">
//           <Image
//             src="/images/Hero/OrnamentKotak.svg"
//             alt="Ornament Kotak"
//             width={268}
//             height={181}
//             className="w-[156px] lg:w-[268px]"
//           />
//           <div className="absolute inset-0 flex flex-col items-center justify-center leading-[13px] lg:leading-[24px]">
//             <p className="font-quattrocento text-[12px] lg:text-[18px] text-center  text-[#37546B] mt-2 lg:mt-0">
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
//           alt="Ornament Lingkar"
//           width={228}
//           height={228}
//           className="absolute top-[343px] right-[61.5px] lg:top-[595px] lg:right-[58px] z-[7]  w-[133px] lg:w-[228px] pointer-events-none"
//         />

//         {/* CLICK HERE */}
//         <div className="absolute top-[360px] right-[10px] lg:top-[622px] lg:right-[-35px] z-[7] pointer-events-none">
//           <Image
//             src="/images/Hero/OrnamentDetails.svg"
//             alt="Bunga Mawar Kecil"
//             width={397}
//             height={397}
//             className=" w-[231px] lg:w-[397px]"
//           />
//           <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
//             <a href="#details" className="pointer-events-auto mt-[30px] lg:mt-[60px]">
//               <p className="font-quattrocento text-[12px] lg:text-[18px] uppercase text-[#37546B]">
//                 Click here to
//                 <br />
//                 see the
//               </p>
//               <h2 className="font-newscript text-[30px] lg:text-[46px] text-[#37546B] mt-1 lg:mt-3">
//                 Details
//               </h2>
//             </a>
//           </div>
//         </div>

//         {/* WISH */}
//         <div className="absolute top-[478px] lg:top-[813px] left-[70px] lg:left-[60px] z-[6] pointer-events-none">
//           <Image
//             src="/images/Hero/Wish.svg"
//             alt="Bunga Mawar Kecil"
//             width={271}
//             height={271}
//             className=" w-[149px] lg:w-[271px]"
//           />

//           <div className="absolute inset-0 flex flex-col items-center justify-center">
//             <a href="#gift" className="pointer-events-auto">
//               <p className="font-quattrocento text-[30px] lg:text-[52px] lg:mt-[18px] text-white">
//                 WISH
//               </p>
//             </a>
//           </div>
//         </div>

//         <Image
//           src="/images/Hero/OrnamentLingkar.svg"
//           alt="Bunga Mawar Kecil"
//           width={351}
//           height={351}
//           className="absolute top-[556px] lg:top-[953px] left-[100px] lg:left-[130px] z-[6] pointer-events-none  w-[204px] lg:w-[351px]"
//         />

//         {/* READ OUR */}
//         <div className="absolute top-[615px] lg:top-[1062px] left-[70px] lg:left-[70px] z-[10]">
//           <Image
//             src="/images/Hero/PasFoto1.svg"
//             alt="Bunga Mawar Kecil"
//             width={225}
//             height={400}
//             className=" w-[131px] lg:w-[225px]"
//           />
//           <a href="#details">
//             <p className="absolute bottom-[25px] lg:bottom-[46px] left-0 right-0 text-center uppercase font-newserif text-[12px] lg:text-[18px] text-[#37546B]">
//               READ OUR
//             </p>
//           </a>
//         </div>

//         <Image
//           src="/images/Hero/OrnamentmawarKanan.svg"
//           alt="Bunga Mawar Kecil"
//           width={133}
//           height={267}
//           className="absolute top-[623px] left-[192px] lg:top-[1070px] lg:left-[280px] z-[9] pointer-events-none  w-[78px] lg:w-[135px]"
//         />

//         {/* KINDLY */}
//         <div className="absolute top-[502px] lg:top-[860px] right-[32px] lg:right-[20px] z-[8] pointer-events-none">
//           <Image
//             src="/images/Hero/OrnamentKindly.svg"
//             alt="Bunga Mawar Kecil"
//             width={247}
//             height={497}
//             className=" w-[144px] lg:w-[247px] pointer-events-none"
//           />
//           <div className="absolute inset-0 flex flex-col items-center justify-center mt-[90px] text-center lg:mt-[160px]">
//             <a href="#rsvp" className="pointer-events-auto">
//               <p className="uppercase underline decoration-1 underline-offset-[2px]  font-quattrocento text-[18px] lg:text-[26px] text-white">
//                 KINDLY
//               </p>
//               <p className="uppercase underline decoration-1 underline-offset-[2px]  font-quattrocento text-[18px] lg:text-[26px] text-white">
//                 RSVP
//               </p>
//               <p className="uppercase underline decoration-1 underline-offset-[2px]  font-quattrocento text-[18px] lg:text-[26px] text-white">
//                 HERE
//               </p>
//             </a>
//           </div>
//         </div>

//         {/* LOVE STORY */}
//         <div className="absolute top-[750px] lg:top-[1290px] left-[103px] lg:left-[123px] z-[9]">
//           <Image
//             src="/images/Hero/PasFoto2.svg"
//             alt="Bunga Mawar Kecil"
//             width={361}
//             height={361}
//             className=" w-[210px] lg:w-[361px]"
//           />

//           <a href="#story">
//             <p className="absolute bottom-[11px] lg:bottom-[20px] left-0 right-0 text-center uppercase font-newscript text-[12px] lg:text-[18px] text-[#37546B]">
//               L<span className="font-newserif">OVE STORY</span>
//             </p>
//           </a>
//         </div>

//         <Image
//           src="/images/Hero/MawarBiru.svg"
//           alt="Bunga Mawar Kecil"
//           width={172}
//           height={229}
//           className="absolute top-[810px] lg:top-[1395px] left-[72px] lg:left-[70px] z-[10] pointer-events-none  w-[100px] lg:w-[172px]"
//         />

//         <div className="absolute top-[717px] lg:top-[1238px] right-[4px] lg:right-[-22px] z-[10] pointer-events-none">
//           <Image
//             src="/images/Hero/OrnamentK.svg"
//             alt="Ornament K"
//             width={374}
//             height={494}
//             className=" w-[224px] lg:w-[374px]"
//           />

//           <div className="absolute top-[60px] left-[50px] right-0 lg:top-[100px] lg:left-[85px] flex items-center justify-center">
//             <Image
//               src="/images/Hero/LogoK.svg"
//               alt="Logo K"
//               width={98}
//               height={98}
//               className="object-contain  w-[59px] lg:w-[98px]"
//             />
//           </div>
//         </div>

//         {/* spacer — adjust h sampai semua ornament keliatan */}
//         <div className="h-[1070px] lg:h-[1820px]" />

//       </div>
//          <a href="#hero">
//           <p className="relative underline text-center font-quattrocento text-[12px] lg:text-[18px] text-[#37546B] pb-[39px]">
//             Return to envelope
//           </p>
//         </a>
//     </section>
//   );
// }
