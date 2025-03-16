import MenuIcon from '@mui/icons-material/Menu'
import { AppBar, Box, Drawer, IconButton, Toolbar } from '@mui/material'
import { useState } from 'react'
import { NavList } from '../molecules/NavList'

const KurtLogo = `${process.env.PUBLIC_URL}/images/kurt_logo.svg`

export function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleDrawerToggle = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <Box sx={{ display: 'flex', height: '5.75rem' }}>
      <AppBar position="sticky">
        <Toolbar sx={{ height: '100%' }}>
          <Box
            component="img"
            src={KurtLogo}
            alt="Logo"
            style={{
              height: '100%',
              width: 'auto',
              padding: '1rem 0',
            }}
          />

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
