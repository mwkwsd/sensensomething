import { clients, IClientInfo } from '../../assets/clients/clients'
import { directorOfPhotographyPageInfo } from '../../assets/pages/directorOfPhotography'
import { directorProducerPageInfo } from '../../assets/pages/directorProducer'
import { documentaryPageInfo } from '../../assets/pages/documentary'
import allSeriesInfo from '../../assets/pages/series'
import videos from '../../assets/videos'
import { Role } from '../constants/enums'
import { ISeriesDetail } from '../interfaces/ISeriesDetail'
import { IVideoInfo } from '../interfaces/IVideoInfo'
import { IVideoListPageInfo } from '../interfaces/IVideoListPageInfo'

export type VideoPageArgs = [
  IVideoListPageInfo,
  Role | 'documentary',
  'genre' | 'role'
]

export function getVideoPageFromVideosPath(
  pathArg: string | undefined
): VideoPageArgs {
  if (
    !(
      pathArg === 'director-producer' ||
      pathArg === 'director-of-photography' ||
      pathArg === 'documentary'
    )
  ) {
    const message = `Unknown videos list key: ${pathArg}`
    console.error(message)
    throw new Error(message)
  }
  switch (pathArg) {
    case 'documentary':
      return [documentaryPageInfo, 'documentary', 'genre']
    case 'director-of-photography':
      return [directorOfPhotographyPageInfo, 'director_of_photography', 'role']
    case 'director-producer':
      return [directorProducerPageInfo, 'director_producer', 'role']
  }
}

export function getSeriesDetailFromSeriesPath(
  pathArg: string | undefined
): ISeriesDetail {
  const series = allSeriesInfo.find(seriesInfo => seriesInfo.path === pathArg)
  if (!series) {
    throw new Error(`Failed to find series with path ${pathArg}`)
  }
  return series
}

export function getVideoInfoForTitle(title: string): IVideoInfo | null {
  return videos.find(video => video.title === title) ?? null
}

export function getClientByName(
  clientName: string | undefined
): IClientInfo | null {
  if (!clientName) return null
  return clients.find(client => client.name === clientName) ?? null
}
