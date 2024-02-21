import { List } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import {
  Genre,
  Role,
  genres,
  navLinks,
  roles,
} from '../../common/constants/enums'
import { enumMappings } from '../../common/constants/constants'
import { NavLinks } from './navLinks/NavLinks'
import { NavStyle } from '../../common/utils/newStyle'

type ListButtonProps = {
  label: string
  filter?: string
  path: string
}

export function NavList() {
  const navigate = useNavigate()

  const generateButtons = (
    items: readonly (Genre | Role)[]
  ): ListButtonProps[] =>
    items.map(item => ({
      label: enumMappings[item].label,
      filter: item,
      path: enumMappings[item].url,
    }));

  const combinedLinks: ListButtonProps[] = [
    ...navLinks.map(item => ({
      label: item.label,
      path: item.route,
    })),
    ...generateButtons(roles),
    ...generateButtons(genres),
  ];

  const secondNavLinkOrder = [
    'Animation',
    'Documentary',
    'Director of Photography',
    'Director & Producer',
    'Series',
  ];

  const secondNavLinks = combinedLinks
    .filter(item => secondNavLinkOrder.includes(item.label))
    .sort((a, b) => secondNavLinkOrder.indexOf(a.label) - secondNavLinkOrder.indexOf(b.label));

  return (
    <div>
      <List
        sx={{ width: '100%', paddingBottom: '20px', maxWidth: 360, ...NavStyle }}
        component="nav"
      >
        {navLinks.map((item, index) => (
          <NavLinks
            key={index}
            route={item.route}
            label={item.label}
            onClick={() => navigate(item.route)}
          />
        ))}
      </List>

      <List
        sx={{ width: '100%', height: '100%', maxWidth: 360, ...NavStyle }}
        component="nav"
      >
        {secondNavLinks.map((item, index) => (
          <NavLinks
            key={index}
            route={item.path}
            label={item.label}
            onClick={() => navigate(item.path)}
          />
        ))}
      </List>
    </div>
  )
}
