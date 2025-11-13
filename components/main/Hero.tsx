import React from 'react'
import HeroContent from '../sub/HeroContent';

const Hero = () => {
  return (
    <div className='relative flex flex-col h-full w-full mt-8 sm:mt-10 md:mt-12 lg:mt-[50px]'>
        <video 
        autoPlay
        muted
        loop
        playsInline
        className='rotate-180 absolute top-[-200px] sm:top-[-250px] md:top-[-300px] lg:top-[-340px] left-0 z-[1] w-full h-full object-cover'
        >
            <source src='/blackhole.webm' type='video/webm'/>
        </video>
        <HeroContent/>
    </div>
  )
}

export default Hero;