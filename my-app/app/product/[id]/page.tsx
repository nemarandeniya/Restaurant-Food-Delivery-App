import { singleProduct } from '@/app/data'
import Price from '@/components/Price'
import Image from 'next/image'
import React from 'react'

const SingleProductPage = () => {
    return (
        <div className='flex flex-col gap-4 items-center md:flex-row md:gap-8 mt-40 md:mt-28 justify-around h-screen p-4 lg:px-20 xl:px-40'>
            {singleProduct.img && (
                <div className="relative w-64 h-64 rounded-full overflow-hidden">
                    <Image src={singleProduct.img} alt='' className='object-cover' fill />
                </div>
            )}
            {/* TEXT CONTAINER */}
            <div className="flex flex-col h-1/2 gap-4">
                <h1 className='font-bold text-3xl flex justify-center items-center'>{singleProduct.title}</h1>
                <p>{singleProduct.desc}</p>
                <Price price={singleProduct.price} id={singleProduct.id} options={singleProduct.options} />
            </div>
        </div>
    )
}

export default SingleProductPage