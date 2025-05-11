import React from 'react'
import { useState } from 'react';
import { useRouter } from 'next/router';

const Signin = () => {
    const router = useRouter();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [buttonLoading, setButtonLoading] = useState(false);

    const submitHandler = async (e) => {
        e.preventDefault();
        setButtonLoading(true);

        const res = await fetch('https://thatofinance-dzan.onrender.com/api/signin/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        if (res.ok) {
            const data = await res.json();
            const token = data.data.token;
            localStorage.setItem('token', token);
            await router.push('/admin'); 
        } else {
            const errorResponse = await res.json();
            const errorMessage = errorResponse.message;
            setError(errorMessage);
            setButtonLoading(false);
        }
    };



    return (
        <div className="flex flex-col items-center justify-center">
            <div>
                <img src="/Load-Color.svg" alt="Logo" className="w-40 h-40" />
                <p>
                    <span className="text-xl font-semibold italic text-blue-950">Admin Login</span>
                </p>
            </div>

            <div>
                {error && <p className="text-red-500">{error}</p>}
            </div>
        <div className="w-full max-w-xs">
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={submitHandler}>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                        Email
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline outline-blue-600 focus:shadow-outline"
                        id="email" type="email" placeholder="Admin email" onChange={
                            (e) => setEmail(e.target.value)
                        }/>
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                        Password
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline outline-blue-600 "
                        id="password" type="password" placeholder="******************" onChange={
                            (e) => setPassword(e.target.value)
                        }/>
                </div>
                <div className="flex items-center justify-between">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                        disabled={buttonLoading}>
                        {buttonLoading ? 'Loading...' : 'Sign In'}
                    </button>
                </div>
            </form>
        </div>

        </div>
    )
}
export default Signin
