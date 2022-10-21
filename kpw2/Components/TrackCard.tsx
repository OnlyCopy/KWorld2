import Image from 'next/image'
import React, { useState } from 'react'
import { urlFor } from '../sanity';
import { TrackInfo } from '../typings';


type Props = {
    track: TrackInfo;
  }
  

function TrackCard ( {track} : Props ) {
  return (
    <div className='flex flex-row space-x-2 items-end p-2 cursor-pointer hover:bg-red-500/50 rounded-md'>
        <div className='relative w-16 h-16'>
            <Image className='rounded-md' src={urlFor(track?.trackCover).url()} objectFit='contain' layout='fill' />
        </div>
        <div>
            <div>
                <h1 className='text-lg'>{track?.title}</h1>
            </div>
        </div>
    </div>
  )
}

export default TrackCard;