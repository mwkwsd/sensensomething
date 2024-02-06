import { lowPheLifeVideos } from './lowPheLife'
import { adHocVideos } from './videos'

const videos = [adHocVideos, lowPheLifeVideos].flatMap(i => i)

export default videos
