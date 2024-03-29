import { Box, Container, Grid, Typography } from '@mui/material'
import { useMemo, useState } from 'react'
import { ISeriesDetail } from '../../../common/interfaces/ISeriesDetail'
import { IVideoInfo } from '../../../common/interfaces/IVideoInfo'
import { getVideoInfoForTitle } from '../../../common/utils/utils'
import { UnderlinedButton } from '../../atoms/buttons/UnderlinedButton'
import { SeriesVideoCard } from '../../molecules/seriesVideoCard/SeriesVideoCard'

type SeriesDetailEpisodesProps = {
  seriesInfo: ISeriesDetail
}
export function SeriesDetailEpisodes({
  seriesInfo,
}: SeriesDetailEpisodesProps) {
  const [shouldSeeAllEpisodes, setShouldSeeAllEpisodes] = useState(false)

  const [sanitizedVideos, numberOfVideos] = useMemo(() => {
    const videos = seriesInfo.orderedVideoTitles
      .map(getVideoInfoForTitle)
      .filter((videoInfo): videoInfo is IVideoInfo => !!videoInfo)
    return [videos, videos.length]
  }, [seriesInfo.orderedVideoTitles])

  const numberOfEpisodesToShow = shouldSeeAllEpisodes
    ? numberOfVideos
    : Math.min(numberOfVideos, 3)

  const videos = sanitizedVideos
    .slice(0, numberOfEpisodesToShow)
    .map((videoInfo, index) => {
      const episodeNumber = index + 1
      const episodeLabel = 'episode ' + episodeNumber
      return (
        <Grid
          item
          sx={{ width: '100%' }}
          xs={12}
          md={6}
          key={`grid-item-${seriesInfo.name}-ep-${episodeNumber}`}
        >
          <SeriesVideoCard videoInfo={videoInfo} episodeCount={episodeLabel} />
        </Grid>
      )
    })

  const seeAllEpisodesButton = useMemo(() => {
    if (shouldSeeAllEpisodes || numberOfVideos <= 3) return null

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
  }, [shouldSeeAllEpisodes, numberOfVideos])

  return (
    <Box sx={{ paddingTop: '16px' }}>
      <Typography variant="h1" sx={{ paddingX: '16px' }}>
        EPISODES
      </Typography>
      <Grid container spacing={2}>
        {videos}
      </Grid>
      {seeAllEpisodesButton}
    </Box>
  )
}
