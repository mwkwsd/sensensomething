import { ListItemButton, ListItemText } from '@mui/material'
import { Link } from 'react-router-dom'
import { LinksStyle } from '../../../common/utils/linkStyles'

interface NavLinksProps {
  route: string
  label: string
  isSelected: boolean
}

export function NavLinks({ route, label, isSelected }: NavLinksProps) {
  return (
    <div style={LinksStyle(isSelected)}>
      <ListItemButton component={Link} to={route} sx={{ textAlign: 'right' }}>
        <ListItemText primary={label} />
      </ListItemButton>
    </div>
  )
}
