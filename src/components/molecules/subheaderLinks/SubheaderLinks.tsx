import { ListSubheader, ListItemButton, ListItemText } from '@mui/material'
import { NavStyle } from '../../../common/utils/newStyle'

type ListButtonProps = {
  label: string
  filter: string
}

type SubheaderLinksProps = {
  links: ListButtonProps[]
  navigate: (route: string) => void
}

export function SubheaderLinks({ links, navigate }: SubheaderLinksProps) {
  return (
    <ListSubheader component="div" sx={{ ...NavStyle }}>
      {links.map(({ label, filter }) => (
        <ListItemButton
          key={filter}
          onClick={() => navigate(`/videos?filter=${filter}`)}
          sx={{ textAlign: 'right', paddingRight: '0' }}
        >
          <ListItemText primary={label} />
        </ListItemButton>
      ))}
    </ListSubheader>
  )
}
