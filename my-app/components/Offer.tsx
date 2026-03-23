import React from 'react'
import Image from 'next/image'
import CountDown from './CountDown'

const Offer = () => {
    return (
        <div className='flex flex-col lg:flex-row h-[calc(100vh-6rem)] '>
            <div className="h-1/2 lg:h-full lg:w-1/2 flex items-center justify-center flex-col gap-8 bg-black">
                <h1 className=' text-center text-white uppercase font-serif p-2 md:text-3xl xl:text-5xl'>
                    Delicious Cheese Chicken Burger
                </h1>
                <h3 className='md:text-md xl:text-xl ms-4 text-white text-center'>Hot, fresh, and irresistible—enjoy our signature burgers at an unbeatable deal today!</h3>
                {/* <CountDown /> */}
                <button className=' p-3 rounded-sm bg-[#be0a27] shadow-xl hover:shadow-4xl text-amber-50 cursor-pointer hover:scale-115 transition-transform duration-300'>order now</button>
            </div>
            <div className="h-1/2 lg:h-full w-full lg:w-1/2 relative z-0">
                <Image src='/burgerblack.webp' alt='' fill className='object-cover' />
            </div>
        </div>
    )
}

export default Offer