import styled from '@mui/system/styled';
import { FirstName } from '../../atoms/firstName/FirstName';
import { LastName } from '../../atoms/lastName/LastName';

const HeaderContainer = styled('div')({
  margin: '20px',
  fontWeight: 'bold',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  color: 'white'
});

const TitleContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
});

function Header() {
  return (
    <HeaderContainer>
      <TitleContainer>
        <FirstName firstName='KURT' />
        <LastName lastName="SENSENBRENNER" />
      </TitleContainer>
    </HeaderContainer>
  );
};

export default Header;
