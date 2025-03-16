interface IClientInfo {
  name: string
  url?: string
}

export const clients = [
  { name: 'Fox Haven Farms' },
  { name: 'Wood Grain Media' },
  { name: 'GFY' },
  { name: 'HOT 97' },
  {
    name: 'More Perfect Union',
    url: 'https://perfectunion.us/',
  },
  {
    name: 'AOPA Air Safety Institute',
    url: 'https://www.aopa.org/training-and-safety/air-safety-institute',
  },
  {
    name: 'Aircraft Owners & Pilots Association',
    url: 'https://www.aopa.org/',
  },
] as const satisfies IClientInfo[]

export type ClientName = (typeof clients)[number]['name']
