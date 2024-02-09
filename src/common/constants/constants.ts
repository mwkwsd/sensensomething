import { Genre, Role } from './enums'

export type PageEnum = Genre | Role

interface EnumMapping {
  label: string
  url: string
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
    url: '/videos?filter=director-producer',
    landingPageImage: {
      path: '/images/director_producer_landing.png',
    },
  },
  director_of_photography: {
    label: 'Director of Photography',
    url: '/videos?filter=director-of-photography',
    landingPageImage: {
      path: '/images/director_photography_landing.png',
    },
  },
  documentary: {
    label: 'Documentary',
    url: '/videos?filter=documentary',
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
} as const
