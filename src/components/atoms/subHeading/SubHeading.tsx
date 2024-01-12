import styled from '@mui/system/styled';

type LastNameProps = {
  lastName: string;
}

const StyledLastName = styled('p')(({ theme }) => ({
  margin: 0,
  fontSize: '15px',
  marginTop: '-10px',
  [theme.breakpoints.up('lg')]: {
    fontSize: '20px', 
  },
}));

export function LastName({ lastName}: LastNameProps) {
  return <StyledLastName>{lastName}</StyledLastName>
}