import { IVideoInfo } from '../../common/interfaces/IVideoInfo'

const lowPheLife: Omit<IVideoInfo, 'roles' | 'genres'>[] = [
  {
    title: 'The Low-Phe Life: The Stain',
    url: 'https://youtu.be/K9OPrpQYO90?feature=shared',
  },
  {
    title: 'The Low-Phe Life: The Box',
    url: 'https://youtu.be/QWcVUgeDJFc?feature=shared',
  },
  {
    title: 'The Low-Phe Life: The Trip',
    url: 'https://youtu.be/Qo-WqcvOOME?feature=shared',
  },
  {
    title: 'The Low-Phe Life: The Test',
    url: 'https://youtu.be/twunka4KmQk?feature=shared',
  },
  {
    title: 'The Low-Phe Life: The Taste',
    url: 'https://youtu.be/JKUgzkaMAI8?feature=shared',
  },
  {
    title: 'The Low-Phe Life: The Conversation',
    url: 'https://youtu.be/aM1JjhcU3DQ?feature=shared',
  },
]

export const lowPheLifeVideos: IVideoInfo[] = lowPheLife.map(lpl => ({
  roles: ['director_producer'],
  genres: ['animation'],
  ...lpl,
}))
