import { List } from '@mui/material'
import { useLocation } from 'react-router-dom'
import { SubheaderLinks } from './subheaderLinks/SubheaderLinks'
import { NavLinks } from './navLinks/NavLinks'
import {
  Genre,
  Role,
  genres,
  navLinks,
  roles,
} from '../../common/constants/enums'
import { enumMappings } from '../../common/constants/constants'
import { NavStyle } from '../../common/utils/navStyle'

interface SubheaderLinksProps {
  title: string
  items: readonly Genre[] | readonly Role[]
  isSelected: boolean
}
interface LinkProps {
  label: string
  filter: Role | Genre
  isSelected: boolean
}

export function NavList() {
  const location = useLocation()

  // TODO: The ListItemButtons inside of SubheaderLinks are rendering
  // as if isSelected: true is there default state. Figure out how to
  // fix this. Can this function be leveraged?
  const isLinkSelected = (link: string) => {
    const linkWithoutQuery = link.replace(/(\?.*)$/, '')
    return location.pathname === linkWithoutQuery
  }

  const generateLinks = (
    items: readonly Genre[] | readonly Role[]
  ): LinkProps[] =>
    items.map(item => ({
      label: enumMappings[item].label,
      filter: item,
      isSelected: isLinkSelected(enumMappings[item].url),
    }))

  const subheaderLinksItems: SubheaderLinksProps[] = [
    { title: 'ROLE', items: roles, isSelected: isLinkSelected('/role') },
    { title: 'GENRE', items: genres, isSelected: isLinkSelected('/genre') },
  ]

  return (
    <List sx={{ width: '100%', height: '100%', maxWidth: 360, ...NavStyle }}>
      {navLinks.map(item => (
        <NavLinks
          key={item.route}
          route={item.route}
          label={item.label}
          isSelected={isLinkSelected(item.route)}
        />
      ))}
      {subheaderLinksItems.map(item => (
        <SubheaderLinks
          key={item.title}
          title={item.title}
          links={generateLinks(item.items)}
          isSelected={item.isSelected}
        />
      ))}
    </List>
  )
}
