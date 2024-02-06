import BottomNavigation from '@mui/material/BottomNavigation'
import { RiVimeoFill } from 'react-icons/ri'
import { FaInstagram } from 'react-icons/fa'
import { socialLinks } from '../../../assets/socialLinks/SocialLinks'
import { IconNavigation } from '../../atoms/footer/IconNavigation'

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
      <IconNavigation
        icon={<RiVimeoFill />}
        href={socialLinks.vimeo}
        sx={{ marginRight: '-150px' }}
      />
      <IconNavigation
        icon={<FaInstagram />}
        href={socialLinks.instagram}
        sx={{ marginLeft: '20px' }}
      />
    </BottomNavigation>
  )
}
