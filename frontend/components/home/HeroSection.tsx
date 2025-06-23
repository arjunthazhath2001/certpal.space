import React from 'react'
import { MovingBorderDemo } from '../common/MovingBorder'
import Image from 'next/image'
import HeroImage from '@/public/hero-image.webp'

import { InfiniteMovingCardsDemo } from '../common/InfiniteMovingCards'

const HeroSection = () => {
  return (
    <div className='bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 border-2 border-white/50 shadow-[inset_0_4px_12px_rgba(0,0,0,0.6)] min-h-[700px] rounded-xl flex flex-col items-center justify-start pt-20 overflow-hidden'>

        <div className='flex justify-center items-center pt-10 pb-3'>
            <MovingBorderDemo/>
        </div>

        <div className='flex-col mx-auto text-center justify-center items-center'>
            <div className='text-lg sm:text-2xl xl:text-3xl pb-1 pt-2 font-bold tracking-tighter'>Compare and choose</div>
            <div className='text-5xl md:text-7xl xl:text-8xl pb-3 font-black tracking-tight'>CERTIFICATIONS</div>
        </div>
        
        {/* This div will grow to push the image to the bottom */}
        <div className="flex-grow"></div>

        <div className="w-full">
          <Image
            src={HeroImage}
            alt="Certifications Preview"
            width={1200}
            height={600}
            priority
            quality={100}
            className="rounded-xl shadow-xl object-cover mx-auto w-full h-auto scale-150 sm:scale-120 md:scale-110 xl:scale-100"
          />
        </div>
        

    </div>
  )
}

export default HeroSection