import React from "react";
import mission from "../../public/assets/mission.gif";
import Image from "next/image";

const MissionStatement = () => {
  return (
    <div className="py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 max-w-[1100px] mx-auto gap-6">
        <div className="bg-[#f8f8f8] p-10 flex flex-col gap-6 shadow-md relative">
          <div className="hidden md:block absolute md:top-[-20px] md:left-[250px]">
            <Image src={mission} width={40} height={50} alt="mission" />
          </div>
          <h1 className="text-center font-bold text-2xl">Mission Statement</h1>
          <p className="text-center text-base md:text-sm font-sans">
            At House of Flourish Nigeria Limited, our mission is to leverage
            over a decade of experience in manufacturing, farming, real estate,
            and education to provide the highest quality bottle and sachet water
            products. We strive to set the industry benchmark for excellence by
            delivering specialized water solutions that promote health, quality,
            and customer satisfaction. With a commitment to innovation,
            integrity, and efficiency, we aim to contribute to the advancement
            of food security, poverty reduction, and employment opportunities in
            our community.
          </p>
        </div>
        <div className="bg-[#f8f8f8] p-10 flex flex-col gap-6 shadow-md relative">
          <div className="hidden md:block absolute top-[-20px] left-[250px]">
            <Image src={mission} width={40} height={50} alt="mission" />
          </div>
          <h1 className="text-center font-bold text-2xl">Vision Statement</h1>
          <p className="text-center text-base md:text-sm font-sans">
            Our vision at House of Flourish Nigeria Limited is to be the premier
            provider of specialized bottle and sachet water products, recognized
            for our unwavering dedication to quality, reliability, and customer
            service excellence. We aspire to continuously raise the standard for
            manufacturing quality and healthy water options, setting new
            benchmarks in the industry. Through sustainable practices and
            proactive initiatives, we envision a future where our products play
            a pivotal role in enhancing water security, improving health
            outcomes, and fostering economic prosperity across our region and
            beyond.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MissionStatement;
