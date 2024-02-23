import { Button, Card, CardContent } from '@mui/material'
import { useContext, useMemo } from 'react'
import { Genre, Role } from '../../../common/constants/enums'
import { IVideoInfo } from '../../../common/interfaces/IVideoInfo'
import { Video } from '../../atoms/video/Video'
import { VideoInfo } from '../../atoms/videoInfo/VideoInfo'
import { VideoInfoWithLink } from '../../atoms/videoInfoWithLink/videoInfoWithLink'
import { VideoTitle } from '../../atoms/videoTitle/VideoTitle'
import { ModalContext } from '../../organisms/modal/ModalProvider'

type VideoCardProps = {
  video: IVideoInfo
  pageType: 'genre' | 'role' | 'recent'
}

// TODO: Video needs to take full width of Card
export function VideoCard({
  video: { url, title, clientName, roles, genres },
  pageType,
}: VideoCardProps) {
  const { showModal } = useContext(ModalContext)
  const videoComponent = useMemo(() => <Video url={url} />, [url])
  const videoTitle = useMemo(
    () => <VideoTitle title={title} sx={{ marginBottom: '8px' }} />,
    [title]
  )

  const clientComponent = useMemo(() => {
    if (!clientName) return null
    return (
      <VideoInfo
        label="Client"
        info={clientName}
        sx={{ marginBottom: '8px' }}
      />
    )
  }, [clientName])

  const rolesGenres = useMemo(() => {
    let rolesGenres: (Role | Genre)[]
    if (pageType === 'genre') {
      rolesGenres = [...roles]
    } else if (pageType === 'role') {
      rolesGenres = [...genres]
    } else {
      rolesGenres = [...roles, ...genres]
    }

    return <VideoInfoWithLink linkableInfo={rolesGenres} />
  }, [roles, genres, pageType])

  return (
    <Card>
      {/* <CardMedia>{videoComponent}</CardMedia> */}
      <CardContent>
        <Button
          onClick={() => showModal(url)}
        >{`Click me for ${title} video!`}</Button>
        {videoTitle}
        {clientComponent}
        {rolesGenres}
      </CardContent>
    </Card>
  )
}
