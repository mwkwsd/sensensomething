export const roles = ['director_producer', 'director_of_photography'] as const
export type Role = (typeof roles)[number]
export function roleTypeChecker(arg: any): arg is Role {
  return roles.includes(arg)
}

export const genres = ['documentary', 'animation', 'series'] as const
export type Genre = (typeof genres)[number]
export function genreTypeChecker(arg: any): arg is Genre {
  return genres.includes(arg)
}

export const navLinks = [
  { route: '/', label: 'Recent Work' },
  { route: '/about', label: 'About' },
  { route: '/contact', label: 'Contact' },
] as const

const inputs = ["name", "email_address", "message"] as const;
export type Input = (typeof inputs)[number];
export function inputTypeChecker(arg: any): arg is Input {
  return inputs.includes(arg);
}
