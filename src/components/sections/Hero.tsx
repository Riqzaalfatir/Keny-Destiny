// src/components/Hero.tsx

import Image from "next/image";

export default function Hero() {
  return (
    <section className="w-full pt-[67px] flex justify-center overflow-x-hidden bg-[#F7F4EF] bg-[#F7F4EF]">
      <div className="relative w-[390px] min-w-[390px]">
        <Image
          src="/images/Hero/AmplopUtama.svg"
          alt="Amplop Utama"
          width={280}
          height={280}
          className="absolute right-[48px] z-[2]"
        />

        <Image
          src="/images/Hero/Bungamawar.svg"
          alt="Bunga Mawar"
          width={138}
          height={138}
          className="absolute top-[200px] right-[23px] z-[4]"
        />

        <Image
          src="/images/Hero/BungaMawarKecil.svg"
          alt="Bunga Mawar Kecil"
          width={59}
          height={58}
          className="absolute top-[236px] right-[85px] z-[8]"
        />

      {/* PLEASE JOIN */}
        <div className="absolute top-[145px] left-[15px] z-[10]">
          <Image
            src="/images/Hero/OrnamentNama.svg"
            alt="Ornament Nama"
            width={248}
            height={392}
          />

          <div className="absolute inset-0 flex flex-col items-center justify-center px-2">
            <p className="font-quattrocento text-[12px] text-center text-[#37546B]">
              PLEASE JOIN US
              <br />
              FOR THE
              <br />
              ENGAGEMENT
              <br />
              CELEBRATION OF
            </p>
            <p className="font-newserif text-[30px] text-center text-[#37546B]">
              DESTINY
            </p>
            <p className="font-newscript text-[16px] text-center text-[#37546B]">
              and
            </p>
            <p className="font-newserif text-[30px] text-center text-[#37546B]">
              KENNY
            </p>
            <p className="font-quattrocento text-[12px] text-center text-[#37546B]">
              JULY 11TH 2026
            </p>
          </div>
        </div>

      {/* THE HOUSE */}
        <div className="absolute top-[264px] right-[35px] z-[7]">
          <Image
            src="/images/Hero/OrnamentKotak.svg"
            alt="Ornament Kotak"
            width={156}
            height={106}
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center leading-[13px]">
            <p className="font-quattrocento text-[12px] text-center  text-[#37546B] mt-2">
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
          alt="Bunga Mawar Kecil"
          width={133}
          height={133}
          className="absolute top-[343px] right-[61.5px] z-[7]"
        />

      {/* CLICK HERE */}
      <div className="absolute top-[360px] right-[10px] z-[7]">
        <Image
          src="/images/Hero/OrnamentDetails.svg"
          alt="Bunga Mawar Kecil"
          width={231}
          height={231}
        />
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <p className="font-quattrocento text-[12px] uppercase text-[#37546B]">
              Click here<br />
              to see the
            </p>
            <h2 className="font-newscript text-[30px] text-[#37546B]">Details</h2>
        </div>
      </div>

      {/* WISH */}
      <div className="absolute top-[478px] left-[70px] z-[6]">
        <Image
          src="/images/Hero/OrnamentKotakBiru.png"
          alt="Bunga Mawar Kecil"
          width={149}
          height={149}
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <p className="font-quattrocento text-[30px] text-white">WISH</p>
        </div>
      </div>

        <Image
          src="/images/Hero/OrnamentLingkar.svg"
          alt="Bunga Mawar Kecil"
          width={204}
          height={204}
          className="absolute top-[556px] left-[100px] z-[6]"
        />

        {/* READ OUR */}
     <div className="absolute top-[615px] left-[70px] z-[10]">
  <Image
    src="/images/Hero/PasFoto1.svg"
    alt="Bunga Mawar Kecil"
    width={131}
    height={233}
  />

  <p className="absolute bottom-[25px] left-0 right-0 text-center uppercase font-newserif text-[12px] text-[#37546B]">
    READ OUR
  </p>
</div>

        <Image
          src="/images/Hero/OrnamentmawarKanan.svg"
          alt="Bunga Mawar Kecil"
          width={78}
          height={156}
          className="absolute top-[623px] left-[192px] z-[9]"
        />

      {/* KINDLY */}
      <div className="absolute top-[502px] right-[32px] z-[8]">
        <Image
          src="/images/Hero/OrnamentKindly.svg"
          alt="Bunga Mawar Kecil"
          width={144}
          height={290}
        />
         <div className="absolute inset-0 flex flex-col items-center justify-center mt-[88px]">
           <p className="uppercase underline font-quattrocento text-[18px] text-white">KINDLY</p>
           <p className="uppercase underline font-quattrocento text-[18px] text-white">RSVP</p>
           <p className="uppercase underline font-quattrocento text-[18px] text-white">HERE</p>
        </div>
      </div>

      {/* LOVE STORY */}
      <div className="absolute top-[750px] left-[103px] z-[9]">
        <Image
          src="/images/Hero/PasFoto2.svg"
          alt="Bunga Mawar Kecil"
          width={210}
          height={210}
        />

        <div className="absolute bottom-[11.5px] left-0 right-0 text-center uppercase font-newscript text-[12px] text-[#37546B]">
          L<span className="font-newserif">OVE STORY</span>
        </div>
      </div>

        <Image
          src="/images/Hero/MawarBiru.svg"
          alt="Bunga Mawar Kecil"
          width={100}
          height={133}
          className="absolute top-[810px] left-[72px] z-[10]"
        />

        <Image
          src="/images/Hero/OrnamentK.svg"
          alt="Bunga Mawar Kecil"
          width={224}
          height={296}
          className="absolute top-[717px] right-[4px] z-[10]"
        />

        {/* spacer — adjust h sampai semua ornament keliatan */}
        <div className="h-[1070px]" />

        {/* Return to envelope selalu di bawah spacer */}
        <p className="relative text-center font-quattrocento text-[12px] text-[#37546B] pb-[39px]">
          Return to envelope
        </p>
      </div>
    </section>
  );
}
