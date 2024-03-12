import { List } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { enumMappings } from '../../common/constants/constants'
import { Genre, Role, navLinks } from '../../common/constants/enums'
import { NavLinks } from './navLinks/NavLinks'

const orderedLinks: (Genre | Role)[] = [
  'animation',
  'documentary',
  'director_of_photography',
  'director_producer',
  'series',
]

export function NavList() {
  const navigate = useNavigate()

  const secondNavLinks = orderedLinks.map(linkEnum => {
    const navLink = {
      route: enumMappings[linkEnum].url,
      label: enumMappings[linkEnum].label,
    }
    return (
      <NavLinks
        navLink={navLink}
        key={`${linkEnum}`}
        label={enumMappings[linkEnum].label}
        onClick={() => navigate(enumMappings[linkEnum].url)}
      />
    )
  })

  return (
    <div
      style={{
        height: '100%',
        backgroundColor: 'black',
        fontWeight: 'bold',
        color: 'white',
        fontSize: 20,
        textAlign: 'right',
        overflowY: 'hidden',
      }}
    >
      <List
        sx={{
          width: '100%',
          paddingBottom: '20px',
          maxWidth: 360,
        }}
        component="nav"
      >
        {navLinks.map((item, index) => (
          <NavLinks
            key={index}
            label={item.label}
            navLink={item}
            // onClick={() => navigate(item.route)}
            // component={Link}
            // to={item.route}
          />
        ))}
      </List>

      <List
        sx={{ width: '100%', height: '100%', maxWidth: 360 }}
        component="nav"
      >
        {secondNavLinks}
      </List>
    </div>
  )
}
