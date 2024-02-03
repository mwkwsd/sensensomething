import { Card, CardContent, CardMedia, Stack } from '@mui/material'
import { useMemo } from 'react'
import { Video } from '../../atoms/video/Video'
import { VideoTitle } from '../../atoms/videoTitle/VideoTitle'
import { VideoInfo } from '../../atoms/videoInfo/VideoInfo'
import { IVideoCard } from '../../../common/interfaces/IVideoCard'
import { getPageType } from '../../../common/utils/utils'
import { VideoInfoWithLink } from '../../atoms/videoInfoWithLink/videoInfoWithLink'
import { PageEnum } from '../../../common/constants/constants'

type VideoCardProps = {
  video: Omit<IVideoCard, 'isRecentWork'>
  pageEnum: PageEnum
}

// TODO: Video needs to take full width of Card
export function VideoCard({
  video: { url, title, clientName, roles, genres },
  pageEnum,
}: VideoCardProps) {
  const mediaCardVideo = useMemo(() => <Video url={url} />, [url])
  const videoTitle = useMemo(() => <VideoTitle title={title} />, [title])

  const pageType = getPageType(pageEnum)

  const clientComponent = useMemo(
    () => <VideoInfo label="Client" info={clientName} />,
    [clientName]
  )

  const rolesGenres = useMemo(() => {
    const toLink = pageType === 'genre' ? roles : genres
    return <VideoInfoWithLink linkableInfo={toLink} />
  }, [roles, genres, pageType])

  return (
    <Card elevation={0} variant="outlined" sx={{ width: 1 }}>
      {mediaCardVideo}
      <CardContent>
        {videoTitle}
        {clientComponent}
        <Stack direction="row" spacing={1}>
          {rolesGenres}
        </Stack>
      </CardContent>
    </Card>
  )
}
