import { TrackInfo } from "../typings";

export const fetchTrackInfo = async() => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getTrackInfo`);

    const data = await res.json();
    const trackInfo: TrackInfo[] = data.trackInfo;

    return trackInfo;
}