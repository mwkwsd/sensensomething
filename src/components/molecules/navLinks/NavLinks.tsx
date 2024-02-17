import { ListItemButton, ListItemText } from '@mui/material'
import { Link } from 'react-router-dom'

type NavLinksProps = {
  route: string
  label: string
  onClick: () => void
}

export function NavLinks({ route, label, onClick }: NavLinksProps) {
  return (
    <ListItemButton
      component={Link}
      to={route}
      onClick={onClick}
      sx={{ textAlign: 'right' }}
    >
      <ListItemText primary={label} />
    </ListItemButton>
  )
}
