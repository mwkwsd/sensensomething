import { ListSubheader } from '@mui/material';

export function GenreListSubheader() {
  const commonStyle = {
    fontWeight: 'bold',
    bgcolor: 'black',
    color: 'white',
    fontSize: 20,
    textAlign: 'right',
  };

  return (
    <ListSubheader component="div" sx={{ ...commonStyle }}>
      GENRE
    </ListSubheader>
  );
}

