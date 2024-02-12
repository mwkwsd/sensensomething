import { ListItemButton, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';

interface NavLinksProps {
  route: string;
  label: string;
}

export function NavLinks({ route, label }: NavLinksProps) {
  return (
    <ListItemButton
      component={Link}
      to={route}
      sx={{ textAlign: 'right' }}>
      <ListItemText primary={label} />
    </ListItemButton>
  );
}
