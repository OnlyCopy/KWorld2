import { SocialIcon } from "react-social-icons";

function Socials() {
    return (
        <div>
            <div className="pb-4">
                <h1 className='text-3xl font-bold'>Listen to K Pierre</h1>
            </div>
            <div className='flex flex-row space-x-4 items-center'>
                <SocialIcon url="https://soundcloud.com/its-minime" target="_blank" />
                <SocialIcon url="https://www.youtube.com/channel/UC7-iLTekrzSAj1q_YKI-6iw" target="_blank" />
                <SocialIcon url="https://open.spotify.com/artist/0BmpvDkzjv2SQuKPHTwevI" target="_blank" />
                <SocialIcon url="https://music.apple.com/us/artist/k-pierre/513317653" target="_blank" />
            </div>
        </div>
    )
}

export default Socials;