import { Box, Button, Card, Container } from "@mui/material"
import { TextInput } from "../../atoms/formInput/TextInput"
import { useState } from "react"


function ContactForm() {
  const [filledOut, setFilledOut] = useState(false)
  
  function onClick (){
    
  }

  return (
    <Box component='form'>
      <TextInput fieldName="name"/>
      <TextInput fieldName="email address"/>
      <TextInput fieldName="message"/>
      <Button variant='contained' disabled={filledOut ? false : true} onClick={onClick}>Send</Button>
    </Box>
  )
}

export default ContactForm