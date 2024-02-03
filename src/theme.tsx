import { createTheme, responsiveFontSizes } from '@mui/material'

export const kurtTheme = responsiveFontSizes(
  createTheme({
    typography: {
      fontFamily: ['Roboto', 'sans-serif'].join(','),
      body1: {
        color: 'white',
        textDecoration: 'none',
      },
      h1: {},
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
