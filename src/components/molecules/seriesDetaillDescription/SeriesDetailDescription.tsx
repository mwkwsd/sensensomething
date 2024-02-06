import { Box, Typography } from '@mui/material'
import { ISeriesDetail } from '../../../common/interfaces/ISeriesDetail'
import { PageTitle } from '../../atoms/pageTitle/PageTitle'
import { useMemo } from 'react'
import { VideoInfoWithLink } from '../../atoms/videoInfoWithLink/videoInfoWithLink'

type SeriesDetailDescription = {
  seriesInfo: ISeriesDetail
}
export function SeriesDetailDescription({
  seriesInfo,
}: SeriesDetailDescription) {
  const pageTitle = seriesInfo.name.toLocaleUpperCase()
  const genresRolesChips = useMemo(
    () => (
      <VideoInfoWithLink
        linkableInfo={[...seriesInfo.genres, ...seriesInfo.roles]}
        sx={{ paddingBottom: '16px' }}
      />
    ),
    [seriesInfo]
  )
  return (
    <Box sx={{ paddingTop: '24px', paddingBottom: '16px' }}>
      <PageTitle title={pageTitle} />
      {seriesInfo.imageUrl && (
        <img
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
