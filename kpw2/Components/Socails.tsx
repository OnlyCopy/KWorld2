import { SocialIcon } from "react-social-icons";

function Socials() {
    return (
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
    )
}

export default Socials;