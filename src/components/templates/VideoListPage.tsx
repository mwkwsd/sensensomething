import { useMemo } from 'react'
import { IVideoInfo } from '../../common/interfaces/IVideoInfo'
import { VideoList } from '../organisms/videoList/VideoList'
import { PageTitle } from '../atoms/pageTitle/PageTitle'
import { useLoaderData } from 'react-router-dom'
import { VideoPageArgs, getVideoInfoForTitle } from '../../common/utils/utils'
import { useTheme } from '@mui/system'

/**
 * @returns Page for showing video lists for Roles (Director & Producer, Director of Photography) and Documentary
 */
export function VideoListPage() {
  const [videoPageInfo, pageEnum, pageType] = useLoaderData() as VideoPageArgs
  const theme = useTheme()

  const videosForPage = useMemo(
    () =>
      videoPageInfo.videoTitles
        .map(videoTitle => getVideoInfoForTitle(videoTitle))
        .filter((video): video is NonNullable<IVideoInfo> => !!video),
    [videoPageInfo.videoTitles]
  )

  const titleUnderlineColor = theme.palette[pageEnum].main

  return (
    <>
      <PageTitle
        title={videoPageInfo.pageTitle}
        titleUnderlineColor={titleUnderlineColor}
        subheaderText={videoPageInfo.subheaderText}
        sx={{ padding: '16px 16px 24px' }}
      />
      <VideoList videos={videosForPage} pageType={pageType} />
    </>
  )
}
