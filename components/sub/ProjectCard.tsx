import React from 'react'
import Image from 'next/image'

const ProjectCard = ({src, title, description}: {
  src: string;
  title: string;
  description: string;
}) => {
  return (
    <div className='relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] hover:scale-105 transition-transform duration-300 w-full'>
        <Image 
          src={src}
          alt={title}
          width={1000}
          height={1000}
          className='w-full h-48 sm:h-56 md:h-64 lg:h-auto object-cover'
        />

        <div className='relative p-3 sm:p-4 md:p-5 lg:p-4'>
            <h1 className='text-lg sm:text-xl md:text-2xl font-semibold text-white'>{title}</h1>
            <p className='mt-2 text-sm sm:text-base text-gray-300'>{description}</p>
        </div>
    </div>
  )
}

export default ProjectCard;