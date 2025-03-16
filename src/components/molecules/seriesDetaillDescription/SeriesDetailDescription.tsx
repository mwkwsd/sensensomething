import { Box, Typography } from '@mui/material'
import { useMemo } from 'react'
import { ISeriesDetail } from '../../../common/interfaces/ISeriesDetail'
import { PageTitle } from '../../atoms/pageTitle/PageTitle'
import { VideoInfoWithLink } from '../../atoms/videoInfoWithLink/videoInfoWithLink'

type SeriesDetailDescriptionProps = {
  seriesInfo: ISeriesDetail
}

export function SeriesDetailDescription({
  seriesInfo,
}: SeriesDetailDescriptionProps) {
  const pageTitle = seriesInfo.name.toLocaleUpperCase()
  const linkableInfo = useMemo(
    () =>
      [...seriesInfo.genres, ...seriesInfo.roles].filter(
        roleGenre => roleGenre !== 'series'
      ),
    [seriesInfo.genres, seriesInfo.roles]
  )
  return (
    <Box sx={{ padding: '1.5rem 1rem 1rem' }}>
      <PageTitle title={pageTitle} />
      {seriesInfo.imageUrl && (
        <Box
          component="img"
          alt={seriesInfo.name}
          src={seriesInfo.imageUrl}
          width="100vw"
          sx={{
            marginLeft: '-1rem',
            aspectRatio: '16/9',
            marginBottom: '1rem',
          }}
        />
      )}
      <Box>
        <VideoInfoWithLink
          linkableInfo={linkableInfo}
          sx={{ paddingBottom: '1rem' }}
        />
        <Typography variant="body1">{seriesInfo.fullDescription}</Typography>
      </Box>
    </Box>
  )
}
