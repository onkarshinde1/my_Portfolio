import React from 'react'
import ProjectCard from '../sub/ProjectCard'

const Projects = () => {
  return (
    <div className='flex flex-col items-center justify-center py-8 sm:py-10 mb-20 sm:mb-24 md:mb-30 px-4 sm:px-6'>
        {/* Title - Responsive text sizing */}
        <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10 sm:py-12 md:py-16 lg:py-20 text-center'>
            My Projects
        </h1>
        
        {/* Project Cards Grid - Responsive layout */}
        <div className='h-full w-full flex flex-col md:flex-row gap-6 sm:gap-8 md:gap-10 px-4 sm:px-6 md:px-8 lg:px-10 max-w-7xl'>
            <ProjectCard 
            src="/NextWebsite.png"
            title="Modern Next.js Portfolio"
            description="A clean and responsive portfolio website built using Next.js, showcasing projects and skills with a modern UI."
            />
            <ProjectCard 
            src="/CardImage.png"
            title="Interactive Card Website"
            description="A clean and responsive portfolio website built using Next.js, showcasing projects and skills with a modern UI."
            />
            <ProjectCard 
            src="/SpaceWebsite.png"
            title="Space Theme Website"
            description="A clean and responsive portfolio website built using Next.js, showcasing projects and skills with a modern UI."
            />
        </div>
    </div>
  )
}

export default Projects