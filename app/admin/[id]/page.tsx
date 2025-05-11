"use client";

import { useState, useEffect } from 'react';
import axios from 'axios';
import {useRouter, useSearchParams} from 'next/navigation';
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

export default function ApplicationDetailsPage() {
  const [application, setApplication] = useState<ApplicationDetails | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [updating, setUpdating] = useState(false);
  const router = useRouter();

   const searchParams = useSearchParams();
    const params = searchParams.get('id');

  useEffect(() => {
    const fetchApplication = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(`/api/admin/applications/${params}`);
        setApplication(data.application);
      } catch (err) {
        setError('Failed to fetch application details');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchApplication();
  }, [params]);

  const updateStatus = async (status: string) => {
    try {
      setUpdating(true);
      await axios.patch(`/api/admin/applications/${params}`, { status });
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
        {/* Personal Information, Loan Details, etc. */}
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
