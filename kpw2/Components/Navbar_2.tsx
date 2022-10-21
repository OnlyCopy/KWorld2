import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Hoops } from '../images/index'


function Navbar_2() {
  return (
    <nav className='w-full z-10 sticky top-0'>
        <div className='flex justify-between items-center max-w-7xl mx-auto text-white p-8'>
            {/* Left section */}
            <div className='relative w-12 h-12 hover:cursor-pointer hover:animate-pulse'>
                <Link href='/'>
                    <Image src={Hoops} objectFit='contain' layout='fill' />
                </Link>
            </div>
            {/* Right section */}
            <ul className='flex space-x-4 text-2xl navigation'>
                <li>
                    <Link href='#music'>
                        Music
                    </Link>
                </li>
                <li>
                    <Link href='#contact'>
                        Contact
                    </Link>
                </li>
                <li>
                    <Link href='#shop'>
                        Shop
                    </Link>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar_2