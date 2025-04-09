import { useTheme } from '@mui/system'
import { useMemo } from 'react'
import { useLoaderData } from 'react-router-dom'
import { IVideoInfo } from '../../common/interfaces/IVideoInfo'
import { VideoPageArgs, getVideoInfoForTitle } from '../../common/utils/utils'
import { PageTitle } from '../atoms/pageTitle/PageTitle'
import { VideoList } from '../organisms/videoList/VideoList'

/**
 * @returns Page for showing video lists for Roles (Director & Producer, Director of Photography) and Documentary
 */
export function VideoListPage() {
  const [videoPageInfo, pageEnum, pageCategory] = useLoaderData<VideoPageArgs>()
  const theme = useTheme()

  const videosForPage = useMemo(
    () =>
      videoPageInfo.videoTitles
        .map(getVideoInfoForTitle)
        .filter((video): video is IVideoInfo => !!video),
    [videoPageInfo.videoTitles]
  )

  const titleUnderlineColor = theme.palette[pageEnum].main

  return (
    <>
      <PageTitle
        title={videoPageInfo.pageTitle}
        titleUnderlineColor={titleUnderlineColor}
        subheaderText={videoPageInfo.subheaderText}
        sx={{ padding: '1rem 1rem 1.5rem' }}
      />
      <VideoList
        key={`video-list-${pageEnum}`}
        videos={videosForPage}
        pageType={pageEnum}
        pageCategory={pageCategory}
      />
    </>
  )
}
