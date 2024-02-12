import { ListSubheader, ListItemButton, ListItemText } from '@mui/material';
import { NavStyle } from '../../../common/utils/newStyle';

interface ListButtonProps {
  label: string;
  filter: string;
}

interface SubheaderLinksProps {
  title: string;
  links: ListButtonProps[];
  navigate: (route: string) => void;
}

export function SubheaderLinks({ title, links, navigate }: SubheaderLinksProps) {
  return (
    <ListSubheader component="div" sx={{ ...NavStyle }}>
      {title}
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