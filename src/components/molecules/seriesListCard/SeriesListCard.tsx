import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material'
import { useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { ISeriesDetail } from '../../../common/interfaces/ISeriesDetail'
import { VideoInfoWithLink } from '../../atoms/videoInfoWithLink/videoInfoWithLink'
import { VideoTitle } from '../../atoms/videoTitle/VideoTitle'

type SeriesListCardProps = {
  seriesInfo: ISeriesDetail
}

const PLACEHOLDER_IMAGE_URL = '/images/placeholder.png'

export function SeriesListCard({ seriesInfo }: SeriesListCardProps) {
  const { name, genres, roles, shortDescription, imageUrl } = seriesInfo
  const navigate = useNavigate()

  const linkableInfo = useMemo(
    () => [...roles, ...genres].filter(tag => tag !== 'series'),
    [roles, genres]
  )

  // const videoInfo = getVideoInfoForSeriesDetail(seriesInfo)

  return (
    <Card sx={{ borderRadius: 0 }} >
      <CardContent>
        <VideoTitle title={name} sx={{ paddingBottom: '0.75rem' }} />
        {shortDescription && (
          <Typography variant="body1" sx={{ paddingBottom: '0.5rem' }}>
            {shortDescription}
          </Typography>
        )}
        <VideoInfoWithLink linkableInfo={linkableInfo} />
      </CardContent>
      <CardMedia
        image={imageUrl || PLACEHOLDER_IMAGE_URL}
        sx={{
          aspectRatio: '16/9',
          border: '0px',
          transition: "transform 0.15s ease-in-out",
          ':hover': { transform: 'scale3d(1.05, 1.05, 1.05)' },
        }}
      >
        <Box
          onClick={() => navigate(`/series/${seriesInfo.path}`)}
          sx={{
            width: '100%',
            height: '100%',
            opacity: '60%',
            backgroundColor: '#000000',
            alignContent: 'center',
            textAlign: 'center',
          }}
        >
          <Typography variant="caption">Explore the Series</Typography>
        </Box>
      </CardMedia>
    </Card>
  )
}
