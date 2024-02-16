import { ListSubheader, ListItemButton, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';

interface ListButtonProps {
  label: string;
  filter: string;
  isSelected: boolean;
  generateButtonStyle: (isSelected: boolean) => React.CSSProperties;
  isLinkSelected: (link: string) => boolean;
}

interface SubheaderListProps {
  title: string;
  buttons: ListButtonProps[];
  generateButtonStyle: (isSelected: boolean) => React.CSSProperties;
  isLinkSelected: (link: string) => boolean;
}

export function SubheaderList({
  title,
  buttons,
  generateButtonStyle,
  isLinkSelected,
}: SubheaderListProps) {
  const commonStyle = {
    fontWeight: 'bold',
    bgcolor: 'black',
    color: 'white',
    fontSize: 20,
    textAlign: 'right',
  };

  return (
    <ListSubheader component="div" sx={{ ...commonStyle }}>
      {title}
      {buttons.map(({ label, filter, isSelected }) => (
        <ListItemButton
          key={filter}
          component={Link}
          to={`/video-list?filter=${filter}`}
          sx={{ ...generateButtonStyle(isSelected), textAlign: 'right', paddingRight: '0px' }}
        >
          <ListItemText primary={label} />
        </ListItemButton>
      ))}
    </ListSubheader>
  );
}
