"use client"
import React from 'react'
import Countdown from 'react-countdown'

const endingDate = new Date("2026-4-1")
const CountDown = () => {
    return (
        <Countdown date={endingDate} className='text-white text-2xl md:text-4xl' />
    )
}

export default CountDown