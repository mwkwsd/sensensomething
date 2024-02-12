import { ListSubheader, ListItemButton, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';
import { NavStyle } from '../../../common/utils/newStyle';
interface ListButtonProps {
  label: string;
  filter: string;
}

interface SubheaderLinksProps {
  title: string;
  links: ListButtonProps[];
}

export function SubheaderLinks({ title, links }: SubheaderLinksProps) {
  return (
    <ListSubheader component="div" sx={{ ...NavStyle }}>
      {title}
      {links.map(({ label, filter }) => (
        <ListItemButton
          component={Link}
          to={`/videos?filter=${filter}`}
          sx={{ textAlign: 'right', paddingRight: '0' }}
        >
          <ListItemText primary={label} />
        </ListItemButton>
      ))}
    </ListSubheader>
  )
}