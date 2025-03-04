import { IVideoInfo } from '../../../common/interfaces/IVideoInfo'

export const otherAOPAVideos = [
  {
    title: 'Peak Performance: Flying the Fire Boss',
    url: 'https://www.youtube.com/embed/9pYw1j-mcQg?si=79t6cuaNJveq6Jnf',
    clientName: 'AOPA Air Safety Institute',
    clientUrl: 'https://www.aopa.org/',
    genres: [],
    roles: ['director_producer', 'director_of_photography'],
  },
  {
    title: 'What are the Costliest Insurance Claims?',
    url: 'https://www.youtube.com/embed/QzvJcuMTi-E?si=-W7UAB5Mu38JAUYa',
    clientName: 'AOPA Air Safety Institute',
    clientUrl: 'https://www.aopa.org/',
    genres: [],
    roles: ['director_producer', 'director_of_photography'],
  },
  {
    title: 'P-51 Engine Out',
    url: 'https://www.youtube.com/embed/BBpqvPujZgM?si=jVWZ9Nphy0jJZIMq',
    clientName: 'AOPA Air Safety Institute',
    clientUrl: 'https://www.aopa.org/',
    genres: [],
    roles: ['director_of_photography'],
  },
  {
    title: 'Flyoff: Beech Staggerwing vs. Howard DGA-15',
    url: 'https://www.youtube.com/embed/I7mYjyFuZy8?si=IkpACdJYGkuJyvRr',
    clientName: 'Aircraft Owners & Pilots Association',
    genres: [],
    roles: ['director_of_photography'],
  },
  {
    title: 'Podcast: There I Was with Thomas Middleditch',
    url: 'https://www.youtube.com/embed/nAwYnlp0NnU?si=TZZL0KOtDmDbY2-e',
    clientName: 'AOPA Air Safety Institute',
    clientUrl: 'https://www.aopa.org/',
    genres: [],
    roles: ['director_producer'],
  },
] as const satisfies Readonly<IVideoInfo[]>
