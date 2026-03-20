import Link from 'next/link'
import React from 'react'
import Menu from './Menu'
import { FaPhone } from "react-icons/fa";
import CartIcon from './CartIcon';

const NavBar = () => {

    const user = false;

    return (
        <div>
            <div className='flex mt-6 text-cyan-50 shadow-2xl justify-between fixed w-full px-6 py-8 bg-gray-900/80 backdrop-blur-md border-b border-gray-800 uppercase z-50'>
                <div className="hidden md:flex gap-4 flex-1">
                    <Link href="/">Homepage</Link>
                    <Link href="/menu">Menu</Link>
                    <Link href="/contact">Contact</Link>
                </div>
                <Link href="/" className='text-xl text-center font-mono font-bold flex-1'>
                    La Trattoria
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