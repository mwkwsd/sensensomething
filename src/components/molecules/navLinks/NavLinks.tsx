import { ListItemButton, ListItemText } from '@mui/material'
import { Link } from 'react-router-dom'

type NavLinksProps = {
  navLink: { route: string; label: string }
  label: string
  onClick?: () => void
  component?: React.ElementType
  to?: string
}

export function NavLinks({ navLink, label, onClick }: NavLinksProps) {
  return (
    <ListItemButton
      component={Link}
      to={navLink.route}
      onClick={onClick}
      sx={{ textAlign: 'right' }}
    >
      <ListItemText primary={navLink.label} />
    </ListItemButton>
  )
}
