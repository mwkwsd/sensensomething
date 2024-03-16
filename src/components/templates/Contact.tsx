import { Card, Typography } from '@mui/material'
import { ContactForm } from '../molecules/contactForm/ContactForm'

export function Contact() {
  return (
    <Card id="contact" sx={{ paddingY: 4 }}>
      <Typography variant="h3" sx={{ padding: '0px 16px' }}>
        GET IN TOUCH
      </Typography>
      <ContactForm />
    </Card>
  )
}
