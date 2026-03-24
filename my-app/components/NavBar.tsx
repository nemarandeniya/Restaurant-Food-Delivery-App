import Link from 'next/link'
import React from 'react'
import Menu from './Menu'
import { FaPhone } from "react-icons/fa";
import CartIcon from './CartIcon';
import Image from 'next/image';

const NavBar = () => {

    const user = false;

    return (
        <div>
            <div className='flex mt-6 text-cyan-50 items-center  shadow-2xl justify-between fixed w-full px-6 py-6 bg-gray-300/80 backdrop-blur-md border-b border-gray-800 uppercase z-50 text-gray-700'>
                <div className="hidden md:flex gap-4 flex-1">
                    <Link href="/">Homepage</Link>
                    <Link href="/menu">Menu</Link>
                    <Link href="/contact">Contact</Link>
                </div>
                <Link href="/" className='flex flex-col items-center justify-center flex-1'>
                    <Image src="/icon3.png" alt='' width={60}
                        height={80} />
                    <span className=' text-md text-black text-center font-serif font-bold'>La Trattoria</span>
                </Link>
                <div className="md:hidden">
                    <Menu />
                </div>
                <div className="hidden md:flex gap-4 items-center justify-end flex-1">
                    <div className="flex items-center gap-1 border bg-gray-400 hover:bg-gray-600 rounded-md cursor-pointer p-1 me-1  border-gray-200 backdrop-blur-sm text-white">
                        <FaPhone size={15} />
                        <span>0385678657</span>
                    </div>
                    {!user ? (<Link href="/login">Login</Link>)
                        : (<Link href="/orders">Orders</Link>)
                    }
                    <CartIcon />
                </div>
            </div>
        </div>
    )
}

export default NavBar