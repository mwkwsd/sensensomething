import { ListItemButton, ListItemText } from '@mui/material'
import { Link } from 'react-router-dom'

type NavLinksProps = {
  navLink: { route: string; label: string }
  isSelected: boolean
}

export function NavLinks({ navLink, isSelected }: NavLinksProps) {
  return (
    <ListItemButton
      component={Link}
      to={navLink.route}
      sx={{
        textAlign: 'right',
        borderBottom: isSelected
          ? '2px solid #FFB74D'
          : '2px solid transparent',
      }}
    >
      <ListItemText primary={navLink.label} />
    </ListItemButton>
  )
}
