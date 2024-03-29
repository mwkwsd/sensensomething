import { Box, Typography } from '@mui/material'
import { ReactNode, useContext, useMemo } from 'react'
import { IVideoInfo } from '../../../common/interfaces/IVideoInfo'
import {
  getVideoProviderAndId,
  getVideoThumnailUrl,
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
      getVideoThumnailUrl(provider, id),
      title
    )
  }, [thumbnailPath, title, url])

  return <Box onClick={() => showModal(url)}>{imageComponent}</Box>
}
