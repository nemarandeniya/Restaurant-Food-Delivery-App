import { pizzas } from '@/app/data'
import Link from 'next/link'
import React from 'react'

const Categorypage = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-36 ms-4 me-4">
            {pizzas.map((item) => (
                <Link
                    href={`/product/${item.id}`}
                    key={item.id}
                    className="p-6 cursor-pointer rounded-xl overflow-hidden bg-gray-50/80 border border-gray-200 backdrop-blur-sm hover:shadow-2xl transition-shadow duration-300 flex flex-col gap-3 "

                >
                    {/* Image */}
                    <div className="w-full h-48 rounded-lg overflow-hidden">
                        <img
                            src={item.img}
                            alt={item.title}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Title & Description */}
                    <div>
                        <h2 className="font-bold text-xl">{item.title}</h2>
                        <p className="text-gray-600 text-sm mt-1">{item.desc}</p>
                    </div>

                    {/* Price / Button */}
                    <div className="flex justify-between items-center mt-3">
                        <span className="font-semibold text-lg">${item.price}</span>
                        <button className="px-3 py-1 rounded-full bg-cyan-900 text-white hover:bg-red-600 transition">
                            Add to cart
                        </button>
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default Categorypage