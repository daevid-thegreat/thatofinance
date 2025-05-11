import React, {useEffect, useState} from 'react'
import { useRouter, } from "next/router";


const Id = () => {

    const router = useRouter()
    const [error, setError] = useState('')
    const [application, setApplication] = useState([])
    const [declined, setDeclined] = useState(false)
    const [approved, setApproved] = useState(false)
    const { id } = router.query

    const logout = () => {
        localStorage.removeItem('token')
        router.push('/admin/signin')
    }

    const approve = async () => {
        const token = localStorage.getItem('token')
        const res = await fetch(`https://thatofinance-dzan.onrender.com/api/update-loan-application/${id}/`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${token}`
            },
            body: JSON.stringify({
                status: 'Approved'
            })
        })
        if (res.ok) {
            router.push('/admin/application/success')
        } else {
            const errorResponse = await res.json()
            const errorMessage = errorResponse.message
            setError(errorMessage)
            console.log(errorMessage)
        }
    }

    const decline = async () => {
        const token = localStorage.getItem('token')
        const res = await fetch(`https://thatofinance-dzan.onrender.com/api/update-loan-application/${id}/`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${token}`
            },
            body: JSON.stringify({
                status: 'Declined'
            })
        })
        if (res.ok) {
            router.push('/admin/application/success')
        } else {
            const errorResponse = await res.json()
            const errorMessage = errorResponse.message
            setError(errorMessage)
        }
    }

    useEffect(() => {
        const token = localStorage.getItem('token')
        if (!token) {
            router.push('/admin/signin')
        }

        if (id){

        const getApplications = async () => {
            const res = await fetch(`https://thatofinance-dzan.onrender.com/api/get-loan-application/${id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Token ${token}`
                }
            })
            if (res.ok) {
                const data = await res.json()
                setApplication(data.data)
                if (data.data.status === 'Declined') {
                    setDeclined(true)
                }else if (data.data.status === 'Approved') {
                    setApproved(true)
                }else {
                    setDeclined(false)
                    setApproved(false)
                }
            } else {
                const errorResponse = await res.json()
                const errorMessage = errorResponse.message
                setError(errorMessage)
                console.log(errorMessage)
            }
        };
        getApplications()
    }
    }, [id])
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
            <div className='px-8'>
                <div className='my-2'>
                    <span className='text-gray-600 text-xl font-semibold mb-10'>Section A-loan details</span>
                    <div className='my-2 grid grid-cols-4 md:grid-cols-1 md:space-y-3'>
                        <div>
                            <span className='text-blue-950 text-md font-medium'>Loan Amount : </span>
                            <span className='text-blue-600 text-md font-normal'>R{application.loan_amount}</span>
                        </div>

                        <div>
                            <span className='text-blue-950 text-md font-medium'>Loan Type : </span>
                            <span className='text-blue-600 text-md font-normal'>{application.loan_type}</span>
                        </div>

                        <div>
                            <span className='text-blue-950 text-md font-medium'>Loan Term : </span>
                            <span className='text-blue-600 text-md font-normal'>{application.loan_term} Months</span>
                        </div>
                    </div>
                </div>

                <div className='my-2'>
                    <span className='text-gray-600 text-xl font-semibold mb-10'>Section B : Personal Information</span>
                    <div className='my-2 grid grid-cols-4 md:grid-cols-1 md:space-y-3'>
                        <div>
                            <span className='text-blue-950 text-md font-medium'>First Name : </span>
                            <span className='text-blue-600 text-md font-normal'>{application.first_name}</span>
                        </div>

                        <div>
                            <span className='text-blue-950 text-md font-medium'>Last Name : </span>
                            <span className='text-blue-600 text-md font-normal'>{application.last_name}</span>
                        </div>

                        <div>
                            <span className='text-blue-950 text-md font-medium'>Email : </span>
                            <span className='text-blue-600 text-md font-normal'>{application.email}</span>
                        </div>

                        <div>
                            <span className='text-blue-950 text-md font-medium'>Phone Number : </span>
                            <span className='text-blue-600 text-md font-normal'>{application.cell}</span>
                        </div>

                        <div>
                            <span className='text-blue-950 text-md font-medium'>Whatsapp : </span>
                            <span className='text-blue-600 text-md font-normal'>{application.whatsapp}</span>
                        </div>

                        <div>
                            <span className='text-blue-950 text-md font-medium'>Gender : </span>
                            <span className='text-blue-600 text-md font-normal'>{application.gender}</span>
                        </div>

                        <div>
                            <span className='text-blue-950 text-md font-medium'>Race : </span>
                            <span className='text-blue-600 text-md font-normal'>{application.race}</span>
                        </div>

                        <div>
                            <span className='text-blue-950 text-md font-medium'>Address : </span>
                            <span className='text-blue-600 text-md font-normal'>{application.address}</span>
                        </div>

                        <div>
                            <span className='text-blue-950 text-md font-medium'>ID Number : </span>
                            <span className='text-blue-600 text-md font-normal'>{application.Id_number}</span>
                        </div>

                        <div>
                            <span className='text-blue-950 text-md font-medium'>Marital Status : </span>
                            <span className='text-blue-600 text-md font-normal'>{application.marital_status}</span>
                        </div>

                        <div>
                            <span className='text-blue-950 text-md font-medium'>Marital Property : </span>
                            <span className='text-blue-600 text-md font-normal'>{application.marital_property}</span>
                        </div>
                        

                    </div>
                </div>

                <div className='my-2'>
                    <span className='text-gray-600 text-xl font-semibold mb-10'>Section C- Employment details</span>
                    <div className='my-2 grid grid-cols-4 md:grid-cols-1 md:space-y-3'>
                        <div>
                            <span className='text-blue-950 text-md font-medium'>Employer : </span>
                            <span className='text-blue-600 text-md font-normal'>{application.employer}</span>
                        </div>

                        <div>
                            <span className='text-blue-950 text-md font-medium'>Length of Service : </span>
                            <span className='text-blue-600 text-md font-normal'>{application.length_of_employment} Months</span>
                        </div>

                        <div>
                            <span className='text-blue-950 text-md font-medium'>Salary : </span>
                            <span className='text-blue-600 text-md font-normal'>R{application.salary}</span>
                        </div>

                        <div>
                            <span className='text-blue-950 text-md font-medium'>Employee Number : </span>
                            <span className='text-blue-600 text-md font-normal'>{application.employee_number}</span>
                        </div>

                        <div>
                            <span className='text-blue-950 text-md font-medium'>Employment Type : </span>
                            <span className='text-blue-600 text-md font-normal'>{application.employment_type}</span>
                        </div>

                        <div>
                            <span className='text-blue-950 text-md font-medium'>Work Telephone : </span>
                            <span className='text-blue-600 text-md font-normal'>{application.emp_telephone}</span>
                        </div>

                        <div>
                            <span className='text-blue-950 text-md font-medium'>Employer mail : </span>
                            <span className='text-blue-600 text-md font-normal'>{application.emp_email}</span>
                        </div>

                        <div>
                            <span className='text-blue-950 text-md font-medium'>Number of Dependants : </span>
                            <span className='text-blue-600 text-md font-normal'>{application.dependants}</span>
                        </div>
                    
                    </div>
                </div>

                <div className='my-2'>
                    <span className='text-gray-600 text-xl font-semibold mb-10'>Section D-Banking details</span>
                    <div className='my-2 grid grid-cols-4 md:grid-cols-1 md:space-y-3'>
                        <div>
                            <span className='text-blue-950 text-md font-medium'>Bank Name : </span>
                            <span className='text-blue-600 text-md font-normal'>{application.bank_name}</span>
                        </div>

                        <div>
                            <span className='text-blue-950 text-md font-medium'>Account Holder : </span>
                            <span className='text-blue-600 text-md font-normal'>{application.account_holder}</span>
                        </div>

                        <div>
                            <span className='text-blue-950 text-md font-medium'>Account Number : </span>
                            <span className='text-blue-600 text-md font-normal'>{application.account_number}</span>
                        </div>

                        <div>
                            <span className='text-blue-950 text-md font-medium'>Branch Code : </span>
                            <span className='text-blue-600 text-md font-normal'>{application.branch_code}</span>
                        </div>

                    </div>
                </div>

                <div className='my-2'>
                    <span className='text-gray-600 text-xl font-semibold mb-10'>Section E- Income and expenditure</span>
                    <div className='my-2 grid grid-cols-4 md:grid-cols-1 md:space-y-3'>
                        <div>
                            <span className='text-blue-950 text-md font-medium'>Basic income : </span>
                            <span className='text-blue-600 text-md font-normal'>R{application.basic_income}</span>
                        </div>

                        <div>
                            <span className='text-blue-950 text-md font-medium'>Net income : </span>
                            <span className='text-blue-600 text-md font-normal'>{application.net_income}</span>
                        </div>

                        <div>
                            <span className='text-blue-950 text-md font-medium'>Living Expenses : </span>
                            <span className='text-blue-600 text-md font-normal'>{application.living_expenses}</span>
                        </div>

                        <div>
                            <span className='text-blue-950 text-md font-medium'>Monthly Loan Repayments : </span>
                            <span className='text-blue-600 text-md font-normal'>{application.monthly_loan_repayments}</span>
                        </div>

                        <div>
                            <span className='text-blue-950 text-md font-medium'>Total Monthly Expenses : </span>
                            <span className='text-blue-600 text-md font-normal'>{application.total_expenses}</span>
                        </div>
                 
                    </div>
                </div>
            
                <div className={`my-2 flex items-center text-center justify-center ${
                    declined ? 'block' : 'hidden'
                }`}>
                    <p className='text-red-500 text-lg font-medium'>This application has been declined</p>
                </div>

                <div className={`my-2 flex items-center text-center justify-center ${
                    approved ? 'block' : 'hidden'
                }`}>
                    <p className='text-green-500 text-lg font-medium'>This application has been accepted</p>
                </div>



                <div className={`my-2 flex items-center justify-center space-x-4 ${
                    declined || approved ? 'hidden' : 'block'
                }`}>
                    <button className='bg-blue-900 text-white px-4 py-2 rounded-lg' onClick={approve}>Approve</button>
                    <button className='bg-red-500 text-white px-4 py-2 rounded-lg' onClick={decline}>Reject</button>
                </div>
                
            </div>
            
        </div>
    )
}
export default Id
