import { useRef, useState } from "react"
import { Box, Button, TextFieldProps } from "@mui/material"
import { TextInput } from "../../atoms/formInput/TextInput"
import emailjs from '@emailjs/browser';

const inputs = ["name", "email_address", "message"] as const;
export type Input = (typeof inputs)[number];
export const inputToFormProps: { [key in Input]: TextFieldProps & { fieldName: Input, label: string } } = {
  email_address: {fieldName: "email_address", label: "Email Address"},
  message: {fieldName: "message", label: "Message", multiline: true},
  name: {fieldName: "name", label: "Name"},
}

const defaultFieldState:{[key in Input]: string} = inputs.reduce((acc, i) => {
  acc[i] = ""
  return acc
}, {} as {[key in Input]: string})

export function ContactForm() {
  const [fieldStates, setFieldStates] = useState(defaultFieldState)
  const [formSubmitted, setFormSubmitted] = useState(false)
  
  function updateFieldState(field: Input, value: string) {
    setFieldStates((currentFieldStates) => ({
      ...currentFieldStates,
      [field]: value,
    }));
  }

  const form = useRef();

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const currentForm = form.current

    // TODO: enValid package
    if (currentForm == null || !process.env.REACT_APP_EMAIL_SERVICE_ID || !process.env.REACT_APP_EMAIL_TEMPLATE_ID || !process.env.REACT_APP_EMAIL_PUBLIC_ID) return // don't love this, but otherwise my sendForm() errors

    emailjs.sendForm(process.env.REACT_APP_EMAIL_SERVICE_ID, process.env.REACT_APP_EMAIL_TEMPLATE_ID, currentForm, process.env.REACT_APP_EMAIL_PUBLIC_ID)
      .then(() => {
        setFormSubmitted(true);
      }, (error) => {
        console.log(error.text); // We should figure out what we want to show for "Your email didn't send"
      });
  };

  return (
    <Box component='form' ref={form} onSubmit={(e) => sendEmail(e)} sx={{display: "flex", flexDirection:"column", justifyContent:"center"}}>
      {formSubmitted 
        ? <div>Thank you for the inquiry! I'll reach out soon!</div>
        : <>
            {inputs.map((i) => <TextInput {...inputToFormProps[i]} onChange={(e: React.ChangeEvent<HTMLInputElement>) => updateFieldState(i, e.target.value)}/>)}
            <Button type='submit' variant='contained' disabled={!Object.values(fieldStates).every(val => val !== '')}>Send</Button>
          </>
      }
      
    </Box>
  )
}
