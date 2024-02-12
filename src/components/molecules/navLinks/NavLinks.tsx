import { ListItemButton, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';

interface NavLinksProps {
  route: string;
  label: string;
  isLinkSelected: boolean;
  onClick: () => void;
}

export function NavLinks({ route, label, isLinkSelected, onClick }: NavLinksProps) {
  return (
    <ListItemButton
      component={Link}
      to={route}
      onClick={onClick}
      sx={{ textAlign: 'right' }}>
      <ListItemText primary={label} />
    </ListItemButton>
  );
}
