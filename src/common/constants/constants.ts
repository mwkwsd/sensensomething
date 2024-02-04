import { Genre, Role } from './enums'

export type PageEnum = Genre | Role

interface EnumMapping {
  text: string
  url: string
}
export const enumMappings: { [key in Role]: EnumMapping } & {
  [key in Genre]: EnumMapping
} = {
  director_of_photography: {
    text: 'Director of Photography',
    url: '/video-list-page?role=director-of-photography',
  },
  director_producer: {
    text: 'Director & Producer',
    url: '/video-list-page?role=director-producer',
  },
  animation: {
    text: 'Animation',
    url: '/lo-phe-life',
  },
  documentary: {
    text: 'Documentary',
    url: '/video-list-page?genre=documentary',
  },
  series: {
    text: 'Series',
    url: '/series',
  },
} as const
