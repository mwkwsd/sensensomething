import { Genre, Role } from '../constants/enums'

export function getColorForEnum(arg: Genre | Role): string {
  switch (arg) {
    case 'documentary':
      return '#FECBA1'
    case 'animation':
      return '#A3CFBB'
    // There isn't any styling for Series in Figma
    case 'series':
      return 'your_series_color'
    case 'director_of_photography':
      return '#C29EFA'
    case 'director_producer':
      return '#9EC5FE'
    default:
      return ''
  }
}
