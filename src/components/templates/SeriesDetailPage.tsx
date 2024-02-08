import { Box } from '@mui/material'
import { ISeriesDetail } from '../../common/interfaces/ISeriesDetail'
import { useLoaderData } from 'react-router-dom'
import { SeriesDetailDescription } from '../molecules/seriesDetaillDescription/SeriesDetailDescription'
import { SeriesDetailEpisodes } from '../organisms/seriesDetailEpisodes/SeriesDetailEpisodes'

export function SeriesDetailPage() {
  const seriesInfo = useLoaderData() as ISeriesDetail

  return (
    <Box sx={{ padding: '0px ' }}>
      <SeriesDetailDescription seriesInfo={seriesInfo} />
      <SeriesDetailEpisodes seriesInfo={seriesInfo} />
    </Box>
  )
}
