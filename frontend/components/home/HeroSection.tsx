import React from 'react'
import { MovingBorderDemo } from '../common/MovingBorder'

const HeroSection = () => {
  return (
    <div className='flex-col justify-center items-center'>

        <div className='flex justify-center items-center pt-10 pb-3'>
            <MovingBorderDemo/>
        </div>

        <div className='flex-col text-center justify-center items-center'>
            <div className='text-4xl pb-3 font-medium'>Compare and choose from</div>
        </div>
        
       
        <div className='bg-blue-500'>
            <div>Compare</div>
            <div>Discuss</div>
            <div>Certify</div>
        </div>

    </div>
  )
}

export default HeroSection