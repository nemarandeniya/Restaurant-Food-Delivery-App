import { featuredProducts } from '@/app/data'
import Image from 'next/image'
import React from 'react'

const Featured = () => {
    return (
        <div className='w-screen overflow-x-scroll text-black'>
            {/* Wrapper */}
            <div className="w-max flex">
                {/* Single Item */}
                {featuredProducts.map(item => (
                    <div key={item.id} className="w-[80vw] md:w-[40vw] h-[60vh] flex flex-col items-center justify-around mt-4 hover:bg-gray-200 rounded-2xl hover:scale-105 transition-all duration-300">
                        {/* Image Container */}
                        {item.img && (
                            <div className="relative flex-1 w-60 hover:rotate-3 transition-all duration-300">
                                <Image src={item.img} alt="" fill className='object-cover' />
                            </div>
                        )}
                        <div className="flex-1 flex flex-col gap-4 items-center text-center">
                            <h1 className='text-xl font-serif font-bold uppercase'>{item.title}</h1>
                            <p className='text-lg font-mono'>{item.desc}</p>
                            <span className='p-4'>${item.price}</span>
                            <button className='border border-b-blue-950 p-2 rounded-sm bg-cyan-950 shadow-xl hover:shadow-4xl text-amber-50 cursor-pointer hover:scale-105'>Add to cart</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Featured