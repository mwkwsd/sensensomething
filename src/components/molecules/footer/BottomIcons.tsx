import { BottomNavigation, BottomNavigationAction } from '@mui/material'
import { RiVimeoFill } from 'react-icons/ri'
import { FaInstagram } from 'react-icons/fa'
import { socialLinks } from '../../../assets/socialLinks/SocialLinks'
import { kurtTheme } from '../../../theme'

export function BottomIcons() {
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
          color: kurtTheme.typography.body1.color,
        }}
      />
      <BottomNavigationAction
        icon={<FaInstagram />}
        href={socialLinks.instagram}
        target="_blank"
        sx={{
          alignItems: 'flex-start',
          fontSize: '30px',
          color: kurtTheme.typography.body1.color,
        }}
      />
    </BottomNavigation>
  )
}
