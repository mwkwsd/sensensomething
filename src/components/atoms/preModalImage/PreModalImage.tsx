import { Box, Typography } from '@mui/material'
import { ReactNode, useContext, useMemo } from 'react'
import { FaCircle } from 'react-icons/fa'
import { GrPlayFill } from 'react-icons/gr'
import { IVideoInfo } from '../../../common/interfaces/IVideoInfo'
import {
  getVideoProviderAndId,
  getVideoThumbnailUrl,
} from '../../../common/utils/thumbnailUrlUtils'
import { ModalContext } from '../../organisms/modal/ModalProvider'

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
        }}
      />
    </div>
  )
}
