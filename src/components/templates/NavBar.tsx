import { useState } from "react";
import {AppBar, Box, Drawer, IconButton, Toolbar, Typography} from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';
import NavList from "../molecules/NavList"

function NavBar (){
  const [menuOpen, setMenuOpen] = useState(false)
  
  const handleDrawerToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      {/* styles WIP */}
      <AppBar >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Kurt Sensenbrenner
          </Typography>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="temporary"
        open={menuOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
      >
        <NavList />
      </Drawer>
    </Box>
  )
}

export default NavBar