import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import { IVideoInfo } from '../../../common/interfaces/IVideoInfo'
import { Video } from '../../atoms/video/Video'

type SeriesVideoCardProps = {
  videoInfo: IVideoInfo
  episodeCount: string
}

export function SeriesVideoCard({
  videoInfo: { description, title, url },
  episodeCount,
}: SeriesVideoCardProps) {
  return (
    <Card>
      <CardContent>
        <Typography variant="h4">{episodeCount.toLocaleUpperCase()}</Typography>
        <Typography variant="h3">{title}</Typography>
        {description && <Typography variant="h3">{description}</Typography>}
      </CardContent>
      <CardMedia>
        <Video url={url} />
      </CardMedia>
    </Card>
  )
}
