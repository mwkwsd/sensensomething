import { Genre, Role } from '../constants/enums'

export function getColorForEnum(arg: Genre | Role): string {
  switch (arg) {
    case 'documentary':
      return '#FECBA1'
    case 'animation':
      return '#A3CFBB'
    case 'series':
      return 'ffb74d'
    case 'director_of_photography':
      return '#C29EFA'
    case 'director_producer':
      return '#9EC5FE'
    default:
      return ''
  }
}
