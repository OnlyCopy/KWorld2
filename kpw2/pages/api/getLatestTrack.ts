import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";
import { LatestTrack } from "../../typings";




const query = groq`
*[_type == "latestTrack"]
`;

type Data = {
    latestTracks: LatestTrack[]
};

export default async function handler ( req: NextApiRequest, res: NextApiResponse<Data> ) {
    const latestTracks: LatestTrack[] = await sanityClient.fetch(query);

    res.status(200).json({ latestTracks });
}