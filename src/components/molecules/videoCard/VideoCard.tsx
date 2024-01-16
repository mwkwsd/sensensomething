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
} from '../../../common/utils/utils'
import { Link } from 'react-router-dom'
import { VideoInfoWithLink } from '../../atoms/videoInfoWithLink/videoInfoWithLink'

type VideoCardProps = Omit<IVideoCard, 'isRecentWork'>

// TODO: Video needs to take full width of Card
export function VideoCard({
  url,
  title,
  clientName,
  roles,
  genres,
}: VideoCardProps) {
  const mediaCardVideo = useMemo(() => <Video url={url} />, [url])
  const videoTitle = useMemo(() => <VideoTitle title={title} />, [title])

  const clientComponent = useMemo(
    () => <VideoInfo label="Client" info={clientName} />,
    [clientName]
  )

  const rolesComponent = useMemo(() => {
    return <VideoInfoWithLink label="Roles" linkableInfo={roles} />
  }, [roles])

  const genresComponent = useMemo(() => {
    return <VideoInfoWithLink label="Genres" linkableInfo={genres} />
  }, [genres])

  return (
    <Card>
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
