import { List } from '@mui/material'
import { useLocation } from 'react-router-dom'
import { RecentWorkButton } from '../atoms/buttons/recentWorkButton/RecentWorkButton'
import { AboutButton } from '../atoms/buttons/aboutButton/AboutButton'
import { ContactButton } from '../atoms/buttons/contactButton/ContactButton'
import { SubheaderList } from './subheaderList/SubheaderList'
import { Genre, Role } from '../../common/constants/enums'
import { genreToText, roleToText } from '../../common/constants/constants'

const commonStyle = {
  fontWeight: 'bold',
  bgcolor: 'black',
  color: 'white',
  fontSize: 20,
  textAlign: 'right',
}
interface ListButtonProps {
  label: string;
  filter: Role | Genre;
  isSelected: boolean;
  generateButtonStyle: (isSelected: boolean) => React.CSSProperties;
  isLinkSelected: (link: string) => boolean;
}

export function NavList() {
  const location = useLocation();

  const isLinkSelected = (link: string) => {
    const linkWithoutQuery = link.replace(/(\?.*)$/, '');
    return location.pathname === linkWithoutQuery;
  };

  const generateButtons = (items: Record<string, string>, filterPrefix: string): ListButtonProps[] =>
  Object.entries(items).map(([key, label]) => ({
    label,
    filter: key as Role | Genre,
    isSelected: isLinkSelected(`/video-list?filter=${filterPrefix}${key}`),
    generateButtonStyle,
    isLinkSelected,
  }));

  const generateButtonStyle = (isSelected: boolean) => ({
    backgroundColor: isSelected ? 'lightgrey' : 'transparent',
    padding: '1px 16px',
    borderRadius: isSelected ? '24px 0 0 24px' : 'unset',
    '&:hover': {
      backgroundColor: 'lightgrey',
    },
    color: isSelected ? 'black' : 'white',
  });

  const roleButtons: ListButtonProps[] = generateButtons(roleToText, '');
  const genreButtons: ListButtonProps[] = generateButtons(genreToText, '');

  return (
    <List sx={{ width: '100%', height: '100%', maxWidth: 360, ...commonStyle }} component="nav">
      <RecentWorkButton isSelected={isLinkSelected('/')} generateButtonStyle={generateButtonStyle} isLinkSelected={isLinkSelected} />
      <AboutButton isSelected={isLinkSelected('/about')} generateButtonStyle={generateButtonStyle} isLinkSelected={isLinkSelected} />
      <ContactButton isSelected={isLinkSelected('/contact')} generateButtonStyle={generateButtonStyle} isLinkSelected={isLinkSelected} />

      <SubheaderList title="ROLE" buttons={roleButtons} generateButtonStyle={generateButtonStyle} isLinkSelected={isLinkSelected} />
      <SubheaderList title="GENRE" buttons={genreButtons} generateButtonStyle={generateButtonStyle} isLinkSelected={isLinkSelected} />
    </List>
  );
}