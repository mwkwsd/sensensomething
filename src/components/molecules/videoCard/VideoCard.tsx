import React from 'react'
import { Card, CardContent, CardMedia } from '@mui/material'
import { useMemo } from 'react'
import { Video } from '../../atoms/video/Video'
import { VideoTitle } from '../../atoms/videoTitle/VideoTitle'
import { VideoInfo } from '../../atoms/videoInfo/VideoInfo'
import { IVideoCard } from '../../../common/interfaces/IVideoCard'
import {
  convertFromEnumToText,
  convertFromEnumToUrl,
  getPageType,
} from '../../../common/utils/utils'
import { Link } from 'react-router-dom'
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

  const rolesComponent = useMemo(() => {
    if (pageType === 'role') return null
    return <VideoInfoWithLink label="Roles" linkableInfo={roles} />
  }, [roles, pageType])

  const genresComponent = useMemo(() => {
    if (pageType === 'genre') return null
    return <VideoInfoWithLink label="Genres" linkableInfo={genres} />
  }, [genres, pageType])

  return (
    <Card elevation={0} variant="outlined" sx={{ width: 1 }}>
      {mediaCardVideo}
      <CardContent>
        {videoTitle}
        {clientComponent}
        {rolesComponent}
        {genresComponent}
      </CardContent>
    </Card>
  )
}
