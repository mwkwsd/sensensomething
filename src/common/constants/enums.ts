const roles = ["director_producer", "camera_operator"] as const;
export type Role = (typeof roles)[number];
export function roleTypeChecker(arg: any): arg is Role {
  return arg in roles;
}
const genres = ["documentary", "animation", "series"] as const;
export type Genre = (typeof genres)[number];
export function genreTypeChecker(arg: any): arg is Genre {
  return arg in genres;
}