import { allSeriesInfo } from '../../assets/series/series'
import videos from '../../assets/videos'
import { Genre, Role, genreTypeChecker } from '../constants/enums'
import { ISeriesDetail } from '../interfaces/ISeriesDetail'
import { IVideoInfo } from '../interfaces/IVideoInfo'

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

export function getVideoInfoForUrl(url: string): IVideoInfo | null {
  return videos.find(video => video.url === url) ?? null
}

export function getVideoInfoForSeriesDetail(
  seriesDetail: ISeriesDetail
): IVideoInfo | null {
  const highlightVideo = seriesDetail.highlightUrl
    ? getVideoInfoForUrl(seriesDetail.highlightUrl)
    : null
  if (highlightVideo) {
    return highlightVideo
  }

  return seriesDetail.orderedVideoUrls[0]
    ? getVideoInfoForUrl(seriesDetail.orderedVideoUrls[0])
    : null
}
