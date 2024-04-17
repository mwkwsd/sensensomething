import { Card, CardContent, CardMedia } from '@mui/material'
import { useMemo } from 'react'
import { Genre, Role } from '../../../common/constants/enums'
import { IVideoInfo } from '../../../common/interfaces/IVideoInfo'
import { PreModalImage } from '../../atoms/preModalImage/PreModalImage'
import { VideoInfo } from '../../atoms/videoInfo/VideoInfo'
import { VideoInfoWithLink } from '../../atoms/videoInfoWithLink/videoInfoWithLink'
import { VideoTitle } from '../../atoms/videoTitle/VideoTitle'
import { FaCircle } from 'react-icons/fa'
import { GrPlayFill } from 'react-icons/gr'

type VideoCardProps = {
  video: IVideoInfo
  pageType: 'genre' | 'role' | 'recent'
}

// TODO: Video needs to take full width of Card
export function VideoCard({ video, pageType }: VideoCardProps) {
  const { title, clientName, roles, genres } = video

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
      <CardMedia>
        <div style={{ position: 'relative' }}>
          <PreModalImage videoInfo={video} />
          <FaCircle
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              fontSize: '48px',
              color: 'rgba(105, 105, 105, 0.75)',
            }}
          />
          <GrPlayFill
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              fontSize: '30px',
              color: '#303030',
              paddingLeft: '5px'
            }}
          />
        </div>
      </CardMedia>
      <CardContent>
        {videoTitle}
        {clientComponent}
        {rolesGenres}
      </CardContent>
    </Card>
  )
}
