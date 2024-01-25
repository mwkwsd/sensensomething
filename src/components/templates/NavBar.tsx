import React, { useState } from "react";
import { AppBar, Box, Drawer, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { NavList } from "../molecules/NavList";
import { MainHeading } from '../../components/atoms/mainHeading/MainHeading';
import { SubHeading } from '../../components/atoms/subHeading/SubHeading';

export function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMenuOpen(!menuOpen);
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar sx={{ background: '#2D2D2D' }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
            }}
          >
            <MainHeading mainHeading="KURT" />
            <SubHeading subHeading="SENSENBRENNER" />
          </Box>
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
