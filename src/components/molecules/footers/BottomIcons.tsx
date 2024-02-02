import BottomNavigation from '@mui/material/BottomNavigation'
import BottomNavigationAction from '@mui/material/BottomNavigationAction'
import { RiVimeoFill } from 'react-icons/ri'
import { FaInstagram } from 'react-icons/fa'

export function BottomIcons() {
  return (
    <BottomNavigation sx={{ backgroundColor: '#343A40', marginTop: 'auto' }}>
      <BottomNavigationAction
        label="Vimeo"
        icon={<RiVimeoFill />}
        sx={{ color: 'white', fontSize: '30px' }}
      />
      <BottomNavigationAction
        label="Instagram"
        icon={<FaInstagram />}
        sx={{ color: 'white', fontSize: '30px' }}
      />
    </BottomNavigation>
  )
}
