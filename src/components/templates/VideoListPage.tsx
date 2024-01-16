import React from 'react'
import { IVideoCard } from '../../common/interfaces/IVideoCard'
import { VideoList } from '../organisms/videoList/VideoList'
import { PageTitle } from '../atoms/pageTitle/PageTitle'
import { useSearchParams } from 'react-router-dom'

const videos: IVideoCard[] = [
  {
    url: 'https://player.vimeo.com/video/121707380',
    title: 'From Mass to the Mountain',
    clientName: 'Self',
    genres: ['documentary'],
    roles: ['director_producer'],
  },
  {
    url: 'https://player.vimeo.com/video/222272362',
    title: 'Meet The Pill Bug',
    clientName: 'Bugs Everywhere',
    genres: ['documentary', 'animation'],
    roles: ['director_producer', 'camera_operator'],
  },
]

export function VideoListPage() {
  const [queryParams] = useSearchParams()
  console.log('query: ', queryParams)
  return (
    <>
      <PageTitle title={'documentary'} />
      <VideoList videos={videos} />
    </>
  )
}
