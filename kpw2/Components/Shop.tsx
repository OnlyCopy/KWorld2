import Image from 'next/image'
import React from 'react'
import { ManB, ManBanner, ManW } from '../images/index'

function Shop() {
  return (
    <div className='h-full w-screen snap-mandatory snap-y text-white pt-10'>

      <div className='max-w-7xl mx-auto justify-center'>

        <div className='items-center mb-8 text-center pb-10'>
              <h3 className='uppercase tracking-[20px] text-white text-2xl'>Shop K Pierre</h3>
        </div>

        <section className='py-10'>
                <div className='flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-4 flex-shrink-0 items-center overflow-x-scroll lg:overflow-hidden px-3 w-full'>
                   
                  <div className='cursor-pointer hover:opacity-80 flex flex-col text-left space-y-4'>
                      <div className='relative w-72 h-96 md:w-[600px] md:h-[900px]'>
                          <Image layout='fill' src={ManB} />
                      </div>
                      <div className='flex flex-col'>
                        <div>
                          <h1 className='text-white text-lg'>Item Name</h1>
                        </div>
                          <div>
                              <span className='text-md text-gray-400'>Price</span>
                          </div>
                      </div>
                  </div>
                  
                  <div className='cursor-pointer hover:opacity-80 flex flex-col text-left space-y-4'>
                      <div className='relative w-72 h-96 md:w-[600px] md:h-[900px]'>
                          <Image layout='fill' src={ManW} />
                      </div>
                      <div className='flex flex-col'>
                        <div>
                          <h1 className='text-white text-lg'>Item Name</h1>
                        </div>
                          <div>
                              <span className='text-md text-gray-400'>Price</span>
                          </div>
                      </div>
                </div>

                </div>
            </section>
      </div>

          </div>
  )
}

export default Shop