import { VideoTitle } from '../videos'

type RecentWorkPageType = {
  videoTitles: readonly VideoTitle[]
}

export const recentWorkPageInfo: RecentWorkPageType = {
  videoTitles: [
    'The Indicators',
    'Peak Performance: Flying the Fire Boss',
    'How Corporations Raided Medicare',
    "What Energy Compnaies Don't Want You To Know",
  ],
} as const
