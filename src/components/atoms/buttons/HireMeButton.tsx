import { Button } from '@mui/material'
import { Link } from 'react-router-dom'

export function HireMeButton() {
  return (
    <Button
      component={Link}
      to="/#contact"
      sx={{
        color: 'white',
        margin: '16px auto',
        display: 'block',
        position: 'relative',
        textAlign: 'center',
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
        READY TO HIRE ME?
      </div>
    </Button>
  )
}
