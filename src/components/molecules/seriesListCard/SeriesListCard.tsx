import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from '@mui/material'
import { ISeriesDetail } from '../../../common/interfaces/ISeriesDetail'
import { VideoTitle } from '../../atoms/videoTitle/VideoTitle'
import { getVideoInfoForSeriesDetail } from '../../../common/utils/utils'
import { VideoInfoWithLink } from '../../atoms/videoInfoWithLink/videoInfoWithLink'
import { Video } from '../../atoms/video/Video'
import { useMemo } from 'react'
import { useNavigate } from 'react-router-dom'

type SeriesListCardProps = {
  seriesInfo: ISeriesDetail
}

export function SeriesListCard({ seriesInfo }: SeriesListCardProps) {
  const { name, genres, roles, shortDescription } = seriesInfo
  const navigate = useNavigate()

  const rolesGenresChips = (
    <VideoInfoWithLink
      linkableInfo={[...roles, ...genres]}
      sx={{ paddingBottom: '8px' }}
    />
  )
  const videoInfo = getVideoInfoForSeriesDetail(seriesInfo)

  const mediaCardVideo = useMemo(() => {
    if (!videoInfo) return null
    return <Video url={videoInfo.url} />
  }, [videoInfo])

  return (
    <Card elevation={0}>
      <CardContent sx={{ '&:last-child': { padding: '16px' } }}>
        <VideoTitle title={name} sx={{ paddingBottom: '8px' }}></VideoTitle>
        {shortDescription && (
          <Typography variant="body1" sx={{ paddingBottom: '8px' }}>
            {shortDescription}
          </Typography>
        )}
        {rolesGenresChips}
      </CardContent>
      {mediaCardVideo}
      <CardActions sx={{ justifyContent: 'center' }}>
        <Button onClick={() => navigate(`/series/${seriesInfo.path}`)}>
          <Typography variant="button">Explore the Series</Typography>
        </Button>
      </CardActions>
    </Card>
  )
}
