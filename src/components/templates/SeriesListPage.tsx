import { useTheme } from '@mui/material'
import allSeriesInfo from '../../assets/pages/series'
import { PageTitle } from '../atoms/pageTitle/PageTitle'
import { SeriesList } from '../organisms/seriesList/SeriesList'

export function SeriesListPage() {
  const theme = useTheme()
  const seriesListSubheaderText =
    'Series List - Risus velit lectus ut vitae sit nunc mauris mattis erat. Posuere adipiscing nisi lacinia lacinia facilisi venenatis aliquam.'

  return (
    <>
      <PageTitle
        title="Series"
        titleUnderlineColor={theme.palette.series.main}
        subheaderText={seriesListSubheaderText}
        sx={{ padding: '1rem 1rem 1.5rem' }}
      />
      <SeriesList series={allSeriesInfo} />
    </>
  )
}
