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

const KurtLogo = `${process.env.PUBLIC_URL}/images/kurt_logo.svg`

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
            <img
              src={KurtLogo}
              alt="Logo"
              style={{
                height: '60px',
                width: 'auto',
                padding: '16px 0 16px 0',
              }}
            />
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
        ModalProps={{ keepMounted: true }}
        slotProps={{ paper: { sx: { background: 'none' } } }}
      >
        <NavList onClose={handleDrawerToggle} />
      </Drawer>
    </Box>
  )
}
