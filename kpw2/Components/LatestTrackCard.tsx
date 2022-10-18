import Image from 'next/image'
import React from 'react'
import { Girl1 } from '../images'
import { urlFor } from '../sanity';
import { LatestTrack } from '../typings';

type Props = {
  track: LatestTrack;
}

function LatestTrackCard({ track }: Props) {
  return (
    <a href={track?.linkToTrack} target="_blank">
    <div className='cursor-pointer hover:opacity-80 flex flex-col text-left space-y-4'>
        <div className='relative w-96 h-96 md:w-[600px] md:h-[700px]'>
            <Image layout='fill' src={urlFor(track?.trackCover).url()} />
        </div>
        <div className='flex flex-col'>
          <div>
            <h1 className='text-white text-lg'>{track?.title}</h1>
          </div>
            <div>
                <span className='text-md text-gray-400'>{track?.type}</span>
            </div>
            <div>
                <span className='text-md text-gray-400'>{track?.release}</span>
            </div>
        </div>
    </div>
</a>
  )
}

export default LatestTrackCard