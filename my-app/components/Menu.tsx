"use client"
// import Image from 'next/image'
import { FiMenu } from "react-icons/fi";
import { FiX } from "react-icons/fi";
import React, { useState } from 'react'
import Link from "next/link";
import CartIcon from "./CartIcon";

const links = [
    {
        id: 1, title: "Home Page", url: "/"
    },
    {
        id: 2, title: "Menu", url: "/menu"
    },
    {
        id: 3, title: "Working Hours", url: "/"
    },
    {
        id: 4, title: "Contact", url: "/"
    }
]

const Menu = () => {
    const [open, setOpen] = useState(false)

    // temporary user
    const user = false
    return (
        <div>
            {!open ? (
                <FiMenu size={28} onClick={() => setOpen(true)} />
            ) : (
                <FiX size={28} onClick={() => setOpen(false)} />
            )}
            {open && (
                <div className="bg-emerald-500 w-full text-white absolute left-0 flex-col top-24 h-[calc(100vh-6rem)] gap-5 flex items-center justify-center z-[9999]">
                    {links.map((item) => (
                        <Link href={item.url} key={item.id} onClick={() => setOpen(false)}>
                            {item.title}
                        </Link>
                    ))}
                    {!user ? (<Link href="/login" onClick={() => setOpen(false)}>Login</Link>)
                        : (<Link href="/orders" onClick={() => setOpen(false)}>Orders</Link>)}
                    <CartIcon />
                </div>)}
        </div>
    )
}

export default Menu