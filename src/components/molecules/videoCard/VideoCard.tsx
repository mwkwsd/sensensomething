import { Card, CardContent, CardMedia } from '@mui/material'
import { useMemo } from 'react'
import { IVideoInfo } from '../../../common/interfaces/IVideoInfo'
import { getClientByName } from '../../../common/utils/utils'
import { PreModalImage } from '../../atoms/preModalImage/PreModalImage'
import { VideoInfo } from '../../atoms/videoInfo/VideoInfo'
import { VideoInfoWithLink } from '../../atoms/videoInfoWithLink/videoInfoWithLink'
import { VideoTitle } from '../../atoms/videoTitle/VideoTitle'

type VideoCardProps = {
  video: IVideoInfo
  pageType: 'genre' | 'role' | 'recent'
}

// TODO: Video needs to take full width of Card
export function VideoCard({ video, pageType }: VideoCardProps) {
  const { title, clientName, roles, genres } = video

  const clientInfo = useMemo(() => getClientByName(clientName), [clientName])

  const rolesGenres = useMemo(() => {
    if (pageType === 'genre') {
      return [...roles]
    } else if (pageType === 'role') {
      return [...genres]
    } else {
      return [...roles, ...genres]
    }
  }, [roles, genres, pageType])

  return (
    <Card>
      <CardMedia>
        <PreModalImage videoInfo={video} />
      </CardMedia>
      <CardContent>
        <VideoTitle title={title} sx={{ marginBottom: '8px' }} />
        {clientInfo && (
          <VideoInfo
            label="Client"
            info={clientInfo.name}
            url={clientInfo.url}
            sx={{ marginBottom: '8px' }}
          />
        )}
        <VideoInfoWithLink linkableInfo={rolesGenres} />
      </CardContent>
    </Card>
  )
}
