import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className=" min-h-[200px] bg-[#222222] text-white px-4 py-10 md:py-16 border-dashed border-b-[1px] border-b-white">
      <div className="mx-auto max-w-[1100px] grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-8 ">
        <div className="flex flex-col gap-2">
          <span className="hover:opacity-70 flex items-center flex-shrink-0">
            <Image
              src="/assets/nav-logo.jpg"
              width={100}
              height={65}
              alt="footer-logo"
            />
          </span>

          <span className="text-sm">House of Flourish Nigeria Ltd</span>

          <p className="text-sm">
            10 Years Of Manufacturing Excellence With Quality At It’s Best!
          </p>
        </div>

        {/* Contact us */}
        <div className="pt-2 flex flex-col gap-2 md:justify-center md:items-center">
          <Link href="/contact">
            <button className="hover:opacity-70 flex items-center flex-shrink-0 font-bold hover:underline">
              Contact Us
            </button>
          </Link>
          <span className="text-sm">
            Phone: +(234) 08083760044
            <br />
          </span>
          <span className="text-sm">
            <p>Email: sales@houseofflourish.com.ng</p>
          </span>
          <span className="text-sm">
            Address: Ogunfayo Estate, Km 36, Lekki-Epe Expway, Eputu Bus Stop,
            Ibeju Lekki, Lagos State
          </span>
        </div>
        {/* <div className="pt-2 flex flex-col gap-2">
          <h1 className="font-bold">Connect With Us</h1>
          <div className="flex flex-row gap-3">
            <button className="hover:opacity-70">
              <Link href="https://www.linkedin.com/in/atoba-farms-bb0b23302/">
                <FaLinkedin size={30} />
              </Link>
            </button>
          </div>
        </div> */}

        {/* Products*/}
        <div className="pt-2 flex flex-col gap-2 items-start md:justify-center md:items-center">
          <button className="font-bold">Projects</button>
          <Link href="/contact">
            <button className="text-sm hover:opacity-70 flex items-center flex-shrink-0 hover:underline">
              Water Production
            </button>
          </Link>
          <Link href="/contact">
            <button className="text-sm hover:opacity-70 flex items-center flex-shrink-0 hover:underline">
              Agriculture
            </button>
          </Link>
          <Link href="/contact">
            <button className="text-sm hover:opacity-70 flex items-center flex-shrink-0 hover:underline">
              Education
            </button>
          </Link>
          <Link href="/contact">
            <button className="text-sm hover:opacity-70 flex items-center flex-shrink-0 hover:underline">
              Real Estate
            </button>
          </Link>
        </div>
        {/* Company*/}
        <div className="pt-2 flex flex-col gap-2 items-start md:justify-center md:items-center">
          <button className="font-bold">Company</button>
          <Link href="/contact">
            <button className="text-sm hover:opacity-70 flex items-center flex-shrink-0 hover:underline">
              Home
            </button>
          </Link>
          <Link href="/contact">
            <button className="text-sm hover:opacity-70 flex items-center flex-shrink-0 hover:underline">
              About
            </button>
          </Link>
          <Link href="/contact">
            <button className="text-sm hover:opacity-70 flex items-center flex-shrink-0 hover:underline">
              Contacts
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
