import { Album } from "../typings";

export const fetchAlbums = async() => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getAlbums`);

    const data = await res.json();
    const albums: Album[] = data.albums;

    return albums;
}