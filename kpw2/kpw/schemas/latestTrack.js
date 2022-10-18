export default {
  name: 'latestTrack',
  title: 'LatestTrack',
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
    {
      name: 'linkToTrack',
      title: 'LinkToTrack',
      type: "url",
    },
  ],
}
