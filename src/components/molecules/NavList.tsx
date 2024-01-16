import { List, ListItemButton, ListItemText, ListSubheader } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';

const commonStyle = {
  fontWeight: 'bold',
  bgcolor: 'black',
  color: 'white',
  fontSize: 20,
  textAlign: 'right',
};

function generateButtonStyle(isSelected: boolean, link: string) {
  return {
    ...(isSelected && {
      backgroundColor: 'lightgrey',
      padding: '1px 16px',
      borderRadius: '24px 0 0 24px',
      '&:hover': {
        backgroundColor: 'lightgrey',
      },
    }),
    color: isSelected ? 'black' : 'white',
  };
}

export function NavList() {
  const location = useLocation();

  const isLinkSelected = (link: string) => {
    const basePath = '/video-list';
    const linkWithoutQuery = link.replace(/(\?.*)$/, ''); 
    return location.pathname === linkWithoutQuery && location.search.includes(link.replace(basePath, ''));
  };

  return (
    <List
      sx={{ width: '100%', height: '100%', maxWidth: 360, ...commonStyle }}
      component="nav"
    >
      <ListItemButton
        component={Link}
        to="/"
        sx={{ ...generateButtonStyle(isLinkSelected('/'), '/'), textAlign: 'right' }}
      >
        <ListItemText primary="Recent Work" />
      </ListItemButton>
      <ListItemButton
        component={Link}
        to="/contact"
        sx={{ ...generateButtonStyle(isLinkSelected('/contact'), '/contact'), textAlign: 'right' }}
      >
        <ListItemText primary="Contact" />
      </ListItemButton>
      <ListItemButton
        component={Link}
        to="/about"
        sx={{ ...generateButtonStyle(isLinkSelected('/about'), '/about'), textAlign: 'right' }}
      >
        <ListItemText primary="About" />
      </ListItemButton>

      {/* WIP style sub items */}
      <List component="div">
        <ListSubheader component="div" sx={{ ...commonStyle }}>
          ROLE
        </ListSubheader>
        <ListItemButton
          component={Link}
          to="/video-list?filter=director-producer"
          sx={{ ...generateButtonStyle(isLinkSelected('/video-list?filter=director-producer'), '/video-list?filter=director-producer'), textAlign: 'right' }}
        >
          <ListItemText primary="Director & Producer" />
        </ListItemButton>
        <ListItemButton
          component={Link}
          to="/video-list?filter=camera-operator"
          sx={{ ...generateButtonStyle(isLinkSelected('/video-list?filter=camera-operator'), '/video-list?filter=camera-operator'), textAlign: 'right' }}
        >
          <ListItemText primary="Camera Operator" />
        </ListItemButton>
      </List>

      <List component="div">
        <ListSubheader component="div" sx={{ ...commonStyle }}>
          GENRE
        </ListSubheader>
        <ListItemButton
          component={Link}
          to="/video-list?filter=animation"
          sx={{ ...generateButtonStyle(isLinkSelected('/video-list?filter=animation'), '/video-list?filter=animation'), textAlign: 'right' }}
        >
          <ListItemText primary="Animation" />
        </ListItemButton>
        <ListItemButton
          component={Link}
          to="/video-list?filter=documentary"
          sx={{ ...generateButtonStyle(isLinkSelected('/video-list?filter=documentary'), '/video-list?filter=documentary'), textAlign: 'right' }}
        >
          <ListItemText primary="Documentary" />
        </ListItemButton>
        <ListItemButton
          component={Link}
          to="/video-list?filter=series"
          sx={{ ...generateButtonStyle(isLinkSelected('/video-list?filter=series'), '/video-list?filter=series'), textAlign: 'right' }}
        >
          <ListItemText primary="Series" />
        </ListItemButton>
      </List>
    </List>
  );
}
