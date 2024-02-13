import { IVideoInfo } from '../../common/interfaces/IVideoInfo'
import { lowPheLifeVideos } from './lowPheLife'
import { adHocVideos } from './adHocVideos'
import { realPilotStoryVideos } from './aopa/realPilotStory'
import { beyondProficientVideos } from './aopa/beyondProficient'
import { avoidingVideos } from './aopa/avoiding'
import { otherAOPAVideos } from './aopa/otherAOPAvideos'

const videos = [
  ...adHocVideos,
  ...lowPheLifeVideos,
  ...realPilotStoryVideos,
  ...beyondProficientVideos,
  ...avoidingVideos,
  ...otherAOPAVideos,
] as const satisfies Readonly<IVideoInfo[]>

export type VideoTitle = (typeof videos)[number]['title']

export default videos
