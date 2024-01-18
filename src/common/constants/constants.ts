import { Genre, Role } from './enums'

export const roleToText: { [key in Role]: string } = {
  camera_operator: 'Camera Operator',
  director_producer: 'Director & Producer',
}

export const roleToUrl: { [key in Role]: string } = {
  camera_operator: 'camera-operator',
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
