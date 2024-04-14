import React from "react";
import girlicon from "../../public/assets/girl.png";
import corn from "../../public/assets/corn.gif";
import graduate from "../../public/assets/graduate.gif";
import house from "../../public/assets/house.gif";
import water from "../../public/assets/water.gif";
import Image from "next/image";

const WhyUS = () => {
  return (
    <div className="min-h-[500px] px-4 lg:px-0 py-20 bg-[#f6f6f6]">
      <div className="max-w-[1100px] mx-auto">
        <h6 className="text-center text-5xl service-header mb-3">
          WHY CHOOSE US
        </h6>

        <div className="hidden lg:block relative">
          <span className="rounded absolute left-[-200px] top-[32px]">
            <Image src={girlicon} width={270} height={500} alt="girl-icon" />
          </span>
        </div>

        <div className="max-w-[1000px] mt-10 mx-auto font-sans">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-9 md:gap-7">
            <div className="flex gap-3">
              <div className="rounded inline-block">
                <Image src={water} width={100} height={50} alt="cheque" />
              </div>
              <div className="flex flex-col gap-3">
                <h5 className="font-bold text-lg">Water Production</h5>
                <p className="text-justify text-sm">
                  With cutting-edge technology and unwavering commitment to
                  quality, we deliver refreshing and pristine bottled and sachet
                  water to meet your hydration needs.
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="rounded inline-block">
                <Image src={corn} width={100} height={50} alt="sun-gif" />
              </div>
              <div className="flex flex-col gap-3">
                <h5 className="font-bold text-lg">Agriculture</h5>
                <p className="text-justify text-sm">
                  By obtaining a better growth rate in this crucial area of the
                  economy, House of Flourish Nig Ltd. promotes food security,
                  the reduction of poverty, and employment possibilities
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="rounded inline-block">
                <Image src={graduate} width={130} height={50} alt="sun-gif" />
              </div>
              <div className="flex flex-col gap-3">
                <h5 className="font-bold text-lg">Education</h5>
                <p className="text-justify text-sm">
                  House of Flourish Nig Ltd. is a strong supporter of education
                  since it equips people with the knowledge and abilities
                  required to maintain good health, find employment, and promote
                  tolerance.
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="rounded inline-block">
                <Image src={house} width={100} height={50} alt="sun-gif" />
              </div>
              <div className="flex flex-col gap-3">
                <h5 className="font-bold text-lg">Real Estate</h5>
                <p className="text-justify text-sm">
                  From residential to commercial properties, we strive to
                  deliver exceptional service and unparalleled value in every
                  transaction
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUS;
