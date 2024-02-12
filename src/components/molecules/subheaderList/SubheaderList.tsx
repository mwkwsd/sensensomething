import { ListSubheader, ListItemButton, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';
import { NavStyle } from '../../../common/utils/newStyle';
interface ListButtonProps {
  label: string;
  filter: string;
}

interface SubheaderListProps {
  title: string;
  links: ListButtonProps[];
}

export function SubheaderList({ title, links }: SubheaderListProps) {
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