import { Grid } from '@mui/material'
import { ISeriesDetail } from '../../../common/interfaces/ISeriesDetail'
import { SeriesListCard } from '../../molecules/seriesListCard/SeriesListCard'

type SeriesListProps = {
  series: ISeriesDetail[]
}
export function SeriesList({ series }: SeriesListProps) {
  const seriesItemComponents = series.map(seriesDetail => (
    <Grid
      item
      xs={12}
      md={6}
      key={`grid-item-series-list-${seriesDetail.name}`}
    >
      <SeriesListCard seriesInfo={seriesDetail} />
    </Grid>
  ))

  return (
    <Grid container spacing={2}>
      {seriesItemComponents}
    </Grid>
  )
}
