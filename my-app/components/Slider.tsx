"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const data = [
    {
        id: 1,
        title: "always fresh and always crispy",
        image: "/slide2.jpg"
    },
    {
        id: 2,
        title: "always fresh and always crispy",
        image: "/slide3.jpg"
    },
    {
        id: 3,
        title: "always fresh and always crispy",
        image: "/slide6.jpg"
    },
]

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0)

    // useEffect(() => {
    //     const interval = setInterval(
    //         () => setCurrentSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1))
    //         , 2000)
    //     return () => clearInterval(interval)
    // }, [])
    return (
        <div className='flex flex-col lg:flex-row h-[calc(100vh-6rem)] mt-26 md:mt-30'>
            <div className="h-1/2 lg:h-full lg:w-1/2 flex items-center justify-center flex-col gap-8">
                <h1 className='text-5xl text-center uppercase font-serif p-4 md:text-6xl xl:text-7xl'>
                    {data[currentSlide].title}
                </h1>
                <button className='border border-b-blue-950 p-3 rounded-sm bg-cyan-950 shadow-xl hover:shadow-4xl text-amber-50 cursor-pointer hover:scale-115'>order now</button>
            </div>
            <div className="h-1/2 lg:h-full w-full lg:w-1/2 relative z-0">
                <Image src={data[currentSlide].image} alt='' fill className='object-cover' />
            </div>
        </div>
    )
}

export default Slider