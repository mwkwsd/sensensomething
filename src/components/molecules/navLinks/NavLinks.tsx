import { ListItemButton, ListItemText } from '@mui/material'
import { Link } from 'react-router-dom'

type NavLinksProps = {
  navLink: { route: string; label: string }
}

export function NavLinks({ navLink }: NavLinksProps) {
  return (
    <ListItemButton
      component={Link}
      to={navLink.route}
      sx={{ textAlign: 'right' }}
    >
      <ListItemText primary={navLink.label} />
    </ListItemButton>
  )
}
