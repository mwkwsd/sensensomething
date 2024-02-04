import { Genre, Role } from '../constants/enums'

export interface ISeriesDetail {
  name: string
  imageUrl?: string
  orderedVideoUrls: string[]
  highlightUrl?: string // used on series list page
  description?: string
  genres: Genre[]
  roles: Role[]
}
