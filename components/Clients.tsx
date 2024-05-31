import React from 'react'
import { InfiniteMovingCards } from './ui/InfiniteMovingCards'
import { companies, testimonials } from '@/data'
import { div } from 'three/examples/jsm/nodes/Nodes.js'

const Clients = () => {
    return (
        <div className="py-5" id='certifications'>
            <h1 className='heading'>
                Some of the {' '}
                <span className='text-purple'> Recent Certifications</span>
            </h1>
            <div className="flex flex-col items-center max-lg:mt-10">
                    <InfiniteMovingCards
                    items={testimonials}
                    direction='right'
                    speed='slow'   
                    />

                </div>
            </div>
    )
}

export default Clients
