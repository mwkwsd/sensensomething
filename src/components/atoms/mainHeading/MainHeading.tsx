import React from 'react';
import styled from '@mui/system/styled';

type FirstNameProps = {
  firstName: string;
};

const StyledFirstName = styled('p')(({ theme }) => ({
  margin: 0,
  fontSize: '50px',
  [theme.breakpoints.up('lg')]: {
    fontSize: '65px', 
  },
}));

export function FirstName({ firstName }: FirstNameProps) {
  return <StyledFirstName>{firstName}</StyledFirstName>;
}
