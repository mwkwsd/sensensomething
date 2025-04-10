import { createTheme } from '@mui/material/styles'

const colorGuide = {
  director_of_photography: '#CA9FFF',
  director_producer: '#4BAEFF',
  series: '#FFB74D',
  animation: '#E685B5',
  documentary: '#FCFF85',
  email: '#FFB74D',
  error: '#D32F2F',
} as const

const fonts = ['Oswald', 'Roboto', 'sans-serif'].join(',')

const theme = createTheme({
  typography: {
    allVariants: { fontFamily: fonts },
    fontFamily: fonts,
    // page titles
    h1: {
      fontSize: '2rem',
      color: '#FFFFFF',
      fontWeight: 400,
      lineHeight: '2.964rem',
      textAlign: 'left',
      textTransform: 'uppercase',
    },
    // section title like Recent Work
    h2: {
      fontWeight: 400,
      color: '#FFFFFF',
      fontSize: '1.75rem',
      textTransform: 'uppercase',
    },
    // video/series titles
    h3: {
      fontWeight: 400,
      fontSize: '1.5rem',
      lineHeight: '2.223rem',
      color: '#F8F9FA',
      textAlign: 'left',
      textTransform: 'uppercase',
    },
    h4: {
      color: '#F8F9FA',
    },
    // Error Text
    h5: {
      color: 'white',
      fontFamily: 'Roboto, sans-serif',
      fontSize: '0.875rem',
      lineHeight: '143%',
      fontWeight: 500,
    },
    
    // Body/Regular in Figma - Page & Video descriptions. Pretty much non-title copy
    body1: {
      color: '#F8F9FA',
      textDecoration: 'none',
      lineHeight: '140%',
      fontSize: '1rem',
      fontFamily: 'Manrope, sans-serif',
      fontWeight: 400,
    },
    // video descriptions
    body2: {
      color: 'white',
      fontWeight: 400,
      fontSize: '1rem',
      lineHeight: '1.4rem',
      textAlign: 'left',
    },

    // Ready to Hire / Submit / See more videos
    button: {
      color: '#FFFFFF',
      lineHeight: '100%',
      fontSize: '0.875rem',
      letterSpacing: '2%',
      fontFamily: 'Manrope, sans-serif',
      fontWeight: 500,
      textTransform: 'uppercase',
    },

    // Footer Buttons
    subtitle1: {
      color: "#F8F9FA",
      fontFamily: 'Manrope, sans-serif',
      fontSize: '0.875rem',
      fontWeight: 400,
      lineHeight: '100%',
      letterSpacing: '0%',
      textAlign: 'left',
    },
    // NavLink
    subtitle2: {
      fontSize: '1.25rem',
      fontStyle: 'normal',
      fontWeight: '400',
      lineHeight: 'normal',
      textTransform: 'uppercase',
    },
    // seriesList image overlay
    caption: {
      fontSize: '1.5rem',
      fontFamily: 'Oswald',
      color: '#F8F9FA',
      fontStyle: 'normal',
      lineHeight: 'normal',
      fontWeight: 400,
      textTransform: 'uppercase',
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
          borderRadius: '0',
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
          fontFamily: 'Manrope, sans-serif',
          fontSize: '0.75rem',
          fontWeight: 500,
          lineHeight: '1.024rem',
          letterSpacing: '0.02em',
          textAlign: 'left',
        },
      },
    },
    MuiStack: {
      defaultProps: {
        useFlexGap: true,
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
