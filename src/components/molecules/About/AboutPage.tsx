import { Box, Typography } from '@mui/material'
import { Kurt } from '../../../assets/personalInfo/personalInfo'
import { Contact } from '../../templates/Contact'

export function AboutPage() {
  const title = Kurt.title
  const description = Kurt.description

  return (
    <>
      <Typography variant="h3">{title}</Typography>
      <Typography>{description}</Typography>
      <Box display="flex" alignContent="center" justifyContent="center">
        {Kurt.photos.map(photo => (
          <img
            src={photo.path}
            alt={photo.alt}
            style={{ height: '100%', width: '100%' }}
          />
        ))}
      </Box>
      <Contact />
    </>
  )
}
