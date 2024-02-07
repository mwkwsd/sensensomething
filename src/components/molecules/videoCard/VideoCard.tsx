import { Card, CardContent, CardMedia } from '@mui/material'
import { useMemo } from 'react'
import { Video } from '../../atoms/video/Video'
import { VideoTitle } from '../../atoms/videoTitle/VideoTitle'
import { VideoInfo } from '../../atoms/videoInfo/VideoInfo'
import { getPageType } from '../../../common/utils/utils'
import { VideoInfoWithLink } from '../../atoms/videoInfoWithLink/videoInfoWithLink'
import { PageEnum } from '../../../common/constants/constants'
import { IVideoInfo } from '../../../common/interfaces/IVideoInfo'

type VideoCardProps = {
  video: Omit<IVideoInfo, 'isRecentWork'>
  pageEnum: PageEnum
}

// TODO: Video needs to take full width of Card
export function VideoCard({
  video: { url, title, clientName, roles, genres },
  pageEnum,
}: VideoCardProps) {
  const videoComponent = useMemo(() => <Video url={url} />, [url])
  const videoTitle = useMemo(
    () => <VideoTitle title={title} sx={{ marginBottom: '8px' }} />,
    [title]
  )

  const pageType = getPageType(pageEnum)

  const clientComponent = useMemo(() => {
    if (!clientName) return null
    return (
      <VideoInfo
        label="Client"
        info={clientName}
        sx={{ marginBottom: '8px' }}
      />
    )
  }, [clientName])

  const rolesGenres = useMemo(() => {
    const toLink = pageType === 'genre' ? roles : genres
    return <VideoInfoWithLink linkableInfo={toLink} />
  }, [roles, genres, pageType])

  return (
    <Card>
      <CardMedia>{videoComponent}</CardMedia>
      <CardContent>
        {videoTitle}
        {clientComponent}
        {rolesGenres}
      </CardContent>
    </Card>
  )
}
