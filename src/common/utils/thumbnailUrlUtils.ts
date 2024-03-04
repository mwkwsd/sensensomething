type VideoProvider = 'youtube' | 'vimeo'

const youtubeRegex =
  /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/

const vimeoRegex =
  /(?:https?:\/\/)?(?:www\.)?(?:player\.)?vimeo\.com\/(?:video\/)?(\d+)/

/**
 * Accepts url from IVideoData as an arg and returns a tuple of the VideoProvider and the Id
 */
export function getVideoProviderAndId(
  url: string
): [VideoProvider, string] | ['unknown', null] {
  const youtubeMatch = url.match(youtubeRegex)
  const vimeoMatch = url.match(vimeoRegex)

  if (youtubeMatch && youtubeMatch[1]) {
    return ['youtube', youtubeMatch[1]]
  } else if (vimeoMatch && vimeoMatch[1]) {
    return ['vimeo', vimeoMatch[1]]
  }

  console.error('Failed to get video provider and id from url: ', url)

  return ['unknown', null]
}

export function getVideoThumnailUrl(
  provider: VideoProvider,
  id: string
): string {
  if (provider === 'vimeo') {
    return `https://vumbnail.com/${id}.jpg`
  } /*provider === 'youtube' */ else {
    return `https://img.youtube.com/vi/${id}/hqdefault.jpg`
  }
}
