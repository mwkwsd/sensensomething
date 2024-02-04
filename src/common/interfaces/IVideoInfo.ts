import { Genre, Role } from '../constants/enums'

// Should this interface live here? Do we want to have a separate file for this type of interface?
export interface IVideoInfo {
  url: string // The URL of the video
  title: string // The title of the video
  description?: string // Used on series detail page
  clientName?: string // The name of the client
  roles: Role[] // The roles Kurt was for this video
  genres: Genre[] // The genre of the video
  isRecentWork?: boolean // If this video should be on the recent work section
}
