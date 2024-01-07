import {List, ListItemButton, ListItemText, ListSubheader} from '@mui/material';

const NavList: React.FC = (props) => {
  return (
    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
    >
      {/* TODO: routing on click */}
      <ListItemButton>
        <ListItemText primary="Recent Work" />
      </ListItemButton>
      <ListItemButton>
        <ListItemText primary="About" />
      </ListItemButton>
      <ListItemButton>
        <ListItemText primary="Contact" />
      </ListItemButton>
      
      {/* WIP style sub items */}
      <List component="div" >
        <ListSubheader component="div">
          ROLES
        </ListSubheader>
        <ListItemButton>
          <ListItemText primary="Director & Producer" />
        </ListItemButton>
        <ListItemButton>
          <ListItemText primary="Camera Operator" />
        </ListItemButton>
      </List>

      <List component="div" >
      <ListSubheader component="div">
          GENRE
        </ListSubheader>
        <ListItemButton>
          <ListItemText primary="Documentary" />
        </ListItemButton>
        <ListItemButton>
          <ListItemText primary="Animation" />
        </ListItemButton>
        <ListItemButton>
          <ListItemText primary="Series" />
        </ListItemButton>
      </List>
    </List>

  )
}

export default NavList