import { Card, CardMedia, Modal } from '@mui/material'
import { useContext } from 'react'
import { Video } from '../../atoms/video/Video'
import { ModalContext } from './ModalProvider'

export function VideoModal() {
  const { videoUrl, hideModal } = useContext(ModalContext)

  if (!videoUrl) {
    return null
  }

  return (
    <Modal
      open
      onClose={hideModal}
      slotProps={{ backdrop: { sx: { backgroundColor: '#0C0D0D' } } }}
    >
      <Card
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '80%',
          aspectRatio: '16/9',
        }}
      >
        <CardMedia>
          <Video url={videoUrl} />
        </CardMedia>
      </Card>
    </Modal>
  )
}
