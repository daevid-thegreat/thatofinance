import React from "react";
import LoanCalculator from "@/Components/Calculator";

const Hero = () => {
  return (
    <div className="grid grid-cols-2 justify-center h-[83vh]">
      <div className="w-full bg-[url('/hero.jpg')] bg-cover bg-no-repeat flex justify-center items-center">
        <div className="flex flex-col justify-center items-center">
          <div className="text-4xl font-bold text-white  sm:p-2 md:px-2 md:text-center lg:px-2">
          Get loans Quick and easy
          </div>
          <div className="text-sm text-white sm:p-4 sm:text-center px-10 md:text-center lg:px-2 lg:text-center">
           Quick and easy access to loans today with Thato Finance. We are a registered credit provider with the National Credit Regulator (NCR) and we are committed to providingaffordable short-term loans.
          </div>
        </div>
      </div>
      <div className=" bg-blue-200">
        <LoanCalculator />
      </div>
    </div>
  );
};
export default Hero;
