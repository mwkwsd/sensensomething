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
    <>
      <LandingPageLinks pages={[...recentWorkPageInfo.orderedPages]} />
      <VideoList videos={videos} pageType="recent" />
      <Contact id="contact" />
    </>
  )
}
