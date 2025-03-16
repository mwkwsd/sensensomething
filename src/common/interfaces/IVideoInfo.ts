import { Genre, Role } from '../constants/enums'

// Should this interface live here? Do we want to have a separate file for this type of interface?
export interface IVideoInfo {
  readonly url: string // The URL of the video
  readonly title: string // The title of the video
  readonly thumbnailPath?: string
  readonly description?: string // Used on series detail page
  readonly clientName?: string // The name of the client
  readonly clientUrl?: string
  readonly roles: readonly Role[] // The roles Kurt was for this video
  readonly genres: readonly Genre[] // The genre of the video
}
