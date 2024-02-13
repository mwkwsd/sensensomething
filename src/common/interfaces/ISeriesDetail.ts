import videos, { VideoTitle } from '../../assets/videos'
import { Genre, Role } from '../constants/enums'

export interface ISeriesDetail {
  path: string // /series/{path}
  name: string
  imageUrl?: string
  orderedVideoTitles: VideoTitle[]
  highlightTitle?: VideoTitle // used on series list page
  shortDescription?: string
  fullDescription?: string
  genres: Genre[]
  roles: Role[]
}
