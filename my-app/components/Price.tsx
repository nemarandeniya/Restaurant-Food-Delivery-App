"use client"
import React, { useEffect, useState } from 'react'

type Props = {
    price: number;
    id: number;
    options?: { title: string; additionalPrice: number }[]
}

const Price = ({ price, id, options }: Props) => {

    const [total, setTotal] = useState(price)
    const [quantity, setQuantity] = useState(1)
    const [selected, setSelected] = useState(1)

    useEffect(() => {
        setTotal(
            quantity * (options ? price + options[selected].additionalPrice : price)
        )
    }, [quantity, selected, options, price])

    return (
        <div className='flex flex-col gap-4'>
            <h2 className='text-2xl font-bold'>${total.toFixed(2)}</h2>

            {/* options */}
            <div className="flex gap-2.5">
                {options?.map((option, index) => (
                    <button
                        className=' p-1 rounded-sm ring-1 ring-cyan-800 hover:bg-cyan-800  text-gray-800 hover:text-white shadow-xl hover:shadow-4xl  cursor-pointer hover:scale-115 transition-transform duration-300'
                        key={option.title}
                        style={{
                            background: selected === index ? "rgb(21, 94, 117)" : "white",
                            color: selected === index ? "white" : "black"

                        }}
                        onClick={() => setSelected(index)}
                    >
                        {option.title}
                    </button>
                ))}
            </div>
            {/* quantity& add button*/}
            <div className="flex justify-between items-center">
                <div className="flex justify-between items-center w-full p-3 ring-1 ring-cyan-800">
                    <span className=''>Quantity</span>
                    <div className='flex gap-4'>
                        <button onClick={() => setQuantity(prev => (prev > 1 ? prev - 1 : 1))}
                            className='shadow-xl hover:shadow-4xl  cursor-pointer hover:scale-115 transition-transform duration-300'>{'<'}</button>
                        <span>{quantity}</span>
                        <button onClick={() => setQuantity(prev => (prev < 9 ? prev + 1 : 9))}
                            className='shadow-xl hover:shadow-4xl  cursor-pointer hover:scale-115 transition-transform duration-300'>{'>'}</button>
                    </div>
                </div>
                <div className="uppercase bg-cyan-800 text-white  ring-1 w-28 ring-cyan-800 rounded-md shadow-xl hover:shadow-4xl  cursor-pointer hover:scale-115 transition-transform duration-300">
                    <button>ADD TO CART</button>
                </div>
            </div>
        </div>
    )
}

export default Price