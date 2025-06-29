'use client'
import React from 'react'
import { MovingBorderDemo } from '../common/MovingBorder'
import Image from 'next/image'
import HeroImage from '@/public/HeroImage.png'
import {motion} from 'framer-motion'

import { InfiniteMovingCardsDemo } from '../common/InfiniteMovingCards'

const HeroSection = () => {
  return (
    <div className='bg-gradient-to-t from-blue-300 via-blue-500 to-blue-800 border-2 border-white/50 shadow-[inset_0_4px_12px_rgba(0,0,0,0.6)] min-h-[500px] md:min-h-[700px] rounded-xl flex flex-col items-center justify-start pt-20 overflow-hidden'>

        <div className='flex justify-center items-center pt-10 pb-3'>
            <MovingBorderDemo/>
        </div>

        <div className='flex-col mx-auto text-center justify-center items-center'>
            <div className='text-sm sm:text-2xl pb-1 pt-2 font-bold tracking-tighter'>I am Arjun Thazhath</div>
            <div className='text-5xl md:text-7xl xl:text-8xl pb-3 font-black tracking-tight'>CLOUD ENGINEER</div>
        </div>
        
        {/* This div will grow to push the image to the bottom */}
        <div className="flex-grow"></div>

      <motion.div
        initial={{ y: 0, opacity: 0 }}
        animate={{
          y: [0, -10, 0],       // up and down loop
          opacity: 1,           // fade in to 1
        }}
        transition={{
          y: {
            duration: 4,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "loop",
          },
          opacity: {
            duration: 1.5,
            ease: "easeInOut",
          },
        }}
        className="w-full"
      >
        <Image
          src={HeroImage}
          alt="Certifications Preview"
          width={1200}
          height={600}
          priority
          quality={100}
          className="rounded-xl shadow-xl object-cover mx-auto w-full h-auto scale-150 sm:scale-120 md:scale-110 xl:scale-100"
        />
      </motion.div>


    </div>
  )
}

export default HeroSection