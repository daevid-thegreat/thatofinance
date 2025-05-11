import React from "react";

const Services = () => {
  return (
    <div className="bg-blue-100 flex flex-col text-center my-8 py-16">
      <div className="text-4xl font-bold text-blue-950">Discover Loans</div>
      <div className="grid grid-cols-4 my-14 px-8 mx-8 sm:flex sm:flex-col sm:gap-10 md:flex flex-col gap-5">
        <div className="border-2 py-4 px-8 rounded-[12px] border-blue-950 ">
          <div className="text-blue-950 font-semibold text-xl my-4 ">
            Personal Loan
          </div>
          <div className="">
           Need funds for personal expenses? Our personal loans offer the financial flexibility you seek. Our personal loans are crafted to meet your financial needs. Whether you need funds for a wedding, medical expenses, or a holiday, we are here to help.
          </div>
        </div>
        <div className="border-2 py-4 px-8 rounded-[12px] border-blue-950">
          <div className="text-blue-950 font-semibold text-xl my-4">
            Business Loan
          </div>
          <div className="">
          Empowering small business is one of our missions. We offer business loans to help you grow your business. Whether you need funds to purchase stock, equipment, or to expand your business, we are here to help.
          </div>
        </div>
        <div className="border-2 py-4 px-8 rounded-[12px] border-blue-950">
          <div className="text-blue-950 font-semibold text-xl my-4">
            Education Loan
          </div>
          <div className="">
            Invest in your future with our education loans. We offer education loans to help you pay for your tuition fees, books, and other education-related expenses. Our education loans are designed to help you achieve your academic goals.
          </div>
        </div>
        <div className="border-2 py-4 px-8 rounded-[12px] border-blue-950">
          <div className="text-blue-950 font-semibold text-xl my-4">
            Health Loan
          </div>
          <div className="">
           Your well-being matters alot and that is why we offer health loans to help you pay for your medical expenses. Our health loans are designed to help you pay for your medical bills, medical aid, and other health-related expenses.
          </div>
        </div>
      </div>
    </div>
  );
};
export default Services;
