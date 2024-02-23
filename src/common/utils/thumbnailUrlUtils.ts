import { IVideoInfo } from "../interfaces/IVideoInfo"

type VideoProvider = 'youtube' | 'vimeo';

/**
* Accepts url from IVideoData as an arg and returns a tuple of the VideoProvider and the Id
*/

export function getVideoProviderAndId(videoInfo: IVideoInfo): [VideoProvider, string] {
  const youtubeRegex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
  const vimeoRegex = /(?:https?:\/\/)?(?:www\.)?(?:player\.)?vimeo\.com\/(?:video\/)?(\d+)/;

  const youtubeMatch = videoInfo.url.match(youtubeRegex);
  const vimeoMatch = videoInfo.url.match(vimeoRegex);

  if (youtubeMatch && youtubeMatch[1]) {
    return ['youtube', youtubeMatch[1]];
  } else if (vimeoMatch && vimeoMatch[1]) {
    return ['vimeo', vimeoMatch[1]];
  }

  throw new Error('Invalid video URL');
}
