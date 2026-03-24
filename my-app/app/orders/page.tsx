import React from 'react'

const OrdersPage = () => {
    return (
        <div className='p-4 lg:px-20 xl:px-40 mt-36'>
            <table className='table-auto  border-gray-300 w-full'>
                <thead>
                    <tr className='text-left'>
                        <th className='hidden md:block py-3 px-1'>OrderId</th>
                        <th className='py-3 px-1'>Date</th>
                        <th className='py-3 px-1'>Price</th>
                        <th className='hidden md:block py-3 px-1'>Products</th>
                        <th className='py-3 px-1'>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className='text-sm md:text-base  odd:bg-cyan-950  odd:text-white text-gray-700'>
                        <td className='hidden md:block py-6 px-1'>121332223</td>
                        <td className='py-3 px-1'>20.08.2026</td>
                        <td className='py-6 px-1'>70.43</td>
                        <td className='hidden md:block py-6 px-1'>Big Burger menu (3)</td>
                        <td className='py-6 px-1'>On the way (approx. 10min)...</td>
                    </tr>
                    <tr className='text-sm md:text-base  odd:bg-cyan-950  odd:text-white text-gray-700'>
                        <td className='hidden md:block py-6 px-1'>121332223</td>
                        <td className='py-3 px-1'>20.08.2026</td>
                        <td className='py-6 px-1'>70.43</td>
                        <td className='hidden md:block py-6 px-1'>Big Burger menu (3)</td>
                        <td className='py-6 px-1'>On the way (approx. 10min)...</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default OrdersPage