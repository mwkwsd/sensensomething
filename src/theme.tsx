import { createTheme, responsiveFontSizes } from '@mui/material'
import React from 'react'

export const kurtTheme = responsiveFontSizes(
  createTheme({
    typography: {
      fontFamily: ['Roboto', 'sans-serif'].join(','),
      body1: {
        color: 'black',
        textDecoration: 'none',
      },
    },
  })
)
