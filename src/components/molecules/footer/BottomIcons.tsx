import {
  BottomNavigation,
  BottomNavigationAction,
  useTheme,
} from '@mui/material'
import { RiVimeoFill } from 'react-icons/ri'
import { FaInstagram } from 'react-icons/fa'
import { socialLinks } from '../../../assets/socialLinks/SocialLinks'

export function BottomIcons() {
  const theme = useTheme()
  return (
    <BottomNavigation
      sx={{
        backgroundColor: '#343A40',
        marginTop: 'auto',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <BottomNavigationAction
        icon={<RiVimeoFill />}
        href={socialLinks.vimeo}
        target="_blank"
        sx={{
          alignItems: 'flex-end',
          fontSize: '30px',
          color: theme.typography.body1.color,
        }}
      />
      <BottomNavigationAction
        icon={<FaInstagram />}
        href={socialLinks.instagram}
        target="_blank"
        sx={{
          alignItems: 'flex-start',
          fontSize: '30px',
          color: theme.typography.body1.color,
        }}
      />
    </BottomNavigation>
  )
}
