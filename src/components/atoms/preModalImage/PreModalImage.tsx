import { Button } from '@mui/material'
import { useContext } from 'react'
import { IVideoInfo } from '../../../common/interfaces/IVideoInfo'
import { ModalContext } from '../../organisms/modal/ModalProvider'

type PreModalImageProps = {
  videoInfo: IVideoInfo
}

export function PreModalImage({
  videoInfo: { url, title },
}: PreModalImageProps) {
  const { showModal } = useContext(ModalContext)

  // TODO Fix the below in #93
  return (
    <Button
      onClick={() => showModal(url)}
    >{`Click me for ${title} video!`}</Button>
  )
}
