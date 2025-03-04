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

  const linkableInfo = useMemo(
    () => [...roles, ...genres].filter(tag => tag !== 'series'),
    [roles, genres]
  )

  const videoInfo = getVideoInfoForSeriesDetail(seriesInfo)

  return (
    <Card>
      <CardContent>
        <VideoTitle title={name} sx={{ paddingBottom: '8px' }} />
        {shortDescription && (
          <Typography variant="body1" sx={{ paddingBottom: '8px' }}>
            {shortDescription}
          </Typography>
        )}
        <VideoInfoWithLink
          linkableInfo={linkableInfo}
          sx={{ paddingBottom: '8px' }}
        />
      </CardContent>
      {videoInfo && (
        <CardMedia>
          <PreModalImage videoInfo={videoInfo} />
        </CardMedia>
      )}
      <CardActions sx={{ justifyContent: 'center' }}>
        <UnderlinedButton
          label="Explore the Series"
          onClick={() => navigate(`/series/${seriesInfo.path}`)}
        />
      </CardActions>
    </Card>
  )
}
