import { ListItem, ListItemButton, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

type NavLinksProps = {
  navLink: { route: string; label: string }
  isSelected: boolean
  onClose: () => void
}

export function NavLink({ navLink, isSelected, onClose }: NavLinksProps) {
  const borderColor = isSelected ? '#FFB74D' : 'transparent'

  return (
    <ListItem
      sx={{
        ':first-child': { paddingTop: '0rem' },
        ':last-child': { paddingBottom: '0rem' },
        paddingY: '0.125rem',
        paddingX: '0rem',
        marginBottom: '-0.0625rem', // Kinda hacky way to add a border w/o increasing component size
        borderBottom: `0.0625rem solid ${borderColor}`,
      }}
    >
      <ListItemButton
        component={Link}
        to={navLink.route}
        disableGutters
        disableRipple
        sx={{ paddingY: '0px' }}
        onClick={onClose}
      >
        <Typography
          variant="subtitle2"
          component="span"
          sx={{
            paddingLeft: '0.625rem',
            fontSize: '1.25rem',
            lineHeight: '100%',
            paddingY: '0.625rem',
            textTransform: 'uppercase',
          }}
        >
          {navLink.label}
        </Typography>
      </ListItemButton>
    </ListItem>
  )
}
