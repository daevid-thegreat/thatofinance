"use client";

import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";

interface Document {
  url: string;
  fileName: string;
}

interface ApplicationDetails {
  id: string;
  loanType: string;
  loanAmount: number;
  loanTerm: number;
  firstName: string;
  lastName: string;
  address: string;
  idNumber: string;
  maritalStatus: string;
  maritalProperty?: string;
  gender: string;
  cell: string;
  whatsapp?: string;
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
  status: string;
  createdAt: string;
  idDocument?: Document;
  payslip?: Document;
  bankStatement?: Document;
}

export default function ApplicationDetailsPage() {
  const [application, setApplication] = useState<ApplicationDetails | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [updating, setUpdating] = useState(false);

  const params = useParams();
  const applicationId = params?.id;


  const updateStatus = async (status: "APPROVED" | "REJECTED") => {
    if (!applicationId) return;

    try {
      setUpdating(true);
      await axios.patch(`/api/admin/applications/${applicationId}`, { status });
      setApplication((prev) => prev ? { ...prev, status } : null);
    } catch (err) {
      setError(`Failed to ${status.toLowerCase()} application`);
      console.error(err);
    } finally {
      setUpdating(false);
    }
  };

  useEffect(() => {
    const fetchApplication = async () => {
      if (!applicationId) return;

      try {
        setLoading(true);
        const { data } = await axios.get(`/api/admin/applications/${applicationId}`);
        setApplication(data.application);
      } catch (err) {
        setError("Failed to fetch application details");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchApplication();
  }, [applicationId]);

  if (loading) return <div>Loading application details...</div>;
  if (error) return <div className="text-red-500">{error}</div>;
  if (!application) return <div>Application not found</div>;

  const isActionDisabled = application.status === "APPROVED" || application.status === "REJECTED";


  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Application Details</h1>
        <Link href="/admin" className="text-blue-600 hover:underline">
          Back to Applications
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
         <div>
          <h2 className="text-xl font-semibold mb-2">Personal Information</h2>
          <p><strong>Applicant:</strong> {application.firstName} {application.lastName}</p>
          <p><strong>Email:</strong> {application.email}</p>
          <p><strong>Cell:</strong> {application.cell}</p>
          <p><strong>Address:</strong> {application.address}</p>
          <p><strong>ID Number:</strong> {application.idNumber}</p>
          <p><strong>Marital Status:</strong> {application.maritalStatus}</p>
          <p><strong>Gender:</strong> {application.gender}</p>
          <p><strong>Race:</strong> {application.race}</p>
          <p><strong>Employer:</strong> {application.employer}</p>
          <p><strong>Employment Type:</strong> {application.employmentType}</p>
          <p><strong>Length of Employment:</strong> {application.lengthOfEmployment} years</p>
          <p><strong>Employee Number:</strong> {application.employeeNumber}</p>
          <p><strong>Dependants:</strong> {application.dependants}</p>
          <p><strong>Salary:</strong> ${application.salary}</p>
          <p><strong>Employer Telephone:</strong> {application.employerTelephone}</p>
          <p><strong>Employer Email:</strong> {application.employerEmail}</p>
          <p><strong>Net Income:</strong> ${application.netIncome}</p>
          <p><strong>Basic Income:</strong> ${application.basicIncome}</p>
          <p><strong>Living Expenses:</strong> ${application.livingExpenses}</p>
          <p><strong>Monthly Loan Repayments:</strong> ${application.monthlyLoanRepayments}</p>
          <p><strong>Total Expenses:</strong> ${application.totalExpenses}</p>
        </div>

        {/* Loan Details */}
        <div>
          <h2 className="text-xl font-semibold mb-2">Loan Details</h2>
          <p><strong>Loan Type:</strong> {application.loanType}</p>
          <p><strong>Loan Amount:</strong> ${application.loanAmount}</p>
          <p><strong>Loan Term:</strong> {application.loanTerm} months</p>
          <p><strong>Status:</strong> {application.status}</p>
          <p><strong>Created At:</strong> {new Date(application.createdAt).toLocaleDateString()}</p>
          <p><strong>Bank Name:</strong> {application.bankName}</p>
          <p><strong>Account Number:</strong> {application.accountNumber}</p>
          <p><strong>Account Holder:</strong> {application.accountHolder}</p>
          <p><strong>Branch Code:</strong> {application.branchCode}</p>
        </div>
      </div>

      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-4">Documents</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <DocumentSection title="ID Document" document={application.idDocument} />
          <DocumentSection title="Payslip" document={application.payslip} />
          <DocumentSection title="Bank Statement" document={application.bankStatement} />
        </div>
      </div>

      <div className="mt-6 flex space-x-4">
        <button
          onClick={() => updateStatus("APPROVED")}
          disabled={isActionDisabled || updating}
          className={`px-4 py-2 text-white rounded ${
            isActionDisabled || updating ? "bg-green-300" : "bg-green-600 hover:bg-green-700"
          }`}
        >
          {updating && !isActionDisabled ? "Approving..." : "Approve"}
        </button>

        <button
          onClick={() => updateStatus("REJECTED")}
          disabled={isActionDisabled || updating}
          className={`px-4 py-2 text-white rounded ${
            isActionDisabled || updating ? "bg-red-300" : "bg-red-600 hover:bg-red-700"
          }`}
        >
          {updating && !isActionDisabled ? "Rejecting..." : "Reject"}
        </button>
      </div>

    </div>
  );
}

function DocumentSection({ title, document }: { title: string; document?: Document }) {
  return (
    <div className="p-4 border rounded-lg">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      {document ? (
        <div>
          <p>{document.fileName}</p>
          <a
            href={document.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            View Document
          </a>
        </div>
      ) : (
        <p className="text-gray-500">No document provided</p>
      )}
    </div>
  );
}
