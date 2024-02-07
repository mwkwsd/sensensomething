import { ListSubheader, ListItemButton, ListItemText } from '@mui/material'
import { Link } from 'react-router-dom'
import { LinksStyle } from '../../../common/utils/linkStyles'
import { NavStyle } from '../../../common/utils/navStyle'

interface LinkProps {
  label: string
  filter: string
  isSelected: boolean
}

interface SubheaderLinksProps {
  title: string
  links: LinkProps[]
  isSelected: boolean
}

export function SubheaderLinks({ title, links }: SubheaderLinksProps) {
  return (
    <ListSubheader component="div" sx={{ ...NavStyle }}>
      {title}
      {links.map(({ label, filter, isSelected }) => (
        <div key={filter} style={LinksStyle(isSelected)}>
          <ListItemButton
            component={Link}
            to={`/videos?filter=${filter}`}
            sx={{ textAlign: 'right' }}
          >
            <ListItemText primary={label} />
          </ListItemButton>
        </div>
      ))}
    </ListSubheader>
  )
}
