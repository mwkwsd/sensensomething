import { createTheme } from '@mui/material/styles'

const colorGuide = {
  director_of_photography: '#CA9FFF',
  director_producer: '#4BAEFF',
  series: '#FFB74D',
  animation: '#F8CAFF',
  documentary: '#79DFC1',
  email: '#FFB74D',
  error: '#D32F2F',
} as const

const theme = createTheme({
  typography: {
    allVariants: {
      font: 'Oswald',
      fontFamily: 'Oswald',
    },
    fontFamily: ['Oswald', 'Roboto', 'sans-serif'].join(','),
    h1: {
      fontSize: '2rem',
      color: '#FFFFFF',
      fontWeight: 400,
      lineHeight: '2.964rem',
      textAlign: 'left',
    },
    h2: {
      fontWeight: 700,
      color: '#FFFFFF',
      fontSize: '1.5rem',
    },
    // Home Page image overlay text
    h3: {
      fontWeight: 400,
      fontSize: '1.5rem',
      lineHeight: '2.223rem',
      color: '#F8F9FA',
      textAlign: 'left',
    },
    h4: {
      color: '#F8F9FA',
    },
    body1: {
      color: 'white',
      textDecoration: 'none',
      lineHeight: '18.75px',
      fontSize: '1rem',
      fontWeight: 400,
    },
    body2: {
      color: 'white',
      fontWeight: 400,
      fontSize: '1rem',
      lineHeight: '1.4rem',
      fontFamily: 'Manrope',
      textAlign: 'left',
    },
    button: {
      // EXPLORE THE SERIES
      color: '#FFFFFF',
      lineHeight: '1.024rem',
      fontSize: '0.75rem',
      letterSpacing: '0.02em',
      fontFamily: 'Manrope',
      fontWeight: '500',
      textAlign: 'left',
    },
    subtitle1: {
      fontFamily: 'Manrope',
      fontSize: '0.75rem',
      fontWeight: '400',
      lineHeight: '1.024rem',
      textAlign: 'left',
    },
  },
  components: {
    MuiAppBar: {
      defaultProps: {
        sx: { backgroundColor: '#191B1B' },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: '#0C0D0D',
        },
      },
      defaultProps: {
        elevation: 0,
        sx: { backgroundColor: '#0C0D0D' },
      },
    },
    MuiCardContent: {
      defaultProps: {
        sx: {
          '&:last-child': { padding: '16px' },
        },
      },
    },
    MuiCardMedia: {
      defaultProps: {
        component: 'div',
        sx: {
          aspectRatio: '16/9',
          border: '0px',
        },
      },
    },
    MuiImageListItemBar: {
      styleOverrides: {
        titleWrap: {
          position: 'absolute',
          bottom: 0,
          borderBottom: '16px',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontFamily: 'Manrope',
          fontSize: '0.75rem',
          fontWeight: 500,
          lineHeight: '1.024rem',
          letterSpacing: '0.02em',
          textAlign: 'left',
        },
      },
    },
  },
  palette: { background: { default: '#0C0D0D' } },
})

export const kurtTheme = createTheme(theme, {
  palette: {
    director_producer: theme.palette.augmentColor({
      color: { main: colorGuide.director_producer },
      name: 'director_producer',
    }),
    director_of_photography: theme.palette.augmentColor({
      color: { main: colorGuide.director_of_photography },
      name: 'director_of_photography',
    }),
    series: theme.palette.augmentColor({
      color: { main: colorGuide.series },
      name: 'series',
    }),
    animation: theme.palette.augmentColor({
      color: { main: colorGuide.animation },
      name: 'animation',
    }),
    documentary: theme.palette.augmentColor({
      color: { main: colorGuide.documentary },
      name: 'documentary',
    }),
    email: theme.palette.augmentColor({
      color: { main: colorGuide.email },
      name: 'email',
    }),
    error: theme.palette.augmentColor({
      color: { main: colorGuide.error },
      name: 'error',
    }),
  },
})

declare module '@mui/material/styles' {
  interface Palette {
    director_producer: Palette['primary']
    director_of_photography: Palette['primary']
    series: Palette['primary']
    animation: Palette['primary']
    documentary: Palette['primary']
    email: Palette['primary']
  }

  interface PaletteOptions {
    director_producer?: PaletteOptions['primary']
    director_of_photography?: PaletteOptions['primary']
    series?: PaletteOptions['primary']
    animation?: PaletteOptions['primary']
    documentary?: PaletteOptions['primary']
    email?: PaletteOptions['primary']
  }
}

declare module '@mui/material/Chip' {
  interface ChipPropsColorOverrides {
    director_producer: true
    director_of_photography: true
    series: true
    animation: true
    documentary: true
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    email: true
  }
}

declare module '@mui/material/TextField' {
  interface TextFieldPropsColorOverrides {
    email: true
  }
}
