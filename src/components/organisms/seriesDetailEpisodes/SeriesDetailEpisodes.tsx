import { Box, Container, Grid, Typography } from '@mui/material'
import { ISeriesDetail } from '../../../common/interfaces/ISeriesDetail'
import { getVideoInfoForTitle } from '../../../common/utils/utils'
import { IVideoInfo } from '../../../common/interfaces/IVideoInfo'
import { UnderlinedButton } from '../../atoms/buttons/UnderlinedButton'
import { SeriesVideoCard } from '../../molecules/seriesVideoCard/SeriesVideoCard'
import { useMemo, useState } from 'react'

type SeriesDetailEpisodesProps = {
  seriesInfo: ISeriesDetail
}
export function SeriesDetailEpisodes({
  seriesInfo,
}: SeriesDetailEpisodesProps) {
  const [shouldSeeAllEpisodes, setShouldSeeAllEpisodes] = useState(false)

  const videos = seriesInfo.orderedVideoTitles
    .map(getVideoInfoForTitle)
    .filter((videoInfo): videoInfo is IVideoInfo => !!videoInfo)
    .slice(0, shouldSeeAllEpisodes ? seriesInfo.orderedVideoTitles.length : 3)
    .map((videoInfo, index) => {
      const episodeNumber = index + 1
      const episodeLabel = 'episode ' + episodeNumber
      return (
        <Grid
          item
          sx={{ width: '100%' }}
          key={`grid-item-${seriesInfo.name}-ep-${episodeNumber}`}
        >
          <SeriesVideoCard videoInfo={videoInfo} episodeCount={episodeLabel} />
        </Grid>
      )
    })

  const seeAllEpisodesButton = useMemo(() => {
    if (shouldSeeAllEpisodes) return null

    return (
      <Container
        sx={{ padding: '0px', display: 'flex', justifyContent: 'center' }}
      >
        <UnderlinedButton
          label="See All Episodes"
          onClick={() => setShouldSeeAllEpisodes(!shouldSeeAllEpisodes)}
        />
      </Container>
    )
  }, [shouldSeeAllEpisodes])

  return (
    <Box sx={{ paddingTop: '16px' }}>
      <Typography variant="h1" sx={{ paddingX: '16px' }}>
        EPISODES
      </Typography>
      <Grid container children={videos} />
      {seeAllEpisodesButton}
    </Box>
  )
}
