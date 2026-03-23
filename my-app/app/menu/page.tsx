import React from 'react'
import { menu } from '../data'
import Link from 'next/link'

const MenuPage = () => {
    return (
        <div className='p-4  ms-24 mt-36 md:mt-26 lg:px-20 xl:px-40 h-[calc(100vh-2rem)] md:h-[calc(100vh-9rem)] flex flex-col md:flex-row items-center'>
            {menu.map(category => (
                <Link
                    href={`/menu/${category.slug}`}
                    key={category.id}
                    className='bg-cover  h-1/3 md:h-2/3 w-full bg-center rounded-2xl relative overflow-hidden p-8'
                    style={{ backgroundImage: `url(${category.img})`, }}>
                    <div className="w-1/2 md:w-2/3" style={{ color: category.color }}>
                        {/* max-w-40  */}
                        <h1 className='font-bold text-3xl'>{category.title}</h1>
                        <p className='text-sm mt-3 mb-2'>{category.desc}</p>
                        <button className='hidden md:block mb-2 p-1 rounded-sm bg-white shadow-xl hover:shadow-xl text-gray-900 cursor-pointer hover:scale-110'>Explore</button>
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default MenuPage