import { IVideoCard } from '../../../common/interfaces/IVideoCard'
import { VideoCard } from '../../molecules/videoCard/VideoCard'

type VideoListProps = {
  videos: IVideoCard[]
}

export function VideoList({ videos }: VideoListProps) {
  const videoComponents = videos.map((iVideo, index) => (
    <VideoCard {...iVideo} key={`video-list-index-${index}`} />
  ))
  return <>{videoComponents}</>
}
