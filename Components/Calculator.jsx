"use client";

import React, { useState } from "react";

function LoanCalculator() {
  const [loanAmount, setLoanAmount] = useState(0);
  const [loanPeriod, setLoanPeriod] = useState(0);
  const [repaymentAmount, setRepaymentAmount] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const calculateLoan = () => {
    setIsLoading(true); // Set loading to true when calculation starts

    const initiationFee = 181;
    let interestRate;

    const parsedLoanPeriod = Number(loanPeriod);

    if (parsedLoanPeriod === 1) {
      interestRate = 0.12;
    } else if (parsedLoanPeriod === 2) {
      interestRate = 0.15; // Corrected the interest rate for the second month
    } else if (parsedLoanPeriod === 3) {
      interestRate = 0.29;
    } else {
      setIsLoading(false); // Reset loading if the loan period is not valid
      return alert("Please enter a valid loan period");
    }

    const monthlyInterestRate = interestRate;
    const totalMonths = loanPeriod;
    const monthlyPayment =
      (loanAmount * monthlyInterestRate) /
      (1 - Math.pow(1 + monthlyInterestRate, -totalMonths));
    const totalPayment = monthlyPayment * totalMonths + initiationFee;
    const totalInterestPaid = totalPayment - loanAmount;

    setIsLoading(false); // Set loading to false when calculation is complete
    setRepaymentAmount(parseFloat(monthlyPayment.toFixed(2))); // Parse as float
  setTotalInterest(parseFloat(totalInterestPaid.toFixed(2))); // Parse as float
  };

  return (
    <div className="flex flex-col self-center mx-8 sm:text-sm">
      <div className="p-4">
        <h1 className="text-4xl font-bold my-6 text-blue-950 sm:text-sm sm:font-bold">
          Calculate Your Loan
        </h1>
        <div className="my-6">
          <label
            className="block mb-2 font-bold text-blue-950 sm:text-sm"
            htmlFor="loanAmount"
          >
            Loan amount
          </label>
          <input
            id="loanAmount"
            className="rounded-[8px] py-4 w-96 px-4 mb-2 leading-tight border-gray-400 bg-white focus:outline-none focus:bg-white focus:border-gray-500 sm:w-24"
            type="number"
            value={loanAmount}
            onChange={(e) => setLoanAmount(e.target.value)}
          />
        </div>
        <div className="mb-2">
          <label
            className="block my-6 font-bold text-blue-950 sm:text-sm"
            htmlFor="loanPeriod"
          >
            Loan period (months)
          </label>
          <input
            id="loanPeriod"
            className="rounded-[8px] py-4 w-96 px-4 mb-2 leading-tight border-gray-400 bg-white focus:outline-none focus:bg-white focus:border-gray-500 sm:w-24"
            type="number"
            min={1}
            max={3}
            value={loanPeriod}
            onChange={(e) => setLoanPeriod(e.target.value)}
          />
        </div>
        <button
          className={`bg-orange-500 hover:bg-orange-700 text-white font-bold my-6 py-4 px-8 rounded sm:text-sm sm:p-4 ${
            isLoading ? "opacity-50 cursor-wait" : ""
          }`}
          onClick={calculateLoan}
          disabled={isLoading}
        >
          {isLoading ? "Calculating..." : "Calculate"}
        </button>
        <div className="mt-8 sm:-m-3 sm:text-sm">
          <div className="text-xl my-2 text-blue-950 sm:text-sm">
            Monthly Repayment: R{repaymentAmount}
          </div>
          <div className="text-xl my-2 text-blue-950 sm:text-sm">
            Total Interest: R{totalInterest}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoanCalculator;
