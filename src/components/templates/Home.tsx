import { Box, Typography } from '@mui/material'
import { recentWorkPageInfo } from '../../assets/pages/recentWork'
import { IVideoInfo } from '../../common/interfaces/IVideoInfo'
import { getVideoInfoForTitle } from '../../common/utils/utils'
import { LandingPageLinks } from '../organisms/landingPageLinks/LandingPageLinks'
import { VideoList } from '../organisms/videoList/VideoList'
import { Contact } from './Contact'

export function Home() {
  const videos = recentWorkPageInfo.videoTitles
    .map(getVideoInfoForTitle)
    .filter((video): video is IVideoInfo => !!video)
  return (
    <Box>
      <LandingPageLinks pages={[...recentWorkPageInfo.orderedPages]} />
      <Box
        key={'home-recent-work'}
        sx={{ paddingTop: '3rem' }}
        id="recent-work"
      >
        <Typography
          variant="h1"
          sx={{ paddingLeft: '1rem', paddingBottom: '1rem' }}
        >
          Recent Work
        </Typography>
        <VideoList videos={videos} pageType="recent" />
      </Box>
      <Contact />
    </Box>
  )
}
