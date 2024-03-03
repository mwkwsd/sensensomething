import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import { IVideoInfo } from '../../../common/interfaces/IVideoInfo'
import { PreModalImage } from '../../atoms/preModalImage/PreModalImage'

type SeriesVideoCardProps = {
  videoInfo: IVideoInfo
  episodeCount: string
}

export function SeriesVideoCard({
  videoInfo,
  episodeCount,
}: SeriesVideoCardProps) {
  const { title, description } = videoInfo
  return (
    <Card>
      <CardContent>
        <Typography variant="h4">{episodeCount.toLocaleUpperCase()}</Typography>
        <Typography variant="h3">{title}</Typography>
        {description && <Typography variant="h3">{description}</Typography>}
      </CardContent>
      <CardMedia>
        <PreModalImage videoInfo={videoInfo} />
      </CardMedia>
    </Card>
  )
}
