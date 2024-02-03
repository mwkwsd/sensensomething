import { Genre, Role } from './enums'

export type PageEnum = Genre | Role

export const roleToText: { [key in Role]: string } = {
  director_of_photography: 'Director of Photography',
  director_producer: 'Director & Producer',
} as const

export const roleToUrl: { [key in Role]: string } = {
  director_of_photography: 'director-of-photography',
  director_producer: 'director-producer',
} as const

export const genreToText: { [key in Genre]: string } = {
  animation: 'Animation',
  documentary: 'Documentary',
  series: 'Series',
} as const

export const genreToUrl: { [key in Genre]: string } = {
  animation: 'animation',
  documentary: 'documentary',
  series: 'series',
} as const
