import { Box, Typography, useTheme } from '@mui/material'
import { Kurt } from '../../../assets/personalInfo/personalInfo'
import { PageTitle } from '../../atoms/pageTitle/PageTitle'
import { Contact } from '../../templates/Contact'

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
          <Typography variant="body2">{item.description}</Typography>
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
      <Contact />
    </>
  )
}
