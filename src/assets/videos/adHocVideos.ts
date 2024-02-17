import { IVideoInfo } from '../../common/interfaces/IVideoInfo'

export const adHocVideos = [
  {
    url: 'https://www.youtube.com/watch?v=JTRpgFxXwmU',
    title: 'From Mass to the Mountain',
    clientName: 'Self',
    genres: ['documentary'],
    roles: ['director_producer'],
  },
  {
    url: 'https://player.vimeo.com/video/222272362',
    title: 'Meet The Pill Bug',
    clientName: 'Bugs Everywhere',
    genres: ['documentary'],
    roles: ['director_producer', 'director_of_photography'],
  },
  {
    url: 'https://player.vimeo.com/video/282421105',
    title: 'Afro Punk Ballet',
    genres: ['documentary'],
    roles: ['director_producer'],
    isRecentWork: false,
  },
  {
    url: 'https://player.vimeo.com/video/81963254',
    title: 'How To: Go Wicky-Wacky with Bridge',
    genres: ['documentary'],
    roles: ['director_of_photography', 'director_producer'],
  },
] as const satisfies Readonly<IVideoInfo[]>
