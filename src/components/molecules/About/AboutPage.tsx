import { Box, Typography, useTheme } from '@mui/material'
import { Kurt } from '../../../assets/personalInfo/personalInfo'
import { PageTitle } from '../../atoms/pageTitle/PageTitle'
import { Contact } from '../../templates/Contact'

export function AboutPage() {
  const {
    palette: {
      series: { main: underlineColor },
    },
  } = useTheme()

  return (
    <>
      <PageTitle
        title="About"
        titleUnderlineColor={underlineColor}
        fullWidth={true}
      />
      {Kurt.map((item, index) => (
        <Box key={index} sx={{ paddingTop: '1rem' }}>
          <Typography variant="body1">{item.description}</Typography>
          <Box
            component="img"
            src={item.photo.path}
            alt={item.photo.alt}
            sx={{
              width: '100vw',
              overflow: 'auto',
              paddingY: '0.875rem',
              marginLeft: '-1rem',
            }}
          />
        </Box>
      ))}
      <Contact />
    </>
  )
}
