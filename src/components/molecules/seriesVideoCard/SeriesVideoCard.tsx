import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import { IVideoInfo } from '../../../common/interfaces/IVideoInfo'
import { PreModalImage } from '../../atoms/preModalImage/PreModalImage'

type SeriesVideoCardProps = {
  videoInfo: IVideoInfo
}

export function SeriesVideoCard({ videoInfo }: SeriesVideoCardProps) {
  const { title, description } = videoInfo
  return (
    <Card>
      <CardContent>
        <Typography variant="h3" sx={{ paddingBottom: '0.5rem' }}>
          {title}
        </Typography>
        {description && <Typography variant="body2">{description}</Typography>}
      </CardContent>
      <CardMedia>
        <PreModalImage videoInfo={videoInfo} />
      </CardMedia>
    </Card>
  )
}
