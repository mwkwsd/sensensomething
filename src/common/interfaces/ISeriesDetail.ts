import { Genre, Role } from '../constants/enums'

export interface ISeriesDetail {
  path: string // /series/{path}
  name: string
  imageUrl?: string
  orderedVideoUrls: string[]
  highlightUrl?: string // used on series list page
  shortDescription?: string
  fullDescription?: string
  genres: Genre[]
  roles: Role[]
}
