import {
  PageEnum,
  genreToText,
  genreToUrl,
  roleToText,
  roleToUrl,
} from '../constants/constants'
import { Genre, Role, genreTypeChecker } from '../constants/enums'

type Enums = Genre | Role

export function convertFromEnumToText(arg: Enums): string {
  if (genreTypeChecker(arg)) {
    return genreToText[arg]
  } /* assume arg is Role */ else {
    return roleToText[arg]
  }
}

export function convertFromEnumToUrl(arg: Enums): string {
  if (genreTypeChecker(arg)) {
    return genreToUrl[arg]
  } else {
    return roleToUrl[arg]
  }
}

export function getPageType(pageEnum: PageEnum): 'genre' | 'role' {
  if (genreTypeChecker(pageEnum)) return 'genre'
  return 'role'
}
