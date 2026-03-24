import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Login = () => {
    return (
        <div>
            <div className="flex items-center justify-center h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] p-4 mt-36">
                <div className="h-full shadow-2xl rounded-t-md flex flex-col md:flex-row md:w-2/3">
                    {/* image container */}
                    <div className="relative h-1/3 w-full md:h-full md:w-1/2">
                        <Image src="/login.jpg" alt='' fill className='object-cover' />
                    </div>
                    {/* form container */}
                    <div className="p-10 flex flex-col gap-8 md:h-full md:w-1/2">
                        <h1 className='text-3xl font-bold font-serif'>Welcome</h1>
                        <p>Log into your account or create a new one using social botton</p>
                        <button className='flex gap-4 p-4 ring-1 ring-orange-100 rounded-md'>
                            <Image src='/google.png' alt='' width={20} height={20} className='object-contain' />
                            <span>Sign in with Google</span>
                        </button>
                        <button className='flex gap-4 p-4 ring-1 ring-blue-100 rounded-md'>
                            <Image src='/fb.png' alt='' width={30} height={30} className='object-contain' />
                            <span>Sign in with Facebook</span>
                        </button>
                        <p className='text-sm'>Have a problem?<Link className='underline' href="/">Contact us</Link> </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login