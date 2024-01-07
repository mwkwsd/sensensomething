import React from "react"
import {List, ListItemButton, ListItemText} from '@mui/material';

const NavList: React.FC = (props) => {
  return (
    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
    >
      {/* <ListItemButton selected={route === 0}> */}
      <ListItemButton>
        <ListItemText primary="Recent Work" />
      </ListItemButton>
      <ListItemButton>
        <ListItemText primary="About" />
      </ListItemButton>
      <ListItemButton>
        <ListItemText primary="Contact" />
      </ListItemButton>
      <h1>ROLE</h1>
      
      
      <List component="div" disablePadding>
        <ListItemButton sx={{ pl: 4 }}>
          <ListItemText primary="Director & Producer" />
        </ListItemButton>
        <ListItemButton sx={{ pl: 4 }}>
          <ListItemText primary="Camera Operator" />
        </ListItemButton>
      </List>

      <h1>GENRE</h1>
      <List component="div" disablePadding>
        <ListItemButton sx={{ pl: 4 }}>
          <ListItemText primary="Documentary" />
        </ListItemButton>
        <ListItemButton sx={{ pl: 4 }}>
          <ListItemText primary="Animation" />
        </ListItemButton>
        <ListItemButton sx={{ pl: 4 }}>
          <ListItemText primary="Series" />
        </ListItemButton>
      </List>
    </List>

  )
}

export default NavList