import { Card, CardMedia, Modal, SxProps } from '@mui/material'
import { useContext, useEffect, useState } from 'react'
import { Video } from '../../atoms/video/Video'
import { ModalContext } from './ModalProvider'
import { getMoreImportantScreenValue } from '../../atoms/utilityComponents/GetMoreImportantScreenValue'

export function VideoModal() {
  const { innerHeight: height, innerWidth: width } = window
  const [, setWindowWidth] = useState(width)
  const { videoUrl, hideModal } = useContext(ModalContext)

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  if (!videoUrl) {
    return null
  }

  const importantScreenValue = getMoreImportantScreenValue(height, width)

  const sxHeightWidth: SxProps =
    importantScreenValue === 'height'
      ? {
          height: height - 20,
        }
      : {
          width: width - 10,
        }

  return (
    <Modal
      open
      onClose={hideModal}
      slotProps={{ backdrop: { sx: { backgroundColor: '#OC0D0D' } } }}
    >
      <Card
        raised={false}
        sx={{
          ...sxHeightWidth,
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          aspectRatio: '16/9 !important',
        }}
      >
        <CardMedia>
          <Video url={videoUrl} />
        </CardMedia>
      </Card>
    </Modal>
  )
}
