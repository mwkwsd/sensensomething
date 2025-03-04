import { IVideoInfo } from '../../../common/interfaces/IVideoInfo'

export const avoidingVideos = [
  {
    title: 'Avoiding Gear-Up Landings',
    url: 'https://www.youtube.com/embed/_Bx-OrmwPag?si=GosgorR1D7ulvLsX',
    clientName: 'AOPA Air Safety Institute',
    clientUrl: 'https://www.aopa.org/',
    genres: ['series'],
    roles: ['director_producer', 'director_of_photography'],
  },
  {
    title: 'Avoiding Prop Strikes',
    url: 'https://www.youtube.com/embed/XCcmpZRJ9ek?si=vb36fq2b1Bk9N5fg',
    clientName: 'AOPA Air Safety Institute',
    clientUrl: 'https://www.aopa.org/',
    genres: ['series'],
    roles: ['director_producer', 'director_of_photography'],
  },
  {
    title: 'Avoiding Hard Landings',
    url: 'https://www.youtube.com/embed/eM9IdWWfORM?si=VtYWe9KIFGbX455o',
    clientName: 'AOPA Air Safety Institute',
    clientUrl: 'https://www.aopa.org/',
    genres: ['series'],
    roles: ['director_producer', 'director_of_photography'],
  },
  {
    title: 'Avoiding LOC-G',
    url: 'https://www.youtube.com/embed/Q0MDuaXicb0?si=jpGRcJqNcyj91nQG',
    clientName: 'AOPA Air Safety Institute',
    clientUrl: 'https://www.aopa.org/',
    genres: ['series'],
    roles: ['director_producer', 'director_of_photography'],
  },
] as const satisfies Readonly<IVideoInfo[]>
