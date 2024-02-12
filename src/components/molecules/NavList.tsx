import { List } from '@mui/material'
import { useLocation } from 'react-router-dom'
import { SubheaderList } from './subheaderList/SubheaderList'
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
  filter: Role | Genre
  isSelected: boolean
}
interface SubheaderListProps {
  title: string
  items: readonly Genre[] | readonly Role[]
}

export function NavList() {
  const location = useLocation()

  const isLinkSelected = (link: string) => {
    const linkWithoutQuery = link.replace(/(\?.*)$/, '')
    return location.pathname === linkWithoutQuery
  }

  const generateButtons = (
    items: readonly Genre[] | readonly Role[],
  ): ListButtonProps[] =>
    items.map(item => ({
      label: enumMappings[item].label,
      filter: item,
      isSelected: isLinkSelected(enumMappings[item].url),
    }))

  const subheaderListItems: SubheaderListProps[] = [
    { title: 'ROLE', items: roles },
    { title: 'GENRE', items: genres },
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
        />
      ))}

      {subheaderListItems.map(item => (
        <SubheaderList
          key={item.title}
          title={item.title}
          links={generateButtons(item.items)}
        />
      ))}
    </List>
  )
}
