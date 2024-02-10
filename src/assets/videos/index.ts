import { IVideoInfo } from '../../common/interfaces/IVideoInfo'
import { lowPheLifeVideos } from './lowPheLife'
import { adHocVideos } from './adHocVideos'

const videos = [
  ...adHocVideos,
  ...lowPheLifeVideos,
] as const satisfies Readonly<IVideoInfo[]>

export type VideoTitle = (typeof videos)[number]['title']

export default videos
