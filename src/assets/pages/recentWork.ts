import { PageEnum } from '../../common/constants/constants'
import { VideoTitle } from '../videos'

type RecentWorkPageType = {
  orderedPages: readonly PageEnum[]
  videoTitles: readonly VideoTitle[]
}

export const recentWorkPageInfo: RecentWorkPageType = {
  orderedPages: [
    'director_producer',
    'director_of_photography',
    'documentary',
    'animation',
    'series',
  ],
  videoTitles: [
    'The Indicators',
    'Peak Performance: Flying the Fire Boss',
    'How Corporations Raided Medicare',
    "What Energy Compnaies Don't Want You To Know",
  ],
} as const
