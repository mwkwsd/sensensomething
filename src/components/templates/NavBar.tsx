import { useState } from 'react'
import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { NavList } from '../molecules/NavList'

export function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMenuOpen(!menuOpen);
  }

  return (
    <Box sx={{ display: 'flex' }}>
      {/* styles WIP */}
      <AppBar position="sticky">
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Kurt Sensenbrenner
          </Typography>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              sx={{ marginLeft: 'auto' }}
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer
        component="nav"
        variant="temporary"
        anchor="right"
        open={menuOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
      >
        <NavList />
      </Drawer>
    </Box>
  );
}
