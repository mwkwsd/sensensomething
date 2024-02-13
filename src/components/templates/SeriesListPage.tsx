import { allSeriesInfo } from '../../assets/pages/series/lowPheLife'
import { PageTitle } from '../atoms/pageTitle/PageTitle'
import { SeriesList } from '../organisms/seriesList/SeriesList'

export function SeriesListPage() {
  const seriesListSubheaderText =
    'Series List - Risus velit lectus ut vitae sit nunc mauris mattis erat. Posuere adipiscing nisi lacinia lacinia facilisi venenatis aliquam.'

  return (
    <>
      <PageTitle
        title="Series"
        subheaderText={seriesListSubheaderText}
        sx={{ padding: '16px 16px 24px' }}
      ></PageTitle>
      <SeriesList series={allSeriesInfo} />
    </>
  )
}
