import { VideoTitle } from '../../assets/videos'
import { Genre, Role } from '../constants/enums'

export interface ISeriesDetail {
  path: string // /series/{path}
  name: string
  imageUrl?: string
  orderedVideoTitles: VideoTitle[]
  shortDescription?: string
  fullDescription?: string
  genres: Genre[]
  roles: Role[]
}
