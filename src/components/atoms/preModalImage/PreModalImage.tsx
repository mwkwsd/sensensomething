import { Box, Typography } from '@mui/material'
import { ReactNode, useContext, useMemo } from 'react'
import { FaCircle } from 'react-icons/fa'
import { IVideoInfo } from '../../../common/interfaces/IVideoInfo'
import {
  getVideoProviderAndId,
  getVideoThumbnailUrl,
} from '../../../common/utils/thumbnailUrlUtils'
import { ModalContext } from '../../organisms/modal/ModalProvider'
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded'

type PreModalImageProps = {
  videoInfo: IVideoInfo
}

function buildImageComponentWithSource(
  source: string,
  title: string
): ReactNode {
  return <img src={source} alt={title} width={'100%'} />
}

export function PreModalImage({
  videoInfo: { thumbnailPath, title, url },
}: PreModalImageProps) {
  const { showModal } = useContext(ModalContext)

  // TODO Fix the below in #93

  const imageComponent = useMemo(() => {
    if (thumbnailPath) {
      return buildImageComponentWithSource(thumbnailPath, title)
    }
    const [provider, id] = getVideoProviderAndId(url)
    if (provider === 'unknown') {
      return <Typography>{title}</Typography>
    }

    return buildImageComponentWithSource(
      getVideoThumbnailUrl(provider, id),
      title
    )
  }, [thumbnailPath, title, url])

  return (
    <div style={{ position: 'relative' }} onClick={() => showModal(url)}>
      <Box children={imageComponent} />
      <FaCircle
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          fontSize: '64px',
          color: '#FFB74D',
          opacity: '0.8',
          zIndex: 1,
        }}
      />
      <PlayArrowRoundedIcon
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          fontSize: '50px',
          color: '#303030',
          zIndex: 2,
        }}
      />
    </div>
  )
}
