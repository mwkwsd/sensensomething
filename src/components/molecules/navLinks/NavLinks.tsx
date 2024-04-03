import { ListItemButton, ListItemText } from '@mui/material'
import { Link } from 'react-router-dom'

type NavLinksProps = {
  navLink: { route: string; label: string }
  isSelected: boolean
  onClose: () => void
}

export function NavLinks({ navLink, isSelected, onClose }: NavLinksProps) {
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
      onClick={onClose}
    >
      <ListItemText primary={navLink.label} />
    </ListItemButton>
  )
}
