import ReactPlayer from 'react-player'

type VideoProps = {
  url: string
}

export function Video({ url }: VideoProps) {
  return <ReactPlayer url={url} controls width="100%" height="100%" />
}
