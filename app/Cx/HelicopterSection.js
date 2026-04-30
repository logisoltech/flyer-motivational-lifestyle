import Image from "next/image";

export default function HelicopterSection() {
  return (
    <section id="about" className="w-full bg-[#e3e1d3]">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-10 px-6 py-14 sm:px-10 md:flex-row md:justify-center md:gap-28 md:py-16 lg:gap-36">
        <div className="w-full max-w-[280px] sm:max-w-[340px] md:max-w-[390px]">
          <Image
            src="/helicopter.png"
            alt="Flying pod vehicle"
            width={420}
            height={420}
            className="h-auto w-full rounded-[1.75rem] object-cover"
            priority={false}
          />
        </div>

        <div className="w-full max-w-88 text-left sm:max-w-[24rem] md:max-w-104">
          <h2 className="text-4xl font-extrabold uppercase leading-[1.05] tracking-[0.01em] text-[#1f212b] sm:text-[2.9rem]">
            1 Flyer IFFO Park Go/Live/Park Anywhere
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#262626] sm:text-[1.03rem]">
            Introducing our versatile flying drone, designed to soar through the
            skies and reach any destination with ease. Equipped with cutting-edge
            A.I. technology, it navigates effortlessly, making it perfect for
            exploration, photography, or delivery. Experience the freedom of
            flight like never before!
          </p>
        </div>
      </div>
    </section>
  );
}
