import { directorOfPhotographyPageInfo } from '../../assets/pages/directorOfPhotography'
import { directorProducerPageInfo } from '../../assets/pages/directorProducer'
import { documentaryPageInfo } from '../../assets/pages/documentary'
import { IVideoListPageInfo } from '../interfaces/IVideoListPageInfo'
import { Genre, Role } from './enums'

export type PageEnum = Genre | Role

interface EnumMapping {
  label: string
  url: string
  pageInfo?: IVideoListPageInfo
  landingPageImage: {
    path: string
    transformLevel?: number
  }
}
export const enumMappings: { [key in Role]: EnumMapping } & {
  [key in Genre]: EnumMapping
} = {
  director_producer: {
    label: 'Director & Producer',
    url: '/videos/director-producer',
    pageInfo: directorProducerPageInfo,
    landingPageImage: {
      path: '/images/director_producer_landing.png',
    },
  },
  director_of_photography: {
    label: 'Director of Photography',
    url: '/videos/director-of-photography',
    pageInfo: directorOfPhotographyPageInfo,
    landingPageImage: {
      path: '/images/director_photography_landing.png',
    },
  },
  documentary: {
    label: 'Documentary',
    url: '/videos/documentary',
    pageInfo: documentaryPageInfo,
    landingPageImage: {
      path: '/images/documentary_landing.jpg',
      transformLevel: 1.1,
    },
  },
  animation: {
    label: 'Animation',
    url: '/series/low-phe-life',
    landingPageImage: {
      path: '/images/animation_landing.png',
      transformLevel: 1.1,
    },
  },
  series: {
    label: 'Series',
    url: '/series',
    landingPageImage: { path: '/images/series_landing.jpg' },
  },
}
