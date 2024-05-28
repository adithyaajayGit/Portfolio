import { projects } from '@/data'
import { describe } from 'node:test'
import { title } from 'process'
import React from 'react'
import { div } from 'three/examples/jsm/nodes/Nodes.js'
import { PinContainer } from './ui/3d-pin'

const RecentProjects = () => {
  return (
    <div className="py-20">
      <h1 className='heading'>
     A small selection of {' '}
     <span className='text-purple'>recent projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
       
        {projects.map(({  id, title, des, img, iconLists, Link }) => (
            <div key={id} className='lg:min-h-[32.5 rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]'>
               <PinContainer>
                {title}
               </PinContainer>
            </div>
        ))}

      </div>
    </div>
  )
}

export default RecentProjects
