import React from "react";
import Link from "next/link";

const AboutUs = () => {
  return (
    <div className="about-bg about-font py-20 text-[#ffffff]">
      <h4 className="service-header text-center text-5xl">ABOUT US</h4>
      <p className="px-4 md:px-0 text-center max-w-[1000px] mx-auto mt-7 font-sans">
        With over a decade of expertise in manufacturing, agriculture, real
        estate, and education, House of Flourish Nigeria Limited is a leading
        producer of specialized bottled and sachet water renowned for its
        superior quality. Our skilled team sets the standard for excellence in
        manufacturing and ensures top-notch products that meet the highest
        standards. We offer swift delivery services covering a significant
        portion of Eti-osa LGA, ensuring prompt service to our valued clients.
        Each product is meticulously inspected to ensure unparalleled quality
        before reaching our customers.
      </p>

      <div className="flex flex-col md:flex-row gap-7 md:gap-4 mx-auto mt-6 items-center justify-center p-2 md:p-0">
        <button className="rounded-l-[50px] rounded-r-[50px] py-2 px-10 border-[5px] hover:border-red-700 border-[#2828d7] bg-white text-black ">
          <div className="flex">
            <span></span>
            <Link href="/contact-us">
              <div className="flex flex-col">
                <p>GET IN TOUCH NOW</p>
                <p className="text-sm font-sans">Offer Friendly Service</p>
              </div>
            </Link>
          </div>
        </button>
      </div>
    </div>
  );
};

export default AboutUs;
