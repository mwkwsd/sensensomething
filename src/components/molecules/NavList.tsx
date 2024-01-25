import React from 'react'
import { List } from '@mui/material'
import { useLocation } from 'react-router-dom'
import { SubheaderList } from './subheaderList/SubheaderList'
import { Genre, Role, navLinks } from '../../common/constants/enums'
import { genreToText, roleToText } from '../../common/constants/constants'
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
  items: Record<string, string>
}

export function NavList() {
  const location = useLocation()

  const isLinkSelected = (link: string) => {
    const linkWithoutQuery = link.replace(/(\?.*)$/, '')
    return location.pathname === linkWithoutQuery
  }

  const generateButtons = (
    items: Record<string, string>,
    filterPrefix: string
  ): ListButtonProps[] =>
    Object.entries(items).map(([key, label]) => ({
      label,
      filter: key as Role | Genre,
      isSelected: isLinkSelected(`/video-list?filter=${filterPrefix}${key}`),
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
    { title: 'ROLE', items: roleToText },
    { title: 'GENRE', items: genreToText },
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
