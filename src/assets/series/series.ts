import { ISeriesDetail } from '../../common/interfaces/ISeriesDetail'
import { lowPheLifeVideos } from '../videos/lowPheLife'

export const allSeriesInfo: ISeriesDetail[] = [
  {
    path: 'low-phe-life',
    name: 'The Low-Phe Life',
    genres: ['animation'],
    roles: ['director_producer'],
    orderedVideoUrls: lowPheLifeVideos.map(video => video.url), // I'm keeping this for now in case this changes
    highlightUrl: lowPheLifeVideos[0]?.url,
    shortDescription: 'Short Description for Low-Phe Life',
    fullDescription:
      'Much longer description for the animation seies "The Low-Phe Life"',
  },
]
