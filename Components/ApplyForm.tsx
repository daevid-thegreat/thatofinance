"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from 'axios';

type FormData = {
  loanType: string;
  loanAmount: number;
  loanTerm: number;
  firstName: string;
  lastName: string;
  address: string;
  idNumber: string;
  maritalStatus: string;
  maritalProperty: string;
  gender: string;
  cell: string;
  whatsapp: string;
  email: string;
  race: string;
  employer: string;
  employmentType: string;
  lengthOfEmployment: number;
  employeeNumber: string;
  dependants: number;
  salary: number;
  employerTelephone: string;
  employerEmail: string;
  netIncome: number;
  basicIncome: number;
  livingExpenses: number;
  monthlyLoanRepayments: number;
  totalExpenses: number;
  bankName: string;
  accountNumber: string;
  accountHolder: string;
  branchCode: string;
  idDocument: File | null;
  payslip: File | null;
  bankStatement: File | null;
};

const ApplyForm = () => {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [error, setError] = useState<string | null>(null);
  const [buttonLoading, setButtonLoading] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    loanType: "",
    loanAmount: 0,
    loanTerm: 0,
    firstName: "",
    lastName: "",
    address: "",
    idNumber: "",
    maritalStatus: "",
    maritalProperty: "",
    gender: "",
    cell: "",
    whatsapp: "",
    email: "",
    race: "",
    employer: "",
    employmentType: "",
    lengthOfEmployment: 0,
    employeeNumber: "",
    dependants: 0,
    salary: 0,
    employerTelephone: "",
    employerEmail: "",
    netIncome: 0,
    basicIncome: 0,
    livingExpenses: 0,
    monthlyLoanRepayments: 0,
    totalExpenses: 0,
    bankName: "",
    accountNumber: "",
    accountHolder: "",
    branchCode: "",
    idDocument: null,
    payslip: null,
    bankStatement: null,
  });

  const handleFileUpload = async (file: File, applicationId: string, type: 'id' | 'payslip' | 'bankStatement') => {
    try {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('applicationId', applicationId);
      formData.append('documentType', type);

      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('File upload failed');
      }

      return await response.json();
    } catch (error) {
      console.error('Upload error:', error);
      throw error;
    }
  };

  const validation = () => {
    if (formData.loanAmount < 350 || formData.loanAmount > 3500) {
      setError("Loan amount must be between R350 and R3500");
      return false;
    }
    if (formData.loanTerm < 1 || formData.loanTerm > 3) {
      setError("Loan term must be between 1 and 3 months");
      return false;
    }
    if (!formData.firstName) {
      setError("First name is required");
      return false;
    }
    if (!formData.lastName) {
      setError("Last name is required");
      return false;
    }
    if (!formData.email) {
      setError("Email is required");
      return false;
    }
    if (!formData.cell) {
      setError("Phone number is required");
      return false;
    }
    if (!formData.address) {
      setError("Address is required");
      return false;
    }
    if (!formData.idNumber) {
      setError("ID number is required");
      return false;
    }
    if (!formData.employer) {
      setError("Employer name is required");
      return false;
    }
    if (!formData.lengthOfEmployment) {
      setError("Length of employment is required");
      return false;
    }
    if (!formData.employeeNumber) {
      setError("Employee number is required");
      return false;
    }
    if (!formData.employerTelephone) {
      setError("Employer telephone is required");
      return false;
    }
    if (!formData.employerEmail) {
      setError("Employer email is required");
      return false;
    }
    if (!formData.bankName) {
      setError("Bank name is required");
      return false;
    }
    if (!formData.accountHolder) {
      setError("Account holder is required");
      return false;
    }
    if (!formData.accountNumber) {
      setError("Account number is required");
      return false;
    }
    if (!formData.branchCode) {
      setError("Branch code is required");
      return false;
    }
    if (!formData.idDocument) {
      setError("ID document is required");
      return false;
    }
    if (!formData.payslip) {
      setError("Payslip is required");
      return false;
    }
    if (!formData.bankStatement) {
      setError("Bank statement is required");
      return false;
    }
    return true;
  };

  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    setButtonLoading(true);
    setError(null);

    if (!validation()) {
      setButtonLoading(false);
      return;
    }

    try {
      // First submit the application data
      const response = await axios.post('/api/applications', {
        loanType: formData.loanType,
        firstName: formData.firstName,
        lastName: formData.lastName,
        address: formData.address,
        idNumber: formData.idNumber,
        maritalStatus: formData.maritalStatus,
        maritalProperty: formData.maritalProperty,
        gender: formData.gender,
        cell: formData.cell,
        whatsapp: formData.whatsapp,
        email: formData.email,
        race: formData.race,
        employer: formData.employer,
        employmentType: formData.employmentType,
        employerTelephone: formData.employerTelephone,
        employerEmail: formData.employerEmail,
        employeeNumber: formData.employeeNumber,
        bankName: formData.bankName,
        accountNumber: formData.accountNumber,
        accountHolder: formData.accountHolder,
        branchCode: formData.branchCode,
        loanAmount: Number(formData.loanAmount),
        loanTerm: Number(formData.loanTerm),
        lengthOfEmployment: Number(formData.lengthOfEmployment),
        salary: Number(formData.salary),
        dependants: Number(formData.dependants),
        netIncome: Number(formData.netIncome),
        basicIncome: Number(formData.basicIncome),
        livingExpenses: Number(formData.livingExpenses),
        monthlyLoanRepayments: Number(formData.monthlyLoanRepayments),
        totalExpenses: Number(formData.totalExpenses),
      });

      const applicationId = response.data.application.id;

      // Upload files in parallel
      await Promise.all([
        formData.idDocument && handleFileUpload(formData.idDocument, applicationId, 'id'),
        formData.payslip && handleFileUpload(formData.payslip, applicationId, 'payslip'),
        formData.bankStatement && handleFileUpload(formData.bankStatement, applicationId, 'bankStatement'),
      ]);

      router.push("/apply/success");
    } catch (error) {
      console.error("Submission error:", error);
      setError("An error occurred while submitting your application. Please try again.");
    } finally {
      setButtonLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleNumberInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value === "" ? "" : Number(value)
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, field: 'idDocument' | 'payslip' | 'bankStatement') => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];

      // Validate file size (5MB max)
      if (file.size > 5 * 1024 * 1024) {
        setError(`File size for ${field} should be less than 5MB`);
        return;
      }

      // Validate file type
      const validTypes = ['application/pdf', 'image/jpeg', 'image/png'];
      if (!validTypes.includes(file.type)) {
        setError('Only PDF, JPEG, and PNG files are allowed');
        return;
      }

      setFormData(prev => ({
        ...prev,
        [field]: file
      }));
      setError(null);
    }
  };

  const nextStep = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(prev => prev + 1);
  };

  const prevStep = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(prev => prev - 1);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <>
            <h2 className="my-3 text-xl font-semibold">Section A: Loan Details</h2>
            <div className="flex flex-col -mx-3 mb-2">
              <div className="w-full px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="loanAmount">
                  Amount (R350 - R3500)
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="loanAmount"
                  name="loanAmount"
                  type="number"
                  min="350"
                  max="3500"
                  placeholder="350"
                  required
                  value={formData.loanAmount}
                  onChange={handleNumberInputChange}
                />
              </div>
              <div className="w-full px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="loanType">
                  Loan Type
                </label>
                <div className="relative">
                  <select
                    className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="loanType"
                    name="loanType"
                    value={formData.loanType}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">--Select Loan Type--</option>
                    <option value="EMERGENCY">Emergency Loan</option>
                    <option value="BUSINESS">Business Loan</option>
                    <option value="THATOFIX">Thatofix</option>
                    <option value="SECOND_SALARY">Second Salary</option>
                    <option value="LOAN_READVANCE">Loan Re-advance</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="w-full px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="loanTerm">
                  Loan Term (max 3 months)
                </label>
                <div className="relative">
                  <select
                    className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="loanTerm"
                    name="loanTerm"
                    value={formData.loanTerm}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">--Select Loan Term</option>
                    <option value="1">1 Month</option>
                    <option value="2">2 Months</option>
                    <option value="3">3 Months</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-end">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={nextStep}
              >
                Next
              </button>
            </div>
          </>
        );
      case 2:
        return (
          <>
            <h2 className="my-3 text-xl font-semibold">Section B: Personal Information</h2>
            <div className="flex md:flex-col -mx-3 mb-2">
              <div className="md:w-full w-1/3 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="firstName">
                  First Name
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="firstName"
                  name="firstName"
                  type="text"
                  placeholder="Enter your first name"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="md:w-full w-1/3 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="lastName">
                  Last Name
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="lastName"
                  name="lastName"
                  type="text"
                  placeholder="Enter your last name"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="md:w-full w-1/3 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <div className="flex md:flex-col -mx-3 mb-2">
              <div className="md:w-full w-1/3 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="cell">
                  Phone Number
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="cell"
                  name="cell"
                  type="tel"
                  placeholder="Enter your phone number"
                  value={formData.cell}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="md:w-full w-1/3 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="whatsapp">
                  WhatsApp
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="whatsapp"
                  name="whatsapp"
                  type="tel"
                  placeholder="Enter your WhatsApp number"
                  value={formData.whatsapp}
                  onChange={handleInputChange}
                />
              </div>

              <div className="md:w-full w-1/3 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="gender">
                  Gender
                </label>
                <div className="relative">
                  <select
                    className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="gender"
                    name="gender"
                    value={formData.gender}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">--Select Gender--</option>
                    <option value="MALE">Male</option>
                    <option value="FEMALE">Female</option>
                    <option value="OTHER">Other</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex md:flex-col -mx-3 mb-2">
              <div className="md:w-full w-1/3 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="race">
                  Race
                </label>
                <div className="relative">
                  <select
                    className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="race"
                    name="race"
                    value={formData.race}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">--Select--</option>
                    <option value="WHITE_CAUCASIAN">White/Caucasian</option>
                    <option value="BLACK_AFRICAN_AMERICAN">Black/African American</option>
                    <option value="HISPANIC_LATINO">Hispanic/Latino</option>
                    <option value="ASIAN">Asian</option>
                    <option value="OTHER">Other</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="md:w-full w-1/3 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="address">
                  Address
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="address"
                  name="address"
                  type="text"
                  placeholder="Enter your address"
                  value={formData.address}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="md:w-full w-1/3 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="idNumber">
                  ID Number
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="idNumber"
                  name="idNumber"
                  type="text"
                  placeholder="Enter your ID number"
                  value={formData.idNumber}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <div className="flex md:flex-col -mx-3 mb-2">
              <div className="md:w-full w-1/3 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="maritalStatus">
                  Marital Status
                </label>
                <div className="relative">
                  <select
                    className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="maritalStatus"
                    name="maritalStatus"
                    value={formData.maritalStatus}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">--Select--</option>
                    <option value="SINGLE">Single</option>
                    <option value="MARRIED">Married</option>
                    <option value="DIVORCED">Divorced</option>
                    <option value="WIDOWED">Widowed</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="md:w-full w-1/3 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="maritalProperty">
                  Marital Property
                </label>
                <div className="relative">
                  <select
                    className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="maritalProperty"
                    name="maritalProperty"
                    value={formData.maritalProperty}
                    onChange={handleInputChange}
                  >
                    <option value="">--Select--</option>
                    <option value="COP">COP</option>
                    <option value="ANC">ANC</option>
                    <option value="OTHER">Other</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-between">
              <button
                className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                onClick={prevStep}
              >
                Previous
              </button>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={nextStep}
              >
                Next
              </button>
            </div>
          </>
        );
      case 3:
        return (
          <>
            <h2 className="my-3 text-xl font-semibold">Section C: Employment Details</h2>
            <div className="flex md:flex-col flex-wrap -mx-3 mb-2">
              <div className="md:w-full w-1/3 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="employer">
                  Employer Name
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="employer"
                  name="employer"
                  type="text"
                  placeholder="Enter your employer's name"
                  value={formData.employer}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="md:w-full w-1/3 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="lengthOfEmployment">
                  Length of service (Months)
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="lengthOfEmployment"
                  name="lengthOfEmployment"
                  type="number"
                  placeholder="Enter your length of service"
                  value={formData.lengthOfEmployment}
                  onChange={handleNumberInputChange}
                  required
                />
              </div>

              <div className="md:w-full w-1/3 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="salary">
                  Salary
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="salary"
                  name="salary"
                  type="number"
                  placeholder="Enter your salary"
                  value={formData.salary}
                  onChange={handleNumberInputChange}
                  required
                />
              </div>

              <div className="md:w-full w-1/3 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="employeeNumber">
                  Employee number
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="employeeNumber"
                  name="employeeNumber"
                  type="text"
                  placeholder="Enter your employee number"
                  value={formData.employeeNumber}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="md:w-full w-1/3 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="employmentType">
                  Employment Type
                </label>
                <div className="relative">
                  <select
                    className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="employmentType"
                    name="employmentType"
                    value={formData.employmentType}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">--Select Employment Type--</option>
                    <option value="CONTRACT">Contract</option>
                    <option value="FULL_TIME">Full-Time</option>
                    <option value="PART_TIME">Part-Time</option>
                    <option value="OTHER">Other</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="md:w-full w-1/3 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="employerTelephone">
                  Work Tel
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="employerTelephone"
                  name="employerTelephone"
                  type="tel"
                  placeholder="Enter your employer's phone number"
                  value={formData.employerTelephone}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="md:w-full w-1/3 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="employerEmail">
                  Employer email
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="employerEmail"
                  name="employerEmail"
                  type="email"
                  placeholder="Enter your employer's email"
                  value={formData.employerEmail}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="md:w-full w-1/3 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="dependants">
                  Number of Dependants
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="dependants"
                  name="dependants"
                  type="number"
                  placeholder="Number of dependants"
                  value={formData.dependants}
                  onChange={handleNumberInputChange}
                />
              </div>
            </div>

            <div className="flex justify-between">
              <button
                className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                onClick={prevStep}
              >
                Previous
              </button>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={nextStep}
              >
                Next
              </button>
            </div>
          </>
        );
      case 4:
        return (
          <>
            <h2 className="my-3 text-xl font-semibold">Section D: Banking Details</h2>
            <div className="flex md:flex-col flex-wrap -mx-3 mb-2">
              <div className="md:w-full w-1/3 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="bankName">
                  Bank Name
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="bankName"
                  name="bankName"
                  type="text"
                  placeholder="Enter your bank's name"
                  value={formData.bankName}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="md:w-full w-1/3 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="accountHolder">
                  Bank Account Holder
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="accountHolder"
                  name="accountHolder"
                  type="text"
                  placeholder="Enter account holder"
                  value={formData.accountHolder}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="md:w-full w-1/3 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="accountNumber">
                  Account Number
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="accountNumber"
                  name="accountNumber"
                  type="text"
                  placeholder="Enter your account number"
                  value={formData.accountNumber}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="md:w-full w-1/3 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="branchCode">
                  Branch Code
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="branchCode"
                  name="branchCode"
                  type="text"
                  placeholder="Enter your branch code"
                  value={formData.branchCode}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <div className="flex justify-between">
              <button
                className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                onClick={prevStep}
              >
                Previous
              </button>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={nextStep}
              >
                Next
              </button>
            </div>
          </>
        );
      case 5:
        return (
          <>
            <h2 className="my-3 text-xl font-semibold">Section E: Income and Expenditure</h2>
            <div className="flex md:flex-col flex-wrap -mx-3 mb-2">
              <div className="md:w-full w-1/3 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="basicIncome">
                  Basic income
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="basicIncome"
                  name="basicIncome"
                  type="number"
                  value={formData.basicIncome}
                  onChange={handleNumberInputChange}
                />
              </div>

              <div className="md:w-full w-1/3 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="netIncome">
                  Net income
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="netIncome"
                  name="netIncome"
                  type="number"
                  value={formData.netIncome}
                  onChange={handleNumberInputChange}
                />
              </div>

              <div className="md:w-full w-1/3 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="livingExpenses">
                  Living Expenses
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="livingExpenses"
                  name="livingExpenses"
                  type="number"
                  value={formData.livingExpenses}
                  onChange={handleNumberInputChange}
                />
              </div>

              <div className="md:w-full w-1/3 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="monthlyLoanRepayments">
                  Monthly Loan Repayments
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="monthlyLoanRepayments"
                  name="monthlyLoanRepayments"
                  type="number"
                  value={formData.monthlyLoanRepayments}
                  onChange={handleNumberInputChange}
                />
              </div>

              <div className="md:w-full w-1/3 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="totalExpenses">
                  Total Monthly Expenses
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="totalExpenses"
                  name="totalExpenses"
                  type="number"
                  value={formData.totalExpenses}
                  onChange={handleNumberInputChange}
                />
              </div>
            </div>

            <div className="mt-6 space-y-4">
              <div>
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="idDocument">
                  Upload ID Document (PDF, JPEG, PNG - max 5MB)
                </label>
                <input
                  type="file"
                  id="idDocument"
                  accept=".pdf,.jpg,.jpeg,.png"
                  onChange={(e) => handleFileChange(e, 'idDocument')}
                  className="block w-full text-sm text-gray-500
                    file:mr-4 file:py-2 file:px-4
                    file:rounded-md file:border-0
                    file:text-sm file:font-semibold
                    file:bg-blue-50 file:text-blue-700
                    hover:file:bg-blue-100"
                  required
                />
                {formData.idDocument && (
                  <p className="mt-1 text-sm text-gray-500">Selected: {formData.idDocument.name}</p>
                )}
              </div>

              <div>
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="payslip">
                  Upload Payslip (PDF, JPEG, PNG - max 5MB)
                </label>
                <input
                  type="file"
                  id="payslip"
                  accept=".pdf,.jpg,.jpeg,.png"
                  onChange={(e) => handleFileChange(e, 'payslip')}
                  className="block w-full text-sm text-gray-500
                    file:mr-4 file:py-2 file:px-4
                    file:rounded-md file:border-0
                    file:text-sm file:font-semibold
                    file:bg-blue-50 file:text-blue-700
                    hover:file:bg-blue-100"
                  required
                />
                {formData.payslip && (
                  <p className="mt-1 text-sm text-gray-500">Selected: {formData.payslip.name}</p>
                )}
              </div>

              <div>
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="bankStatement">
                  Upload Bank Statement (PDF, JPEG, PNG - max 5MB)
                </label>
                <input
                  type="file"
                  id="bankStatement"
                  accept=".pdf,.jpg,.jpeg,.png"
                  onChange={(e) => handleFileChange(e, 'bankStatement')}
                  className="block w-full text-sm text-gray-500
                    file:mr-4 file:py-2 file:px-4
                    file:rounded-md file:border-0
                    file:text-sm file:font-semibold
                    file:bg-blue-50 file:text-blue-700
                    hover:file:bg-blue-100"
                  required
                />
                {formData.bankStatement && (
                  <p className="mt-1 text-sm text-gray-500">Selected: {formData.bankStatement.name}</p>
                )}
              </div>
            </div>

            <div className="flex justify-between mt-6">
              <button
                className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                onClick={prevStep}
              >
                Previous
              </button>
              <button
                type="submit"
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                disabled={buttonLoading}
              >
                {buttonLoading ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Submitting...
                  </span>
                ) : "Submit Application"}
              </button>
            </div>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Loan Application Form</h1>

        {/* Progress indicator */}
        <div className="mb-8">
          <div className="flex items-center">
            {[1, 2, 3, 4, 5].map((stepNumber) => (
              <div key={stepNumber} className="flex items-center">
                <div
                  className={`rounded-full h-8 w-8 flex items-center justify-center
                    ${step >= stepNumber ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-600'}`}
                >
                  {stepNumber}
                </div>
                {stepNumber < 5 && (
                  <div className={`h-1 w-16 ${step > stepNumber ? 'bg-blue-500' : 'bg-gray-200'}`}></div>
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-2 text-sm text-gray-600">
            <span>Loan Details</span>
            <span>Personal Info</span>
            <span>Employment</span>
            <span>Banking</span>
            <span>Documents</span>
          </div>
        </div>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
            {error}
          </div>
        )}

        <form onSubmit={submitHandler} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          {renderStep()}
        </form>
      </div>
    </div>
  );
};

export default ApplyForm;