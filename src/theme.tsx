import { createTheme } from '@mui/material'

export const kurtTheme = createTheme({
  typography: {
    allVariants: {
      font: 'Roboto',
    },
    fontFamily: ['Roboto', 'sans-serif'].join(','),
    h1: {
      fontSize: '1.75rem',
      color: '#FFFFFF',
      fontWeight: 700,
    },
    h2: {
      fontWeight: 700,
      color: '#FFFFFF',
      fontSize: '1.5rem',
    },
    // Home Page image overlay text
    h3: {
      fontFamily: 'Oswald',
      weight: 400,
      fontSize: '1.5rem',
      // font: '"Oswald"',
      lineHeight: '35.57px',
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
      color: '#212529',
      fontWeight: 400,
      fontSize: '0.75rem',
      lineHeight: '14px',
    },
    button: {
      // EXPLORE THE SERIES
      color: '#FFFFFF',
      lineHeight: '22px',
      fontSize: '0.8125rem',
      letterSpacing: '0.46px',
    },
  },
  palette: {
    director_producer: {
      main: '#4BAEFF',
    },
    director_of_photography: {
      main: '#CA9FFF',
    },
    series: { main: '#FFB74D' },
    animation: { main: '#F8CAFF' },
    documentary: { main: '#79DFC1' },
    background: {
      default: '#343A40',
    },
  },
  components: {
    MuiAppBar: {
      defaultProps: {
        sx: {
          backgroundColor: '#2D2D2D',
        },
      },
    },
    MuiCard: {
      defaultProps: {
        elevation: 0,
        sx: {
          backgroundColor: '#212529',
          overflow: 'visible',
        },
      },
    },
    MuiCardContent: {
      defaultProps: {
        sx: {
          '&:last-child': {
            padding: '16px',
          },
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
  },
})

declare module '@mui/material/styles' {
  interface Palette {
    director_producer: Palette['primary']
    director_of_photography: Palette['primary']
    series: Palette['primary']
    animation: Palette['primary']
    documentary: Palette['primary']
  }

  interface PaletteOptions {
    director_producer?: PaletteOptions['primary']
    director_of_photography?: PaletteOptions['primary']
    series?: PaletteOptions['primary']
    animation?: PaletteOptions['primary']
    documentary?: PaletteOptions['primary']
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    director_producer: true
    director_of_photography: true
    series: true
    animation: true
    documentary: true
  }
}
