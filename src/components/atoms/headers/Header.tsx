import styled from '@mui/system/styled';

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

const FirstName = styled('p')(({ theme }) => ({
  margin: 0,
  fontSize: '50px',
  [theme.breakpoints.up('lg')]: {
    fontSize: '65px', 
  },
}));

const LastName = styled('p')(({ theme }) => ({
  margin: 0,
  fontSize: '15px',
  marginTop: '-10px',
  [theme.breakpoints.up('lg')]: {
    fontSize: '20px', 
  },
}));

const Header = () => {
  return (
    <HeaderContainer>
      <TitleContainer>
        <FirstName>KURT</FirstName>
        <LastName>SENSENBRENNER</LastName>
      </TitleContainer>
    </HeaderContainer>
  );
};

export default Header;
