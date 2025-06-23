import React from 'react'
import { MovingBorderDemo } from '../common/MovingBorder'
import Image from 'next/image'
import HeroImage from '@/public/hero-image.png'

import { InfiniteMovingCardsDemo } from '../common/InfiniteMovingCards'

const HeroSection = () => {
  return (
    <div className='bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 min-h-[700px] rounded-xl flex flex-col items-center justify-start pt-20 overflow-hidden'>

        <div className='flex justify-center items-center pt-10 pb-3'>
            <MovingBorderDemo/>
        </div>

        <div className='flex-col mx-auto text-center justify-center items-center'>
            <div className='text-lg sm:text-3xl xl:text-3xl pb-1 pt-2 font-bold tracking-tighter'>Compare and choose</div>
            <div className='text-4xl sm:text-6xl xl:text-8xl pb-3 font-black tracking-tight'>CERTIFICATIONS</div>
        </div>
        

        {/* image here */}
        <Image
        src={HeroImage}
        alt="Certifications Preview"
        width={1200}
        height={600}
        priority // 👈 preloads image on first visit
        className="rounded-xl shadow-xl object-cover"
      />
        
        {/* <div className="pt-20">
          <InfiniteMovingCardsDemo direction="left" />
          <InfiniteMovingCardsDemo direction="right" />
          <InfiniteMovingCardsDemo direction="left" />
        </div> */}

    </div>
  )
}

export default HeroSection