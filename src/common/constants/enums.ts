export const roles = ['director_producer', 'camera_operator'] 
export type Role = (typeof roles)[number];
export function roleTypeChecker(arg: any): arg is Role {
  return roles.includes(arg);
}

export const genres = ['documentary', 'animation', 'series'] 
export type Genre = (typeof genres)[number];
export function genreTypeChecker(arg: any): arg is Genre {
  return genres.includes(arg);
}

export const navLinks = [
  { route: '/', label: 'Recent Work' },
  { route: '/about', label: 'About' },
  { route: '/contact', label: 'Contact' },
] as const;
