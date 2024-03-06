import { Card, Typography } from '@mui/material'
import { ContactForm } from '../molecules/contactForm/ContactForm'
import { Link } from "react-router-dom";

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
