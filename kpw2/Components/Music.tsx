import React from 'react'
import SongCard from './SongCard'
import LatestTrackCard from './LatestTrackCard';
import { SocialIcon } from 'react-social-icons';
import { Album, LatestTrack } from '../typings';
import Image from 'next/image'
import Link from 'next/link'
import { Girl1, Girl2, } from '../images/index'

type Props = {
    albums: Album[];
    latestTracks: LatestTrack[];
  }
  
function Music( {albums, latestTracks} : Props ) {
  return (
    <div className='h-full w-screen snap-mandatory snap-y text-white pt-10'>
        <div className='max-w-7xl mx-auto justify-center'>

        <section className='pb-10'>
                <div className='items-center mb-8 text-center'>
                    <div>
                        <h1 className='text-3xl tracking-[20px]'>Latest from K Pierre</h1>
                    </div>
                </div>
                <div className='flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-4 flex-shrink-0 items-center'>
                    {latestTracks.map((track) => (
                        <LatestTrackCard key={track._id} track={track} />
                    ))}
                </div>
            </section>

            <section className='pb-8 flex flex-col items-center md:items-stretch'>
                <div className='flex flex-col md:flex-row md:justify-between items-center mb-2'>
                    <div>
                        <h1 className='font-bold text-2xl'>Albums & Ep's</h1>
                    </div>
                    <div className='cursor-pointer'>
                        <span className='text-gray-400 font-light'>View all</span>
                    </div>
                </div>
                <div className='grid grid-cols-2 space-y-4 items-center md:flex md:flex-row md:space-x-4 md:space-y-0'>
                    {albums?.map((album) => (
                        <SongCard album={album} key={album._id}/>
                    ))}
                </div>
            </section>

            <section className='pb-8 space-y-2 items-center md:items-start text-center flex flex-col'>
                <div>
                    <h1 className='text-2xl font-bold'>Listen to K Pierre</h1>
                </div>
                <div className='flex flex-row space-x-4 items-center'>
                    <SocialIcon url="https://soundcloud.com/its-minime" target="_blank" />
                    <SocialIcon url="https://www.youtube.com/channel/UC7-iLTekrzSAj1q_YKI-6iw" target="_blank" />
                    <SocialIcon url="https://open.spotify.com/artist/0BmpvDkzjv2SQuKPHTwevI" target="_blank" />
                    <SocialIcon url="https://music.apple.com/us/artist/k-pierre/513317653" target="_blank" />
                </div>
            </section>
        </div>
    </div>
  )
}

export default Music