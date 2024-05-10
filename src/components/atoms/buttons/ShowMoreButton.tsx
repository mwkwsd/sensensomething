import { Button } from '@mui/material'

type ShowMoreButtonProps = {
  onClick: () => void
}

export function ShowMoreButton({ onClick }: ShowMoreButtonProps) {
  return (
    <Button
      onClick={onClick}
      size="small"
      sx={{
        color: 'white',
        fontSize: '0.8rem',
        whiteSpace: 'nowrap',
        border: '1px solid white',
        borderRadius: '0',
        padding: '10px 20px',
      }}
    >
      LOAD MORE VIDEOS
    </Button>
  )
}
