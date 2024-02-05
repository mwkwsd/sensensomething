import { Genre, Role, genreTypeChecker } from '../constants/enums'

type Enums = Genre | Role

export function getPageType(pageEnum: Enums): 'genre' | 'role' {
  if (genreTypeChecker(pageEnum)) return 'genre'
  return 'role'
}
