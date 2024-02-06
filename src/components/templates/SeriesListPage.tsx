import { PageTitle } from '../atoms/pageTitle/PageTitle'

export function SeriesListPage() {
  const seriesListSubheaderText =
    'Series List - Risus velit lectus ut vitae sit nunc mauris mattis erat. Posuere adipiscing nisi lacinia lacinia facilisi venenatis aliquam.'
  return (
    <>
      <PageTitle
        title="series"
        subheaderText={seriesListSubheaderText}
        sx={{ padding: '16px 16px 24px' }}
      ></PageTitle>
    </>
  )
}
