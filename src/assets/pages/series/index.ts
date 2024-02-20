import { avoidingSeriesInfo } from './avoiding'
import { beyondProficientSeriesInfo } from './beyondProficient'
import { lowPheLofeSeriesInfo } from './lowPheLife'
import { realPilotStorySeriesInfo } from './realPilotStory'

const allSeriesInfo = [
  lowPheLofeSeriesInfo,
  realPilotStorySeriesInfo,
  beyondProficientSeriesInfo,
  avoidingSeriesInfo,
] as const

export default allSeriesInfo
