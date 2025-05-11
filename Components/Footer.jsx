import React from "react";
import Link from "next/link";
import Image from "next/image";
const Footer = () => {
  return (
    <div className="flex bg-blue-950 mt-8 py-8 justify-around md:flex-col">
      <div className="w-96 ">
        <div className="sm:flex sm:mr-60">
          <Image src={'/thato.jpg'} width={120} height={80} alt="logo" className="mx-auto w-52 " />
        </div>
        <div className="text-white sm:pl-5">
         Thato Finance is registered and regulated by the National Credit Regulator (NCRCP16246) - (Reg No. 202/592666/07), and is dedicatd to providing transparent and affordable credit solutions. Our commitment to customer satisfaction, integrity and professionalism sets us apart in the industry.
        ¬</div>
        <p>"finance when you need it most"</p>
      </div>
      <div>
        <div className="text-white text-2xl font-bold mt-20 sm:pl-5">
          Quick Links
        </div>
        <div className="my-6 text-white sm:pl-5">
          <ul>
            <li className="my-2">
              <Link href="/">Home</Link>
            </li>
            <li className="my-2">
              <Link href="/">Terms Of Use</Link>
            </li>
            <li className="my-2">
              <Link href="/">Privacy Policy</Link>
            </li>
            <li className="my-2">
              <Link href="/admin/signin">Staff Login</Link>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <div className="text-white text-2xl font-bold mt-20 sm:pl-5">
          Open Hours
        </div>
        <div className="my-6 text-white sm:pl-5">
          <ul>
            <li className="my-2">Monday - Thursday: 8am - 4:30pm</li>
            <li className="my-2">Fridays: 8am - 4pm</li>
            <li className="my-2">Saturday: 9am - 3pm</li>
            <li className="my-2">Sunday: Closed</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Footer;
