import { Grid2 } from '@mui/material'
import { ISeriesDetail } from '../../../common/interfaces/ISeriesDetail'
import { SeriesListCard } from '../../molecules/seriesListCard/SeriesListCard'

type SeriesListProps = {
  series: readonly ISeriesDetail[]
}
export function SeriesList({ series }: SeriesListProps) {
  return (
    <Grid2 container spacing={2}>
      {series.map(seriesDetail => (
        <Grid2
          size={{ xs: 12, md: 6 }}
          key={`grid-item-series-list-${seriesDetail.name}`}
        >
          <SeriesListCard seriesInfo={seriesDetail} />
        </Grid2>
      ))}
    </Grid2>
  )
}
