import type { NextApiRequest, NextApiResponse } from "next";
import { sanityClient } from "../../sanity";
import { TrackInfo } from "../../typings";
import { groq } from 'next-sanity';




const query = groq`
*[_type == "trackInfo"]
`;

type Data = {
    trackInfo: TrackInfo[];
};

export default async function handler ( req: NextApiRequest, res: NextApiResponse<Data> ) {
    const trackInfo: TrackInfo[] = await sanityClient.fetch(query);

    res.status(200).json({ trackInfo });
}