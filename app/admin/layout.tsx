import {auth} from "@/auth";
import Link from "next/link";

export default async function Layout({
  children,
}: {
  children: React.ReactNode
}) {
    const session = await  auth();
    if (!session || session.user.role !== 'ADMIN') {
        return (
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <div className="bg-white p-6 rounded shadow-md">
                    <h2 className="text-xl font-bold">Access Denied</h2>
                    <p>You do not have permission to view this page.</p>
                    <Link href="/">Go back home</Link>
                </div>
            </div>
        );
  }
  return (
    <div>
          {children}
    </div>
  );
}
