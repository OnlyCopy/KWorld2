import type { NextApiRequest, NextApiResponse } from "next";
import { sanityClient } from "../../sanity";
import { Album } from "../../typings";
import { groq } from 'next-sanity';




const query = groq`
*[_type == "albums"]
`;

type Data = {
    albums: Album[]
};

export default async function handler ( req: NextApiRequest, res: NextApiResponse<Data> ) {
    const albums: Album[] = await sanityClient.fetch(query);

    res.status(200).json({ albums });
}