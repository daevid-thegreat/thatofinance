import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'


const Index = () => {
    const router = useRouter()
    const [error, setError] = useState('')
    const [applications, setApplications] = useState([])

    const logout = () => {
        localStorage.removeItem('token')
        router.push('/admin/signin')
    }

    useEffect(() => {
        const token = localStorage.getItem('token')
        if (!token) {
            router.push('/admin/signin')
        }

        const getApplications = async () => {
            const res = await fetch('https://thatofinance-dzan.onrender.com/api/get-loan-applications/', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Token ${token}`
                }
            })
            if (res.ok) {
                const data = await res.json()
                setApplications(data.data)
            } else {
                const errorResponse = await res.json()
                const errorMessage = errorResponse.message
                setError(errorMessage)
                console.log(errorMessage)
            }
        };
        getApplications()
    }, [])
    return (
        <div className="flex flex-col">
            <div className="flex justify-between items-center bg-blue-900 px-8 py-2">
                <img src="/Load-Color.svg" alt="Loading" width={150} height={50} />

                <div className="text-white bg-red-500 py-2 px-4 rounded-lg cursor-pointer" onClick={
                    logout
                }>
                    Sign Out
                </div>
            </div>

            <div>
                {error && <p className="text-red-500">{error}</p>}
            </div>
                <table className="table-auto border-separate border-spacing-4 border border-b">
                    <thead>
                    <tr>
                        <th className="text-md font-medium text-start border-b-2">FirstName</th>
                        <th className="text-md font-medium text-start border-b-2">LastName</th>
                        <th className="text-md font-medium text-start border-b-2">Amount(R)</th>
                        <th className="text-md font-medium text-start border-b-2">Status</th>
                        <th className="text-md font-medium text-start border-b-2">Action</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            applications.map((application) => (
                                <tr key={application.id}>
                                    <td className="text-sm font-normal">{application.first_name}</td>
                                    <td className="text-sm font-normal">{application.last_name}</td>
                                    <td className="text-sm font-normal">{application.loan_amount}</td>
                                    <td className={`text-sm font-normal ${
                                        application.status === 'Pending' ? 'text-yellow-500' : application.status === 'Approved' ? 'text-green-500' : 'text-red-500'
                                    }`}>{application.status}</td>
                                    <td className="text-sm font-normal">
                                        <a href={`/admin/application/${application.loan_id}`} className="text-blue-500 border-2 border-blue-400 py-1 px-3 rounded-lg">View</a>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
        </div>
    )
}
export default Index
