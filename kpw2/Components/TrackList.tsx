import React from 'react'
import { Album, TrackInfo } from '../typings';
import Socials from './Socials';
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
            <div className='pb-8 p-2'>
                <h1 className="text-3xl font-bold pb-6">Latest Albums</h1>

                <div className="flex flex-row space-x-4 items-center">
                    {albums?.map((album) => (
                    <SongCard album={album} key={album._id}/>
                    ))}
                </div>
            </div>


            <div className='p-2 pb-8'>

            <h1 className="text-3xl font-bold pb-6">Latest Tracks</h1>
              
                <div className="grid grid-cols-2 md:grid-cols-4 w-full h-60 items-center overflow-y-scroll">
                    {trackInfo?.map((track) => (
                    <TrackCard track={track} key={track._id}/>
                    ))}
                </div>
                </div>

                <section className='items-center md:items-start text-left flex flex-col pb-8'> 
                  <Socials />
                </section>
            </div>
    </div>
  )
}

export default TrackList