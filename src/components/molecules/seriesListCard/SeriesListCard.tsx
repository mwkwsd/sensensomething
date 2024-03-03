import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material'
import { useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { ISeriesDetail } from '../../../common/interfaces/ISeriesDetail'
import { getVideoInfoForSeriesDetail } from '../../../common/utils/utils'
import { UnderlinedButton } from '../../atoms/buttons/UnderlinedButton'
import { PreModalImage } from '../../atoms/preModalImage/PreModalImage'
import { VideoInfoWithLink } from '../../atoms/videoInfoWithLink/videoInfoWithLink'
import { VideoTitle } from '../../atoms/videoTitle/VideoTitle'

type SeriesListCardProps = {
  seriesInfo: ISeriesDetail
}

export function SeriesListCard({ seriesInfo }: SeriesListCardProps) {
  const { name, genres, roles, shortDescription } = seriesInfo
  const navigate = useNavigate()

  const rolesGenresChips = (
    <VideoInfoWithLink
      linkableInfo={[...roles, ...genres].filter(tag => tag !== 'series')}
      sx={{ paddingBottom: '8px' }}
    />
  )
  const videoInfo = getVideoInfoForSeriesDetail(seriesInfo)

  const cardMediaImage = useMemo(() => {
    if (!videoInfo) return null
    return <PreModalImage videoInfo={videoInfo} />
  }, [videoInfo])

  return (
    <Card>
      <CardContent>
        <VideoTitle title={name} sx={{ paddingBottom: '8px' }} />
        {shortDescription && (
          <Typography variant="body1" sx={{ paddingBottom: '8px' }}>
            {shortDescription}
          </Typography>
        )}
        {rolesGenresChips}
      </CardContent>
      <CardMedia>{cardMediaImage}</CardMedia>
      <CardActions sx={{ justifyContent: 'center' }}>
        <UnderlinedButton
          label="Explore the Series"
          onClick={() => navigate(`/series/${seriesInfo.path}`)}
        />
      </CardActions>
    </Card>
  )
}
