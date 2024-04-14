"use client";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="hero-image min-h-screen">
      <div className="bg-text mt-28">
        <div className="flex flex-col gap-8">
          <h1 className="text-2xl font-bold font-sans">
            Healthy Weight, Nutrition, and Physical Activity
          </h1>

          <h4 className="text-6xl font-bold leading-[70px] font-sans">
            FLOURISH COOL WATER
          </h4>

          <div>
            <button className="text-white font-medium text-sm hover:opacity-70 bg-[#4175fc] rounded-l-[100px] rounded-r-[100px] px-8 py-3 transition duration-300 ease-in-out">
              <Link href="/about-us">Learn More</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
