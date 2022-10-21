import React from 'react'
import { Album, TrackInfo } from '../typings';
import SongCard from './SongCard'
import TrackCard from './TrackCard';

type Props = {
    albums: Album[];
    trackInfo: TrackInfo[];
  }
function TrackList({albums, trackInfo}: Props) {
  return (
    <div className='h-full w-screen snap-mandatory snap-y text-white pt-10'>
        <div className='max-w-7xl mx-auto justify-center'>
            <div className='pb-8'>
                <h1 className="text-3xl font-bold pb-6">Latest Albums</h1>

                <div className="flex flex-row space-x-4 items-center">
                    {albums?.map((album) => (
                    <SongCard album={album} key={album._id}/>
                    ))}
                </div>
            </div>

            <div className="grid grid-cols-4 w-full h-full items-center overflow-y-scroll">
                {trackInfo?.map((track) => (
                <TrackCard track={track} key={track._id}/>
                ))}
            </div>
        </div>
    </div>
  )
}

export default TrackList