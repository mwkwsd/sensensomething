import React from 'react'
import Box from '@mui/material/Box'
import { MainHeading } from '../../atoms/mainHeading/MainHeading'
import { SubHeading } from '../../atoms/subHeading/SubHeading'

export function Header() {
  return (
    <Box
      sx={{
        margin: '20px',
        fontWeight: 'bold',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        color: 'white',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
        }}
      >
        <MainHeading mainHeading="KURT" />
        <SubHeading subHeading="SENSENBRENNER" />
      </Box>
    </Box>
  )
}
