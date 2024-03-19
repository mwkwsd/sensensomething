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
        display: 'block',
        position: 'relative',
        paddingBottom: '1rem',
      }}
    >
      <div
        style={{
          borderBottom: '1px solid white',
          display: 'inline',
          padding: '0 10px 10px',
        }}
      >
        KEEP SHOWING MORE
      </div>
    </Button>
  )
}
