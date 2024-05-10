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
        marginRight: '8px',
        fontSize: '0.8rem',
        whiteSpace: 'nowrap',
        border: '1px solid #79DFC1',
        borderRadius: '0',
        padding: '10px 20px',
      }}
    >
      READY TO HIRE ME?
    </Button>
  )
}
