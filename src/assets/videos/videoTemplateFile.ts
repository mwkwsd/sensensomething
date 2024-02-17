import { IVideoInfo } from '../../common/interfaces/IVideoInfo'

// Don't forget to add this variable to the `index.ts` file located in the same directory
export const videoTemplateFiles = [
  {
    // Required fields
    title: 'Required title',
    url: "Copied from hosting website's embed option",
    genres: [],
    roles: [],

    // Optional Fields
    clientName: 'Any client name',
    description: 'Description of the video', // Used in series pages
  },

  {
    // Required fields
    title: "Values with an apostrophe ' looks uses double quotes",
    url: "Copied from hosting website's embed option",
    genres: [],
    roles: [],
  },
] as const satisfies Readonly<IVideoInfo[]>
