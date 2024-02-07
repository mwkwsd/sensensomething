import { createTheme, responsiveFontSizes } from '@mui/material'

export const kurtTheme = responsiveFontSizes(
  createTheme({
    typography: {
      allVariants: {
        font: 'Roboto',
      },
      fontFamily: ['Roboto', 'sans-serif'].join(','),
      h1: {
        fontSize: '28px',
        color: '#FFFFFF',
        fontWeight: 700,
      },
      h2: {
        fontWeight: 700,
        color: '#FFFFFF',
        fontSize: '24px',
      },
      body1: {
        // Could only get NavBar Links text color to render black 
        // when this is commented out of the body
        // color: 'white',
        textDecoration: 'none',
        lineHeight: '18.75px',
        fontSize: '16px',
        fontWeight: 400,
      },
      body2: {
        color: '#212529',
        fontWeight: 400,
        fontSize: '12px',
        lineHeight: '14px',
      },
    },
    palette: {
      director_producer: {
        main: '#9EC5FE',
      },
      director_of_photography: {
        main: '#9EEAF9',
      },
      series: { main: '#F7D6E6' },
      animation: { main: '#A3CFBB' },
      documentary: { main: '#FECBA1' },
      background: {
        default: '#343A40',
      },
    },
    components: {
      MuiCard: {
        styleOverrides: {
          root: {
            backgroundColor: '#212529',
          },
        },
      },
    },
  })
)

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
