import { Box, Button, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { Kurt } from '../../../assets/personalInfo/personalInfo'
import { PageTitle } from '../../atoms/pageTitle/PageTitle'
import { useTheme } from '@mui/material'

export function AboutPage() {
  const theme = useTheme()

  return (
    <>
      <PageTitle
        title="About"
        titleUnderlineColor={theme.palette.series.main}
        fullWidth={true}
      />
      {Kurt.map((item, index) => (
        <Box key={index}>
          <Typography>{item.description}</Typography>
          <img
            src={item.photo.path}
            alt={item.photo.alt}
            style={{
              height: '100%',
              width: '100%',
              paddingTop: '15px',
              paddingBottom: '15px',
            }}
          />
        </Box>
      ))}
      <Button component={Link} to="/#contact">
        Like my work?
      </Button>
    </>
  )
}
