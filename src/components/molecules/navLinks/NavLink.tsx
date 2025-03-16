import { Box, ListItemButton, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

type NavLinksProps = {
  navLink: { route: string; label: string }
  isSelected: boolean
  onClose: () => void
}

export function NavLink({ navLink, isSelected, onClose }: NavLinksProps) {
  const borderColor = isSelected ? '#FFB74D' : 'transparent'

  return (
    <Box
      sx={{
        marginBottom: '-2px', // Kinda hacky way to add a border w/o increasing component size
        borderBottom: `2px solid ${borderColor}`,
        height: '50px',
        ':hover': { borderBottom: `2px solid #FFB74D` },
      }}
    >
      <ListItemButton
        component={Link}
        to={navLink.route}
        disableGutters
        disableRipple
        sx={{
          paddingY: '0px',
          position: 'relative',
          top: '50%',
          transform: 'translateY(-50%)',
        }}
        onClick={onClose}
      >
        <Typography
          variant="subtitle2"
          component="span"
          sx={{ paddingX: '0.625rem' }}
        >
          {navLink.label}
        </Typography>
      </ListItemButton>
    </Box>
  )
}
