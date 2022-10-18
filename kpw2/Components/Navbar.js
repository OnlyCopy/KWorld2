import Link from 'next/link';
import Image from 'next/image';
import { Chevron,
    Envelope,
    MusicLogo,
    ShoppingBag} from '../images/index';
import React from 'react';
import Hoops from '../images/Hoops.gif';

function Navbar() {
  return (
    <nav className="w-full h-14 overflow-y-hidden my-5">
                <div className="justify-between flex items-center">
                <div>
                    <Link href="/">
                    <div className="text-white flex flex-col items-center hover:text-green-300 cursor-pointer">
                        <Image className='invert' src={Chevron} alt='Hxome' />
                        <div>
                        <span>Return Home</span>
                        </div>
                    </div>
                    </Link>
                </div>

                <div className="flex space-x-8 text-white text-2xl items-center">
                    <div>
                     <div className="nav-text">
                        <Link href="/music">
                            <div>
                                <a className="hover:text-green-300 nav-text">
                                Music
                                </a>
                                <a className="hover:text-green-300 m-icon">
                                    <Image className='invert' src={MusicLogo} alt='Music' />
                                </a>
                            </div>
                        </Link>
                    </div>
                </div>

                    <div>
                        <div className="nav-text">
                            <Link href="/contact">
                                <a className="hover:text-green-300 nav-text">
                                Contact
                                </a>
                            </Link>
                            </div>
                            <div className="m-icon">
                            <Link href="/contact">
                                <a className="hover:text-green-300 m-icon">

                                </a>
                            </Link>
                        </div>
                    </div>
                    
                    <div>
                        <div className="nav-text">
                        <Link href="/shop">
                            <a className="hover:text-green-300 nav-text">
                            Shop  
                            </a>
                        </Link>
                        </div>
                        <div className="m-icon">
                        <Link href="/shop">
                            <a className="hover:text-green-300 m-icon">
                            
                            </a>
                        </Link>
                        </div>
                    </div>
                </div >
                <div>
                    <Image draggable="false" src={Hoops} width={40} height={40} alt="" />
                </div>
                </div>
            </nav>
  )
}

export default Navbar