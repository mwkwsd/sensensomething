import { Box, Typography } from '@mui/material'
import { ISeriesDetail } from '../../../common/interfaces/ISeriesDetail'
import { PageTitle } from '../../atoms/pageTitle/PageTitle'
import { useMemo } from 'react'
import { VideoInfoWithLink } from '../../atoms/videoInfoWithLink/videoInfoWithLink'

type SeriesDetailDescriptionProps = {
  seriesInfo: ISeriesDetail
}
export function SeriesDetailDescription({
  seriesInfo,
}: SeriesDetailDescriptionProps) {
  const pageTitle = seriesInfo.name.toLocaleUpperCase()
  const genresRolesChips = useMemo(
    () => (
      <VideoInfoWithLink
        linkableInfo={[...seriesInfo.genres, ...seriesInfo.roles].filter(
          roleGenre => roleGenre !== 'series'
        )}
        sx={{ paddingBottom: '16px' }}
      />
    ),
    [seriesInfo]
  )
  return (
    <Box sx={{ padding: '24px 16px 16px' }}>
      <PageTitle title={pageTitle} />
      {seriesInfo.imageUrl && (
        <img
          alt={`${seriesInfo.name}`}
          src={seriesInfo.imageUrl}
          width="100vw"
          style={{ marginLeft: '-16px' }}
        />
      )}
      <Box>
        {genresRolesChips}
        <Typography variant="body1">{seriesInfo.fullDescription}</Typography>
      </Box>
    </Box>
  )
}
