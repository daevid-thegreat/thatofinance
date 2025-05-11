"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";

interface Application {
  id: string;
  loanAmount: number;
  status: "PENDING" | "UNDER_REVIEW" | "APPROVED" | "REJECTED" | "FUNDED" | "COMPLETED";
  createdAt: string;
    firstName: string;
    lastName: string;
    email: string;
}

const statusOptions = ["ALL", "PENDING", "UNDER_REVIEW", "APPROVED", "REJECTED", "FUNDED", "COMPLETED"] as const;
type StatusFilter = typeof statusOptions[number];

export default function ApplicationsPage() {
  const [applications, setApplications] = useState<Application[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [statusFilter, setStatusFilter] = useState<StatusFilter>("ALL");

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get("/api/admin/applications", {
          params: { status: statusFilter === "ALL" ? undefined : statusFilter },
        });
        setApplications(data.applications);
      } catch (err) {
        setError("Failed to fetch applications");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchApplications();
  }, [statusFilter]);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString();
  };

  if (loading) return <div>Loading applications...</div>;
  if (error) return <div className="text-red-500">{error}</div>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Loan Applications</h1>

      <div className="mb-4">
        <label className="mr-2">Filter by status:</label>
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value as StatusFilter)}
          className="border p-2 rounded"
        >
          {statusOptions.map((status) => (
            <option key={status} value={status}>
              {status}
            </option>
          ))}
        </select>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-2 px-4 border">ID</th>
              <th className="py-2 px-4 border">Applicant</th>
              <th className="py-2 px-4 border">Amount</th>
              <th className="py-2 px-4 border">Status</th>
              <th className="py-2 px-4 border">Date</th>
              <th className="py-2 px-4 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {applications.map((app) => (
              <tr key={app.id} className="hover:bg-gray-50">
                <td className="py-2 px-4 border">{app.id.substring(0, 8)}...</td>
                <td className="py-2 px-4 border">
                  {app.firstName} {app.lastName}
                  <div className="text-sm text-gray-500">{app.email}</div>
                </td>
                <td className="py-2 px-4 border">R{app.loanAmount.toFixed(2)}</td>
                <td className="py-2 px-4 border">
                  <span
                    className={`px-2 py-1 rounded text-xs ${
                      app.status === "APPROVED"
                        ? "bg-green-100 text-green-800"
                        : app.status === "REJECTED"
                        ? "bg-red-100 text-red-800"
                        : "bg-yellow-100 text-yellow-800"
                    }`}
                  >
                    {app.status}
                  </span>
                </td>
                <td className="py-2 px-4 border">{formatDate(app.createdAt)}</td>
                <td className="py-2 px-4 border">
                  <Link href={`/admin/${app.id}`} className="text-blue-600 hover:underline">
                    View
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
