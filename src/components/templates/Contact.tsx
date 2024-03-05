import { Card, Typography } from '@mui/material'
import { ContactForm } from '../molecules/contactForm/ContactForm'

interface ContactProps {
  id: string
}

export function Contact({ id }: ContactProps) {
  return (
    <Card id={id} sx={{ paddingY: 4 }}>
      <Typography variant="h3" sx={{ padding: '0px 16px' }}>
        GET IN TOUCH
      </Typography>
      <ContactForm />
    </Card>
  )
}
