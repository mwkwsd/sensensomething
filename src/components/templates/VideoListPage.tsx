import React, { useMemo } from 'react'
import { IVideoCard } from '../../common/interfaces/IVideoCard'
import { VideoList } from '../organisms/videoList/VideoList'
import { PageTitle } from '../atoms/pageTitle/PageTitle'
import { useSearchParams } from 'react-router-dom'
import { roleToUrl, genreToUrl } from '../../common/constants/constants'
import { Genre, Role, roleTypeChecker } from '../../common/constants/enums'
// Directly import the videos?
import videos from '../../assets/videos/videos'

export function VideoListPage() {
  const [queryParams] = useSearchParams()
  const pageEnum = getPageEnumFromQuery(queryParams)

  const videosForPage = useMemo(
    () => videos.filter(getFilterForVideos(pageEnum)),
    [pageEnum]
  )

  if (!pageEnum) {
    return null
  }

  return (
    <>
      <PageTitle title={pageEnum} />
      <VideoList videos={videosForPage} />
    </>
  )
}

function getPageEnumFromQuery(query: URLSearchParams): Genre | Role | null {
  const maybeRoleQuery = query.get('role')
  const maybeGenreQuery = query.get('genre')
  if (!maybeGenreQuery && !maybeRoleQuery) {
    // No query found
    return null
  }
  if (!!maybeRoleQuery) {
    const [roleEnum] =
      Object.entries(roleToUrl).find(([_key, url]) => url === maybeRoleQuery) ||
      []

    // Not a huge fan of this coersion, but it makes sense?  Other ideas?
    return !!roleEnum ? (roleEnum as Role) : null
  } /* assume maybeGenreQuery */ else {
    const [genreEnum] =
      Object.entries(genreToUrl).find(
        ([_key, url]) => url === maybeGenreQuery
      ) || []

    // Not a huge fan of this coersion, but it makes sense?  Other ideas?
    return !!genreEnum ? (genreEnum as Genre) : null
  }
}

function getFilterForVideos(
  pageEnum: Role | Genre | null
): (arg: IVideoCard) => boolean {
  if (!pageEnum) return _ => false
  if (roleTypeChecker(pageEnum)) {
    return video => video.roles.includes(pageEnum)
  } else {
    return video => video.genres.includes(pageEnum)
  }
}
