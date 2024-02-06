import { allSeriesInfo } from '../../assets/series/series'
import { Genre, Role, genreTypeChecker } from '../constants/enums'
import { ISeriesDetail } from '../interfaces/ISeriesDetail'

type Enums = Genre | Role

export function getPageType(pageEnum: Enums): 'genre' | 'role' {
  if (genreTypeChecker(pageEnum)) return 'genre'
  return 'role'
}

export function getSeriesDetailFromSeriesPath(
  pathArg: string | undefined
): ISeriesDetail {
  const series = allSeriesInfo.find(seriesInfo => seriesInfo.path === pathArg)
  if (!series) {
    const message = `Failed to find series with path ${pathArg}`
    console.error(message)
    throw new Error(message)
  }
  return series
}
