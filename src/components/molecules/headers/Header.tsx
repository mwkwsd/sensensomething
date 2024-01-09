import React from 'react';
import styled from '@mui/system/styled';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { FirstName } from '../../atoms/firstName/FirstName';
import { LastName } from '../../atoms/lastName/LastName';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2196f3',
    },
  },
});

const HeaderContainer = styled('div')({
  margin: '20px',
  fontWeight: 'bold',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  color: 'white',
});

const TitleContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
});

function Header() {
  return (
    <ThemeProvider theme={theme}>
      <HeaderContainer>
        <TitleContainer>
          <FirstName firstName='KURT' />
          <LastName lastName="SENSENBRENNER" />
        </TitleContainer>
      </HeaderContainer>
    </ThemeProvider>
  );
}

export default Header;
