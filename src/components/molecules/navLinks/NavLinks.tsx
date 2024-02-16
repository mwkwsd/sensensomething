import { ListItemButton, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';

interface NavLinksProps {
  route: string;
  label: string;
  isSelected: boolean;
  generateButtonStyle: (isSelected: boolean) => React.CSSProperties;
  isLinkSelected: (link: string) => boolean;
}

export function NavLinks({ route, label, isSelected, generateButtonStyle, isLinkSelected }: NavLinksProps) {
  return (
    <ListItemButton
      component={Link}
      to={route}
      sx={{ ...generateButtonStyle(isSelected), textAlign: 'right' }}>
      <ListItemText primary={label} />
    </ListItemButton>
  );
}
