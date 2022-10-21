interface SanityBody {
    _createedAt: string;
    _id: string;
    _rev: string;
    _updatedAt: string;
}

interface Image {
    _type: "image";
    asset: {
        _ref: string;
        _type: "reference";
    }
}

export interface Album extends SanityBody {
    _type: 'albums';
    trackCover: Image;
    title: string;
    trackList: TrackInfo[];
    release: date;
    type: string;
   }
   
export interface TrackInfo extends SanityBody {
    _type: 'track';
    trackCover: Image;
    title: string;
   }
   
export interface LatestTrack extends SanityBody {
    _type: 'track';
    trackCover: Image;
    title: string;
    linkToTrack: string;
    release: date;
    type: string;
   }
   