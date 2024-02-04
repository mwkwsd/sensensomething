import { useEffect, useRef, useState } from "react"
import { Box, Button } from "@mui/material"
import { TextInput } from "../../atoms/formInput/TextInput"
import emailjs from '@emailjs/browser';



function ContactForm() {
  const [filledOut, setFilledOut] = useState(false)

  useEffect(() => {
    console.log(form.current)
  }, [])

  const form = useRef();

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();


    const currentForm = form.current
    if (currentForm == null) return

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', currentForm, 'YOUR_PUBLIC_KEY')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <Box component='form' ref={form} onSubmit={(e) => sendEmail(e)}>
      <TextInput fieldName="name"/>
      <TextInput fieldName={"email_address"}/>
      <TextInput fieldName="message" multiline/>
      <Button type='submit' variant='contained' disabled={filledOut ? false : true}>Send</Button>
    </Box>
  )
}

export default ContactForm