import { IVideoCard } from '../../common/interfaces/IVideoCard'

const videos: IVideoCard[] = [
  {
    url: 'https://player.vimeo.com/video/121707380',
    title: 'From Mass to the Mountain',
    clientName: 'Self',
    genres: ['documentary'],
    roles: ['director_producer'],
  },
  {
    url: 'https://player.vimeo.com/video/222272362',
    title: 'Meet The Pill Bug',
    clientName: 'Bugs Everywhere',
    genres: ['documentary', 'animation'],
    roles: ['director_producer', 'director_of_photography'],
  },
  {
    url: '',
    title: '',
    clientName: '',
    genres: ['animation'],
    roles: ['director_of_photography'],
    isRecentWork: false,
  },
]

export default videos
