import { Genre, Role } from './enums'

export type PageEnum = Genre | Role

interface EnumMapping {
  label: string
  url: string
}
export const enumMappings: { [key in Role]: EnumMapping } & {
  [key in Genre]: EnumMapping
} = {
  director_of_photography: {
    label: 'Director of Photography',
    url: '/videos?filter=director-of-photography',
  },
  director_producer: {
    label: 'Director & Producer',
    url: '/videos?filter=director-producer',
  },
  animation: {
    label: 'Animation',
    url: '/series/lo-phe-life',
  },
  documentary: {
    label: 'Documentary',
    url: '/videos?filter=documentary',
  },
  series: {
    label: 'Series',
    url: '/series',
  },
} as const
