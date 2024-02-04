import React, { useMemo } from 'react'
import { IVideoInfo } from '../../common/interfaces/IVideoInfo'
import { VideoList } from '../organisms/videoList/VideoList'
import { PageTitle } from '../atoms/pageTitle/PageTitle'
import { useSearchParams } from 'react-router-dom'
import { Role, roleTypeChecker } from '../../common/constants/enums'
// Directly import the videos?
import videos from '../../assets/videos/videos'
import { videoListPagesInfo } from '../../assets/pages/pagesInfo'

type VideoListPageEnum = Role | 'documentary'
/**
 * @returns Page for showing video lists for Roles (Director & Producer, Director of Photography) and Documentary
 */
export function VideoListPage() {
  const [queryParams] = useSearchParams()
  const pageEnum = getPageEnumFromQuery(queryParams)

  const videosForPage = useMemo(
    () =>
      videos.filter(getFilterForVideos(pageEnum)).filter(video => !!video.url),
    [pageEnum]
  )

  if (!pageEnum) {
    return null
  }

  return (
    <>
      <PageTitle
        title={pageEnum}
        subheaderText={videoListPagesInfo[pageEnum].subheaderText}
        sx={{ padding: '16px 16px 24px' }}
      />
      <VideoList videos={videosForPage} pageEnum={pageEnum} />
    </>
  )
}

function getPageEnumFromQuery(
  query: URLSearchParams
): VideoListPageEnum | null {
  const queryValue = query.get('role') || query.get('genre')

  if (!queryValue) {
    // No query found
    return null
  }

  const sanitzedValue = queryValue.replaceAll('-', '_')

  if (!roleTypeChecker(sanitzedValue) && sanitzedValue !== 'documentary') {
    return null
  }

  return sanitzedValue
}

function getFilterForVideos(
  pageEnum: VideoListPageEnum | null
): (arg: IVideoInfo) => boolean {
  if (!pageEnum) return _ => false
  if (roleTypeChecker(pageEnum)) {
    return video => video.roles.includes(pageEnum)
  } else {
    return video => video.genres.includes(pageEnum)
  }
}
