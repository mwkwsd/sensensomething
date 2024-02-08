import ReactPlayer from 'react-player'

type VideoProps = {
  url: string
}

export function Video({ url }: VideoProps) {
  return (
    <ReactPlayer
      url={addQueryParamsToVideoUrl(url)}
      controls
      width="100%"
      height="100%"
    />
  )
}

function addQueryParamsToVideoUrl(url: string): string {
  // Add any query parameters if needed
  // color only seems to change the color of the played % on the video controls
  // Not any of the buttons. Might need to look at Kurt's setting for that.
  return url + '?color=0000ff'
}
