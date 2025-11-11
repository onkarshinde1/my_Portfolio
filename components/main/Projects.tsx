import React from 'react'
import ProjectCard from '../sub/ProjectCard'

const Projects = () => {
  return (
    <div className='flex flex-col items-center justify-center py-10 mb-30'>
        <h1 className='text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20'>
            My Projects
        </h1>
        <div className='h-full w-full flex flex-col md:flex-row gap-10 px-10'>
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