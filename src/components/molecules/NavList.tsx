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

const commonStyle = {
  fontWeight: 'bold',
  bgcolor: 'black',
  color: 'white',
  fontSize: 20,
  textAlign: 'right',
}

interface ListButtonProps {
  label: string
  filter: Role | Genre
  isSelected: boolean
  generateButtonStyle: (isSelected: boolean) => React.CSSProperties
  isLinkSelected: (link: string) => boolean
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
    filterPrefix: string
  ): ListButtonProps[] =>
    items.map(item => ({
      label: enumMappings[item].label,
      filter: item,
      isSelected: isLinkSelected(enumMappings[item].url),
      generateButtonStyle,
      isLinkSelected,
    }))

  const generateButtonStyle = (isSelected: boolean) => ({
    backgroundColor: isSelected ? 'lightgrey' : 'transparent',
    padding: '1px 16px',
    borderRadius: isSelected ? '24px 0 0 24px' : 'unset',
    '&:hover': {
      backgroundColor: 'lightgrey',
    },
    color: isSelected ? 'black' : 'white',
  })

  const subheaderListItems: SubheaderListProps[] = [
    { title: 'ROLE', items: roles },
    { title: 'GENRE', items: genres },
  ]

  return (
    <List
      sx={{ width: '100%', height: '100%', maxWidth: 360, ...commonStyle }}
      component="nav"
    >
      {navLinks.map(item => (
        <NavLinks
          key={item.route}
          route={item.route}
          label={item.label}
          isSelected={isLinkSelected(item.route)}
          generateButtonStyle={generateButtonStyle}
          isLinkSelected={isLinkSelected}
        />
      ))}

      {subheaderListItems.map(item => (
        <SubheaderList
          key={item.title}
          title={item.title}
          buttons={generateButtons(item.items, '')}
          generateButtonStyle={generateButtonStyle}
          isLinkSelected={isLinkSelected}
        />
      ))}
    </List>
  )
}
