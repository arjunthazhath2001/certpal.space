import React from 'react'
import { MovingBorderDemo } from '../common/MovingBorder'
import { InfiniteMovingCardsDemo } from '../common/InfiniteMovingCards'

const HeroSection = () => {
  return (
    <div className='flex flex-col items-center justify-start pt-4'>

        <div className='flex justify-center items-center pt-10 pb-3'>
            <MovingBorderDemo/>
        </div>

        <div className='flex-col mx-auto text-center justify-center items-center'>
            <div className='text-lg sm:text-3xl xl:text-4xl pb-1 pt-2 font-extrabold'>Compare and choose from</div>
            <div className='text-4xl sm:text-6xl xl:text-7xl pb-3 font-black'>5000+ certifications</div>
        </div>
        
       
        <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-8 xl:gap-16 font-bold text-sm sm:text-lg md:text-lg pt-1 xl:pt-6 px-4">
          {["Compare", "Discuss", "Certify"].map((label) => (
            <div
              key={label}
              className="w-20 sm:w-28 md:w-36 h-7 *:sm:h-11 md:h-10 shadow-md rounded-md md:rounded-xl flex justify-center items-center text-black bg-white"
            >
              {label}
            </div>
          ))}
        </div>
        
        <div className="pt-20">
          <InfiniteMovingCardsDemo direction="left" />
          <InfiniteMovingCardsDemo direction="right" />
          <InfiniteMovingCardsDemo direction="left" />
        </div>

    </div>
  )
}

export default HeroSection