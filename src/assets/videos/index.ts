import { IVideoInfo } from '../../common/interfaces/IVideoInfo'
import { adHocVideos } from './adHocVideos'
import { avoidingVideos } from './aopa/avoiding'
import { beyondProficientVideos } from './aopa/beyondProficient'
import { otherAOPAVideos } from './aopa/otherAOPAvideos'
import { realPilotStoryVideos } from './aopa/realPilotStory'
import { lowPheLifeVideos } from './lowPheLife'

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
