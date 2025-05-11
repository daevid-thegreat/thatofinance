import React from "react";

const About = () => {
  return (
    <div className="flex flex-col text-center my-8 py-10">
      <div>
        <div className="text-4xl font-bold text-blue-950">About Us</div>
        <div className="px-14 my-4 w-4/12 text-center mx-auto  sm:w-96 md:w-96 lg:w-96">
    Thato Finance offers loans ranging from R350 to R3500 with a repayment period of up to 3 months. Our mision is to provide efficient and effective financial services to South Africans, both salaried and self-employed individuals, including juristic persons. Whether you need a personal loan or business loan. Thato finance is here to help
        </div>
      </div>

      <div className="px-20">
        <div className="text-3xl font-bold text-blue-950 my-8 py-4">
          Why Us?
        </div>
        <div className="grid grid-cols-3 sm:flex sm:flex-col sm:gap-5 md:flex md:flex-col lg:flex lg:flex-row mx-auto">
          <div className="flex flex-col mx-3 sm:mx-1 rounded-md">
            <div className="text-blue-950 font-semibold text-xl my-4 ">
              Quick & easy
            </div>
            <div className="p-10 shadow-lg sm:shadow-lg sm:p-5 sm:text-center md:shadow-lg md:p-10 lg:p-14  xl:p-15 ">
             Experience a hassle-free application process when you apply for a loan with Thato Finance. Our application process is quick and easy. You can apply for a loan online or visit our offices to apply for a loan.
            </div>
          </div>

          <div className="flex flex-col mx-3 sm:mx-1 rounded-md">
            <div className="text-blue-950 font-semibold text-xl my-4 ">
              Low Interest
            </div>
            <div className="sm:shadow-lg  sm:p-5 sm:text-center shadow-lg p-10  lg:p-14 2xl:p-20 ">
              We understand the value of your time and money. That is why we offer low interest rates on our loans. We also offer flexible repayment terms to suit your budget, ensuring a stress-free repayment experience.
            </div>
          </div>

          <div className="flex flex-col mx-3 sm:mx-1 rounded-md">
            <div className="text-blue-950 font-semibold text-xl my-4 ">
              Quick repayment
            </div>
            <div className="sm:shadow-lg sm:p-5 lg:p-14 shadow-lg p-16 ">
           We also offer flexible repayment terms to suit your budget, ensuring a stress-free repayment experience.   
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
