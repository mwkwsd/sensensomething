import { IVideoInfo } from '../../../common/interfaces/IVideoInfo'

export const realPilotStoryVideos = [
  {
    title: 'Real Pilot Story: Hidden Hazard',
    url: 'https://www.youtube.com/embed/6ebhig-vr9o?si=zcpJaIheST-ztnij',
    description: 'Those hazards sure are hard to see!',
    genres: ['series'],
    roles: ['director_producer', 'director_of_photography'],
    clientName: 'AOPA Air Safety Institute',
  },
  {
    title: 'Real Pilot Story: The Heat of the Moment',
    url: 'https://www.youtube.com/embed/hguX8DbJTGw?si=ZRRYG_XqArikqW41',
    description:
      'It is hot now! But it was cool then? Strange how those things can happen? Will it be cold tomorrow?',
    genres: ['series'],
    roles: ['director_producer', 'director_of_photography'],
    clientName: 'AOPA Air Safety Institute',
  },
  {
    title: 'Real Pilot Story: Lost Elevator',
    url: 'https://www.youtube.com/embed/d28ObLQqrY8?si=zYvLJa0sTI1t8-Az',
    genres: ['series'],
    roles: ['director_producer', 'director_of_photography'],
    clientName: 'AOPA Air Safety Institute',
  },
  {
    title: 'Real Pilot Story: Pressure Over the Atlantic',
    url: 'https://www.youtube.com/embed/rt2TGjuwv_s?si=lMt5J0yhbJ_Vn7lr',
    genres: ['series'],
    roles: ['director_producer', 'director_of_photography'],
    clientName: 'AOPA Air Safety Institute',
  },
  {
    title: 'Real Pilot Story: No Go-Around',
    url: 'https://www.youtube.com/embed/NGt6TmkYdUw?si=S9WV9YLeQhbLejXY',
    genres: ['series'],
    roles: ['director_producer', 'director_of_photography'],
    clientName: 'AOPA Air Safety Institute',
  },
  {
    title: 'Real Pilot Story: Powerless Over Paris',
    url: 'https://www.youtube.com/embed/UQtvi1ijPQ4?si=VvhQLR0pakONOnxb',
    genres: ['series'],
    roles: ['director_producer', 'director_of_photography'],
    clientName: 'AOPA Air Safety Institute',
  },
] as const satisfies Readonly<IVideoInfo[]>
