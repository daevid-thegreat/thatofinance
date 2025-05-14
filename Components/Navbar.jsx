import Link from "next/link";
import Image from "next/image";
const Navbar = () => {
  return (
    <div>
      {/* <div className="flex space-x-8 py-2 px-4 bg-black text-white">
        <div className="fontSize">Location</div> <span> &bull; </span>
        <div>Number </div>
        <span> &bull;</span>
        <div>Email</div>{" "}
      </div> */}
      <div className="flex place-items-center justify-between bg-blue-600 text-white px-24 sm:px-10 py-2">
        <div className="logo">
          <Image src={"/thato.jpg"} width={120} height={80} className="mx-5 pr-14" alt="thato finance logo"/>          {/* <img
            src={logo}
            width={20}
            height={50}
            alt="Thatofinance Logo"
          /> */}
        </div>

        <div className="flex sm:-mx-8 justify-evenly gap-2 space-x-8 sm:space-x-2 py-2">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/contact/Page">Contact</Link>
        </div>
        <div className="ml-2 px-5 text-xs py-4 bg-orange-600 rounded-[18px] sm:mx-10 sm:px-10 sm:text-left sm:rounded-[15px]">
          <Link href="/apply"> Get Started</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
