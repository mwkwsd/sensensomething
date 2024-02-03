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
        main: '#C29EFA',
      },
      background: {
        default: '#343A40',
      },
    },
  })
)

declare module '@mui/material/styles' {
  interface Palette {
    director_producer: Palette['primary']
  }

  interface PaletteOptions {
    director_producer?: PaletteOptions['primary']
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    director_producer: true
  }
}
