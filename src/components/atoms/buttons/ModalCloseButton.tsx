import { IconButton } from '@mui/material'
import { IoCloseSharp } from 'react-icons/io5'

interface CloseButtonProps {
  onClick: () => void
}

export function ModalCloseButton({ onClick }: CloseButtonProps) {
  return (
    <IconButton
      onClick={onClick}
      sx={{
        position: 'absolute',
        top: 0,
        right: 0,
        margin: 1,
        color: 'white',
        backgroundColor: 'transparent',
        borderRadius: '0',
        width: '44px',
        height: '44px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <IoCloseSharp style={{ fontSize: '2rem' }} />
    </IconButton>
  )
}
