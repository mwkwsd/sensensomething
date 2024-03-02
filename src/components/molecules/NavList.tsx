import { List } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { navLinks, Genre, Role } from '../../common/constants/enums'
import { enumMappings } from '../../common/constants/constants'
import { NavLinks } from './navLinks/NavLinks'
import { NavStyle } from '../../common/utils/newStyle'

const orderedLinks: (Genre | Role)[] = [
  'animation',
  'documentary',
  'director_of_photography',
  'director_producer',
  'series',
]

export function NavList() {
  const navigate = useNavigate()

  const secondNavLinks = orderedLinks.map(linkEnum => (
    <NavLinks
      key={`${linkEnum}`}
      label={enumMappings[linkEnum].label}
      onClick={() => navigate(enumMappings[linkEnum].url)}
    />
  ))

  return (
    <div>
      <List
        sx={{
          width: '100%',
          paddingBottom: '20px',
          maxWidth: 360,
          ...NavStyle,
        }}
        component="nav"
      >
        {navLinks.map((item, index) => (
          <NavLinks
            key={index}
            label={item.label}
            onClick={() => navigate(item.route)}
          />
        ))}
      </List>

      <List
        sx={{ width: '100%', height: '100%', maxWidth: 360, ...NavStyle }}
        component="nav"
      >
        {secondNavLinks}
      </List>
    </div>
  )
}
