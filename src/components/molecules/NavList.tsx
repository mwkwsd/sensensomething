import { List } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { SubheaderLinks } from './subheaderLinks/SubheaderLinks'
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

interface ListButtonProps {
  label: string
  filter: string
}
interface SubheaderLinksProps {
  title: string
  items: readonly (Genre | Role)[]
  navigate: (route: string) => void
}

export function NavList() {
  const navigate = useNavigate()

  const isLinkSelected = (link: string) => {
    return window.location.pathname === link.replace(/(\?.*)$/, '')
  }

  const generateButtons = (items: readonly (Genre | Role)[]): ListButtonProps[] =>
  items.map((item) => ({
    label: enumMappings[item].label,
    filter: item,
  }));

  const subheaderLinkItems: SubheaderLinksProps[] = [
    { title: 'ROLE', items: roles, navigate },
    { title: 'GENRE', items: genres, navigate },
  ]

  return (
    <List
      sx={{ width: '100%', height: '100%', maxWidth: 360, ...NavStyle }}
      component="nav"
    >
      {navLinks.map(item => (
        <NavLinks
          key={item.route}
          route={item.route}
          label={item.label}
          isLinkSelected={isLinkSelected(item.route)}
          onClick={() => navigate(item.route)}
        />
      ))}

      {subheaderLinkItems.map((item) => (
        <SubheaderLinks
          key={item.title}
          title={item.title}
          links={generateButtons(item.items)}
          navigate={navigate}
        />
      ))}
    </List>
  )
}
