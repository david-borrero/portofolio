import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import me from '../assets/me.jpeg'

const Home = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-[1300px] md:h-[70vh] py-8 bg-black mx-auto px-4'>

        <div className='col-span-1 my-auto mx-auto w-[300px] h-auto lg:w-[400px]'>
            <img src={me} alt='home' className='w-full h-auto rounded-lg' />
        </div>

        <div className='col-span-2 my-auto py-5'>
            <h1 className='text-white text-4xl sm:text-5xl lg:text-7xl font-extrabold'>
                <span className='primary-color'>I'm a </span> <br />
                <TypeAnimation 
                    sequence={['Full-Stack Developer', 'CS Student', 'Tech Enthusiast']}
                    wrapper="span"
                    speed={20}
                    repeat={Infinity} 
                />
            </h1>

            <p className='text-white sm:text-lg my-6 lg:text-xl'>
                My name is David Borrero and I'm a Full-Stack Developer and Computer Science student. I love to learn new technologies and build amazing projects.
            </p>

            <div className='my-8'>
                <a href='/' className='px-6 py-3 w-full rounded-xl mr-4 bg-primary-color text-white'>
                    Download CV
                </a>
                <a href='#contact' className='px-6 py-3 w-full text-white rounded-xl border border-gray-400 hover:bg-white hover:text-black transition duration-300'>
                    Contact
                </a>
            </div>
        </div>

    </div>
  )
}

export default Home