import Image from 'next/image'
import React from 'react'
import { Album2 } from '../images/index'
import { urlFor } from '../sanity';
import { Album } from '../typings';

type Props = {
    album: Album;
  }

function SongCard ( {album} : Props ) {
  return (
    <div className='flex flex-col space-y-4 text-left'>
        <div className='relative w-36 h-36'>
            <Image src={urlFor(album?.trackCover).url()} objectFit='contain' layout='fill' />
        </div>
        <div>
            <div>
                <h1 className='text-lg'>{album?.title}</h1>
            </div>
            <div>
                <span className='text-md text-gray-400'>{album?.type}</span>
            </div>
            <div>
                <span className='text-md text-gray-400'>{album?.release}</span>
            </div>
        </div>
    </div>
  )
}

export default SongCard;