// app/admin/applications/[id]/page.tsx
"use client";

import { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

interface ApplicationDetails {
  id: string;
  loanType: string;
  loanAmount: number;
  loanTerm: number;
  status: string;
  firstName: string;
  lastName: string;
  email: string;
  cell: string;
  address: string;
  idNumber: string;
  employer: string;
  salary: number;
  bankName: string;
  accountNumber: string;
  createdAt: string;
  idDocument?: {
    url: string;
    fileName: string;
  };
  payslip?: {
    url: string;
    fileName: string;
  };
  bankStatement?: {
    url: string;
    fileName: string;
  };
}

export default function ApplicationDetailsPage({ params }: { params: { id: string } }) {
  const [application, setApplication] = useState<ApplicationDetails | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [updating, setUpdating] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const fetchApplication = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(`/api/admin/applications/${params.id}`);
        setApplication(data.application);
      } catch (err) {
        setError('Failed to fetch application details');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchApplication();
  }, [params.id]);

  const updateStatus = async (status: string) => {
    try {
      setUpdating(true);
      await axios.patch(`/api/admin/applications/${params.id}`, { status });
      router.refresh(); // Refresh the page to show updated status
    } catch (err) {
      setError(`Failed to ${status.toLowerCase()} application`);
      console.error(err);
    } finally {
      setUpdating(false);
    }
  };

  if (loading) return <div>Loading application details...</div>;
  if (error) return <div className="text-red-500">{error}</div>;
  if (!application) return <div>Application not found</div>;

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Application Details</h1>
        <Link href="/admin/applications" className="text-blue-600 hover:underline">
          Back to Applications
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Personal Information</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-500">Full Name</label>
              <p>{application.firstName} {application.lastName}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-500">Email</label>
              <p>{application.email}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-500">Phone</label>
              <p>{application.cell}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-500">Address</label>
              <p>{application.address}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-500">ID Number</label>
              <p>{application.idNumber}</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Loan Details</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-500">Loan Type</label>
              <p>{application.loanType}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-500">Amount</label>
              <p>R{application.loanAmount.toFixed(2)}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-500">Term</label>
              <p>{application.loanTerm} months</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-500">Status</label>
              <p className={`inline-block px-2 py-1 rounded text-xs ${
                application.status === 'APPROVED' ? 'bg-green-100 text-green-800' :
                application.status === 'REJECTED' ? 'bg-red-100 text-red-800' :
                'bg-yellow-100 text-yellow-800'
              }`}>
                {application.status}
              </p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-500">Applied On</label>
              <p>{new Date(application.createdAt).toLocaleString()}</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Employment & Banking</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-500">Employer</label>
              <p>{application.employer}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-500">Salary</label>
              <p>R{application.salary.toFixed(2)}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-500">Bank</label>
              <p>{application.bankName}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-500">Account Number</label>
              <p>{application.accountNumber}</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Documents</h2>
          <div className="space-y-4">
            {application.idDocument && (
              <div>
                <label className="block text-sm font-medium text-gray-500">ID Document</label>
                <a
                  href={application.idDocument.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  {application.idDocument.fileName}
                </a>
              </div>
            )}
            {application.payslip && (
              <div>
                <label className="block text-sm font-medium text-gray-500">Payslip</label>
                <a
                  href={application.payslip.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  {application.payslip.fileName}
                </a>
              </div>
            )}
            {application.bankStatement && (
              <div>
                <label className="block text-sm font-medium text-gray-500">Bank Statement</label>
                <a
                  href={application.bankStatement.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  {application.bankStatement.fileName}
                </a>
              </div>
            )}
          </div>
        </div>
      </div>

      {application.status === 'PENDING' && (
        <div className="mt-6 flex space-x-4">
          <button
            onClick={() => updateStatus('APPROVED')}
            disabled={updating}
            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 disabled:bg-green-300"
          >
            {updating ? 'Approving...' : 'Approve Application'}
          </button>
          <button
            onClick={() => updateStatus('REJECTED')}
            disabled={updating}
            className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 disabled:bg-red-300"
          >
            {updating ? 'Rejecting...' : 'Reject Application'}
          </button>
        </div>
      )}
    </div>
  );
}