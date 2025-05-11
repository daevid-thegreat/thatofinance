import React from "react";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare,
} from "react-icons/fa";
import Link from "next/link";

const Contact = () => {
  return (
    <div className="flex justify-center">
      <div className="mx-14">
        <div className="text-4xl font-bold text-blue-950 mb-4 sm:text-md sm:w-20">
          Contact Us
        </div>
        <div className="text-blue-950 text-lg">Location here</div>
      </div>
      <div className="mx-14">
        <div>
          <div className="text-blue-950 font-semibold text-xl my-4 ">Phone</div>
          <div className="text-blue-800">
            <Link href="tel:+27673526953">+27 67 352 6953</Link>
          </div>
        </div>
        <div>
          <div className="text-blue-950 font-semibold text-xl my-4 ">Email</div>
          <div className="text-blue-800">
            <Link href="mailto:tharrcrcrcrc">contact@thathofinance.com</Link>
          </div>
        </div>
        <div>
          <div className="text-blue-950 font-semibold text-xl my-4 ">
            Socials
          </div>
          <div className="flex">
            <FaFacebookSquare className="text-3xl mr-2 text-blue-950" />
            <FaTwitterSquare className="text-3xl mx-2 text-blue-950" />
            <FaInstagramSquare className="text-3xl mx-2 text-blue-950" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
