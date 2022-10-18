import { LatestTrack } from "../typings";

export const fetchLatestTracks = async() => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getLatestTrack`);

    const data = await res.json();
    const latestTracks: LatestTrack[] = data.latestTracks;

    return latestTracks;
}