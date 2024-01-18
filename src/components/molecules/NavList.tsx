import { List } from '@mui/material'
import { useLocation } from 'react-router-dom'
import { RoleListSubheader } from './roleListSubheader/RoleListSubheader'
import { GenreListSubheader } from './genreListSubheader/GenreListSubheader'
import { RecentWorkButton } from '../atoms/buttons/recentWorkButton/RecentWorkButton'
import { AboutButton } from '../atoms/buttons/aboutButton/AboutButton'
import { ContactButton } from '../atoms/buttons/contactButton/ContactButton'

const commonStyle = {
  fontWeight: 'bold',
  bgcolor: 'black',
  color: 'white',
  fontSize: 20,
  textAlign: 'right',
}

function generateButtonStyle(isSelected: boolean) {
  return {
    backgroundColor: isSelected ? 'lightgrey' : 'transparent',
    padding: '1px 16px',
    borderRadius: isSelected ? '24px 0 0 24px' : 'unset',
    '&:hover': {
      backgroundColor: 'lightgrey',
    },
    color: isSelected ? 'black' : 'white',
  }
}

export function NavList() {
  const location = useLocation()

  const isLinkSelected = (link: string) => {
    const linkWithoutQuery = link.replace(/(\?.*)$/, '')
    return location.pathname === linkWithoutQuery
  }

  return (
    <List
      sx={{ width: '100%', height: '100%', maxWidth: 360, ...commonStyle }}
      component="nav"
    >
      <RecentWorkButton
        isSelected={isLinkSelected('/')}
        generateButtonStyle={generateButtonStyle}
        isLinkSelected={isLinkSelected}
      />
      <AboutButton
        isSelected={isLinkSelected('/about')}
        generateButtonStyle={generateButtonStyle}
        isLinkSelected={isLinkSelected}
      />
      <ContactButton
        isSelected={isLinkSelected('/contact')}
        generateButtonStyle={generateButtonStyle}
        isLinkSelected={isLinkSelected}
      />

      <RoleListSubheader
        isLinkSelected={isLinkSelected}
        generateButtonStyle={generateButtonStyle}
      />

      <GenreListSubheader
        isLinkSelected={isLinkSelected}
        generateButtonStyle={generateButtonStyle}
      />
    </List>
  )
}
