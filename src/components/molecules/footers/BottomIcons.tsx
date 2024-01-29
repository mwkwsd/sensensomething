import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { RiVimeoLine } from 'react-icons/ri';
import { FaInstagram } from 'react-icons/fa';

export function BottomIcons() {
  return (
    <BottomNavigation sx={{ backgroundColor: '#2D2D2D', marginTop: 'auto' }}>
      <BottomNavigationAction label="Vimeo" icon={<RiVimeoLine />} sx={{ color: 'white', fontSize: '30px' }} />
      <BottomNavigationAction label="Instagram" icon={<FaInstagram />} sx={{ color: 'white', fontSize: '30px' }} />
    </BottomNavigation>
  )
}
