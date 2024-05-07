import { Button } from '@mui/material'

type ShowMoreButtonProps = {
  onClick: () => void
}

export function ShowMoreButton({ onClick }: ShowMoreButtonProps) {
  return (
    <Button
      onClick={onClick}
      sx={{
        color: 'white',
        margin: '16px auto',
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        position: 'relative',
        textAlign: 'center',
        padding: '6px 8px 16px 8px',
        whiteSpace: 'nowrap'
      }}
    >
      <div
        style={{
          border: '1px solid white',
          padding: '10px 40px 10px',
        }}
      >
        LOAD MORE VIDEOS
      </div>
    </Button>
  )
}
