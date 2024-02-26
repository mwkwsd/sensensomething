import { Card, CardMedia, Modal } from '@mui/material'
import { useContext } from 'react'
import { Video } from '../../atoms/video/Video'
import { ModalContext } from './ModalProvider'
import { ModalCloseButton } from '../../atoms/buttons/ModalCloseButton'

export function VideoModal() {
  const { videoUrl, hideModal } = useContext(ModalContext)

  if (!videoUrl) {
    return null
  }

  return (
    <Modal
      open
      onClose={hideModal}
      slotProps={{ backdrop: { sx: { backgroundColor: 'rgba(0,0,0,0.9)' } } }}
    >
      <Card
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '100%',
          aspectRatio: '16/9',
          border: '48px solid',
        }}
      >
        <ModalCloseButton onClick={hideModal} />
        <CardMedia>
          <Video url={videoUrl} />
        </CardMedia>
      </Card>
    </Modal>
  )
}
