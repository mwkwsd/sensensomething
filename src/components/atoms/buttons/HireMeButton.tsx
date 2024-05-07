import { Button } from '@mui/material'
import { Link } from 'react-router-dom'

export function HireMeButton() {
  return (
    <Button
      component={Link}
      to="/#contact"
      size="small"
      sx={{
        color: '#79DFC1',
        margin: '16px auto',
        display: 'flex', // Use flexbox
        justifyContent: 'center', // Center horizontally
        alignItems: 'center', // Center vertically
        position: 'relative',
        textAlign: 'center',
        padding: '6px 8px 16px 8px',
        whiteSpace: 'nowrap'
      }}
    >
      <div
        style={{
          border: '1px solid #79DFC1',
          padding: '10px 40px 10px',
        }}
      >
        READY TO HIRE ME?
      </div>
    </Button>
  )
}
