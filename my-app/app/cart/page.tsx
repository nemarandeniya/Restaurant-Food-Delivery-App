import Image from 'next/image'
import React from 'react'

const CartPage = () => {
    return (
        <div className='mt-36 h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col lg:flex-row'>
            {/* products container */}
            <div className="h-1/2 p-4 flex flex-col justify-center overflow-scroll lg:h-full lg:w-2/3 2xl:w-1/2">
                {/* single item */}
                <div className="flex items-center justify-between mb-4">
                    <Image src="/temporary/sicilian.jpg" alt='' width={100} height={100} className='rounded-4xl' />
                    <div className="">
                        <h1 className='uppercase font-bold text-2xl font-serif'>sicilien</h1>
                        <span>Large</span>
                    </div>
                    <h2>$79.99</h2>
                    <span className='hover:text-red-500 hover:scale-115 cursor-pointer'>X</span>
                </div>
                {/* single item */}
                <div className="flex items-center justify-between mb-4">
                    <Image src="/temporary/sicilian.jpg" alt='' width={100} height={100} className='rounded-4xl' />
                    <div className="">
                        <h1 className='uppercase font-bold text-2xl font-serif'>sicilien</h1>
                        <span>Large</span>
                    </div>
                    <h2>$79.99</h2>
                    <span className='hover:text-red-500 hover:scale-115 cursor-pointer'>X</span>
                </div>
                {/* single item */}
                <div className="flex items-center justify-between mb-4">
                    <Image src="/temporary/sicilian.jpg" alt='' width={100} height={100} className='rounded-4xl' />
                    <div className="">
                        <h1 className='uppercase font-bold text-2xl font-serif'>sicilien</h1>
                        <span>Large</span>
                    </div>
                    <h2>$79.99</h2>
                    <span className='hover:text-red-500 hover:scale-115 cursor-pointer'>X</span>
                </div>
            </div>
            {/* Payment Container */}
            <div className="h-1/2 p-4 bg-cyan-100/40 flex flex-col gap-4 justify-center lg:h-full lg:w-1/3 2xl:w-1/2">
                <div className="flex justify-between">
                    <span className=''>Subtotal (3 items)</span>
                    <span className=''>$81.70</span>
                </div>
                <div className="flex justify-between">
                    <span className=''>Service Cost</span>
                    <span className=''>$0.00</span>
                </div>
                <div className="flex justify-between">
                    <span className=''>Delivery Cost</span>
                    <span className='text-green-500'>FREE</span>
                </div>
                <hr className='' />
                <div className="flex justify-between mb-3">
                    <span className=''>TOTAL(INCL. VAT)</span>
                    <span className='text-green-500'>$81.70</span>
                </div>
                <button className='p-1 self-end rounded-sm w-1/2 bg-cyan-800 text-white shadow-xl hover:shadow-4xl  cursor-pointer hover:scale-105 transition-transform duration-300'>CHECKOUT</button>
            </div>
        </div>
    )
}

export default CartPage