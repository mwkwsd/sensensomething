import { Card, CardContent, CardMedia } from '@mui/material'
import { useMemo } from 'react'
import { IVideoInfo } from '../../../common/interfaces/IVideoInfo'
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
  const { title, clientName, roles, genres, clientUrl } = video

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
        {clientName && (
          <VideoInfo
            label="Client"
            info={clientName}
            url={clientUrl}
            sx={{ marginBottom: '8px' }}
          />
        )}
        <VideoInfoWithLink linkableInfo={rolesGenres} />
      </CardContent>
    </Card>
  )
}
