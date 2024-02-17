import { Card, Typography } from '@mui/material'
import { ContactForm } from '../molecules/contactForm/ContactForm'

export function Contact() {
  return (
    <Card sx={{paddingY: 4}}>
      <Typography variant="h3">Get In Touch</Typography>
      <ContactForm/>
    </Card>
  )
}

