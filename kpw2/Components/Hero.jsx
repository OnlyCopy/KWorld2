import Image from 'next/image'
import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
import { Album2 } from '../images/index'

function Hero() {
  return (
    <header className='text-white w-screen h-screen snap-mandatory snap-y'>
        <div className='max-w-7xl mx-auto justify-center text-center items-center flex flex-col space-y-8'>
            <div className='relative w-[600px] h-[600px]'>
                <Image src={Album2}  objectFit='contain' layout='fill' />
            </div>
            <div>
                <h1 className="text-white text-3xl">&quot;<Typewriter words={['K Pierre This Is Your World']} loop={true}/>&quot;</h1>
              </div>
        </div>
    </header>
  )
}

export default Hero