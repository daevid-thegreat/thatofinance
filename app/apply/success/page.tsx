import React from 'react'
import Link from "next/link";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import Image from "next/image";

const Success = () => {
    return (
        <>
            <Navbar />
            <div className="flex flex-col items-center content-center justify-center align-middle my-14">
                <Image src="/thumbsup.jpg" alt="Success" width={100} height={100} className="w-64 h-64" />
                <div className="text-center flex flex-col">
                    <span className="text-xl font-semibold italic text-blue-950">Application Submitted</span>
                    <span>Your application has been received expect a mail, text or call from us soon.</span>
                </div>
                <Link className="my-6 bg-blue-900 text-white py-2 px-4 rounded-lg" href={`/`}>
                    Return to Home
                </Link>
            </div>
            <Footer />
        </>
    )
}
export default Success
