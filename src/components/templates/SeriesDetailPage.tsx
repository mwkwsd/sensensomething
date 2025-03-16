import { Box } from '@mui/material'
import { useLoaderData } from 'react-router-dom'
import { ISeriesDetail } from '../../common/interfaces/ISeriesDetail'
import { SeriesDetailDescription } from '../molecules/seriesDetaillDescription/SeriesDetailDescription'
import { SeriesDetailEpisodes } from '../organisms/seriesDetailEpisodes/SeriesDetailEpisodes'

export function SeriesDetailPage() {
  const seriesInfo = useLoaderData() as ISeriesDetail

  return (
    <Box>
      <SeriesDetailDescription seriesInfo={seriesInfo} />
      <SeriesDetailEpisodes seriesInfo={seriesInfo} />
    </Box>
  )
}
