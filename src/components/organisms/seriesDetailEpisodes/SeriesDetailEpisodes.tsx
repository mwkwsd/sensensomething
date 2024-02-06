import { Box, Container, Typography } from '@mui/material'
import { ISeriesDetail } from '../../../common/interfaces/ISeriesDetail'
import { getVideoInfoForUrl } from '../../../common/utils/utils'
import { IVideoInfo } from '../../../common/interfaces/IVideoInfo'
import { UnderlinedButton } from '../../atoms/buttons/UnderlinedButton'

type SeriesDetailEpisodesProps = {
  seriesInfo: ISeriesDetail
}
export function SeriesDetailEpisodes({
  seriesInfo,
}: SeriesDetailEpisodesProps) {
  const videos = seriesInfo.orderedVideoUrls
    .map(url => getVideoInfoForUrl(url))
    .filter((videoInfo): videoInfo is IVideoInfo => !!videoInfo)

  function loadAllVideos() {}
  return (
    <Box sx={{ paddingTop: '16px' }}>
      <Typography variant="h1">EPISODES</Typography>
      <Container
        sx={{ padding: '0px', display: 'flex', justifyContent: 'center' }}
      >
        <UnderlinedButton label="See All Episodes" onClick={loadAllVideos} />
      </Container>
    </Box>
  )
}
