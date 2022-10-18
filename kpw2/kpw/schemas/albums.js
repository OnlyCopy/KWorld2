export default {
  name: 'albums',
  title: 'Albums',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'type',
      title: 'Type',
      type: 'string',
    },
    {
      name: 'tracks',
      title: 'Tracks',
      type: 'string',
    },
    {
      name: 'trackList',
      title: 'TrackList',
      type: "array",
      of: [{ type: "reference", to: { type: "trackInfo"}}],
    },
    {
      name: 'release',
      title: 'Release',
      type: "date",
    },
    {
      name: 'trackCover',
      title: 'TrackCover',
      type: 'image',
      options: {
        hotspot: true,
      }
    },
  ],
}
