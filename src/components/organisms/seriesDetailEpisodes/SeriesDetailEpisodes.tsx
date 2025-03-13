import { Box, Container, Grid2, Typography } from '@mui/material'
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

  const sanitizedVideos = useMemo(() => {
    const videos = seriesInfo.orderedVideoTitles
      .map(getVideoInfoForTitle)
      .filter((videoInfo): videoInfo is IVideoInfo => !!videoInfo)
    return videos
  }, [seriesInfo.orderedVideoTitles])
  const numberOfVideos = sanitizedVideos.length

  const numberOfEpisodesToShow = shouldSeeAllEpisodes
    ? numberOfVideos
    : Math.min(numberOfVideos, 3)

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
        Episodes
      </Typography>
      <Grid2 container spacing={2}>
        {sanitizedVideos
          .slice(0, numberOfEpisodesToShow)
          .map((videoInfo, index) => {
            return (
              <Grid2
                size={{ xs: 12, md: 6 }}
                sx={{ width: '100%' }}
                key={`grid-item-${seriesInfo.name}-ep-${index}`}
              >
                <SeriesVideoCard videoInfo={videoInfo} />
              </Grid2>
            )
          })}
      </Grid2>
      {seeAllEpisodesButton}
    </Box>
  )
}
