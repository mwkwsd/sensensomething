import MenuIcon from '@mui/icons-material/Menu'
import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from '@mui/material'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { NavList } from '../molecules/NavList'

export function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleDrawerToggle = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar position="sticky">
        <Toolbar>
          <Typography
            component={Link}
            to="/"
            variant="h3"
            noWrap
            sx={{ textDecoration: 'none' }}
          >
            KURT SENSENBRENNER
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
        disableRestoreFocus
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
  )
}
