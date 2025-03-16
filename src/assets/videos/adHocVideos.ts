import { IVideoInfo } from '../../common/interfaces/IVideoInfo'

export const adHocVideos = [
  {
    title: 'How Corporations Raided Medicare',
    url: 'https://www.youtube.com/embed/_nBMbcRtteU?si=eAZ04KEZC01r211L',
    clientName: 'More Perfect Union',
    genres: [],
    roles: ['director_of_photography'],
  },
  {
    title: "What Energy Companies Don't Want You To Know",
    url: 'https://www.youtube.com/embed/LTxnsj__zfE?si=uS6GLnSYEFhFTXm7',
    clientName: 'More Perfect Union',
    genres: [],
    roles: ['director_of_photography'],
  },
  {
    title: 'From Mass to the Mountain',
    url: 'https://vimeo.com/121707380',
    genres: ['documentary'],
    roles: ['director_producer', 'director_of_photography'],
  },
  {
    title: 'Afro Punk Ballet',
    url: 'https://player.vimeo.com/video/282421105',
    genres: ['documentary'],
    roles: ['director_producer', 'director_of_photography'],
  },
  {
    title: 'Meet The Pill Bug',
    url: 'https://player.vimeo.com/video/222272362',
    genres: [],
    roles: ['director_producer', 'director_of_photography'],
  },
  {
    title: "Fox Haven Farm's Herb CSA promo",
    url: 'https://player.vimeo.com/video/299125735',
    clientName: 'Fox Haven Farms',
    genres: [],
    roles: ['director_producer', 'director_of_photography'],
  },
  {
    title: 'Horseshoes $ Hand Grenades Live at Pabst Theater',
    url: 'https://player.vimeo.com/video/209430237',
    clientName: 'Wood Grain Media',
    genres: [],
    roles: ['director_of_photography'],
  },
  {
    title: 'Lizzy Young: Kill All The Men',
    url: 'https://www.youtube.com/embed/FraGYU6ajaw?si=8606oIgdgGf7Fphr',
    clientName: 'GFY',
    genres: [],
    roles: ['director_of_photography'],
  },
  {
    title: 'HOT 97 Family Dinner Celebrating Hispanic Heritage Month',
    url: 'https://www.youtube.com/embed/aA_lDYSInf8?si=p6mPEtYBixicwcw8',
    clientName: 'HOT 97',
    genres: [],
    roles: ['director_of_photography'],
  },
  {
    title: 'DJ Enuff Makes "Home Grown" Dish',
    url: 'https://www.youtube.com/embed/Je4Wwm3-Y8g?si=mbwzOVTza0E4dqUr',
    clientName: 'HOT 97',
    genres: [],
    roles: ['director_of_photography'],
  },
  {
    title: 'Cambrooke BetterMilk',
    url: 'https://www.youtube.com/embed/ydbsRvoy5Ls?si=UyDICj-Y9oK4ptc2',
    genres: [],
    roles: ['director_of_photography'],
  },
  // {
  //   title: 'The Indicators',
  //   url: 'https://www.youtube.com/embed/ydbsRvoy5Ls?si=UyDICj-Y9oK4ptc2',
  //   genres: ['documentary'],
  //   roles: ['director_producer'],
  // },
  {
    title: 'How To: Go Wicky-Wacky with Bridge',
    url: 'https://player.vimeo.com/video/81963254',
    genres: ['documentary'],
    roles: ['director_of_photography', 'director_producer'],
  },
] as const satisfies Readonly<IVideoInfo[]>
