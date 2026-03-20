import Link from 'next/link'
import React from 'react'
import { FiShoppingCart } from "react-icons/fi";

const CartIcon = () => {
    return (
        <Link href="/cart">
            <div className='flex gap-1'>
                <FiShoppingCart size={25} />
                <span>Cart (3)</span>
            </div>
        </Link>
    )
}

export default CartIcon