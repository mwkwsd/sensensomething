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
    roles: ['director_producer', 'camera_operator'],
  },
  {
    url: '',
    title: '',
    clientName: '',
    genres: ['animation'],
    roles: ['camera_operator'],
    isRecentWork: false,
  },
]

export default videos
