import CloseIcon from '@mui/icons-material/Close'
import { Box, Grid2, List } from '@mui/material'
import { useMemo } from 'react'
import { useLocation } from 'react-router-dom'
import { enumMappings } from '../../common/constants/constants'
import { Genre, Role, navLinks } from '../../common/constants/enums'
import { NavLink } from './navLinks/NavLinks'

const orderedLinks: (Genre | Role)[] = [
  'animation',
  'documentary',
  'director_of_photography',
  'director_producer',
  'series',
]

export function NavList({ onClose }: { onClose: () => void }) {
  const location = useLocation()

  const firstNavLinks = useMemo(
    () =>
      navLinks.map(item => (
        <NavLink
          key={`nav-link-${item.label}`}
          navLink={item}
          isSelected={location.pathname === item.route}
          onClose={onClose}
        />
      )),
    [location.pathname, onClose]
  )

  const secondNavLinks = useMemo(
    () =>
      orderedLinks.map(linkEnum => {
        const navLink = {
          route: enumMappings[linkEnum].url,
          label: enumMappings[linkEnum].label,
        }
        return (
          <NavLink
            navLink={navLink}
            key={`nav-link-${linkEnum}`}
            isSelected={location.pathname === enumMappings[linkEnum].url}
            onClose={onClose}
          />
        )
      }),
    [location.pathname, onClose]
  )

  return (
    <Grid2
      container
      direction="column"
      justifyContent="flex-start"
      alignItems="flex-start"
      spacing={'32px'}
      style={{
        height: '100%',
        backgroundColor: 'black',
        fontWeight: 'bold',
        color: 'white',
        fontSize: 20,
        overflowY: 'hidden',
        padding: 16,
      }}
    >
      <Grid2 size={12}>
        <Box
          sx={{ height: 44, width: 44, float: 'right', textAlign: 'center' }}
          onClick={onClose}
        >
          <CloseIcon fontSize="large" sx={{ padding: '4.5px' }} />
        </Box>
      </Grid2>
      <Grid2 size={12} component="nav">
        <List sx={{ width: '100%', maxWidth: 360, padding: 0 }}>
          {firstNavLinks}
        </List>
      </Grid2>
      <Grid2 size={12} component="nav">
        <List sx={{ width: '100%', maxWidth: 360, padding: 0 }}>
          {secondNavLinks}
        </List>
      </Grid2>
    </Grid2>
  )
}
