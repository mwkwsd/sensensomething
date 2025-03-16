import { Box, Container, Grid2, Typography } from '@mui/material'
import { useMemo, useState } from 'react'
import { ISeriesDetail } from '../../../common/interfaces/ISeriesDetail'
import { IVideoInfo } from '../../../common/interfaces/IVideoInfo'
import { getVideoInfoForTitle } from '../../../common/utils/utils'
import { OutlinedButton } from '../../atoms/buttons/OutlinedButton'
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
        sx={{
          padding: '1.5rem 1rem 0',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <OutlinedButton
          text="Show More Episodes"
          color="#FFFFFF"
          onClick={() => setShouldSeeAllEpisodes(!shouldSeeAllEpisodes)}
        />
      </Container>
    )
  }, [shouldSeeAllEpisodes, numberOfVideos])

  return (
    <Box sx={{ paddingTop: '1rem' }}>
      <Typography variant="h1" sx={{ paddingX: '1rem' }}>
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
