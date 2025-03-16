import emailjs from '@emailjs/browser'
import {
  Button,
  Container,
  Grid2,
  TextFieldProps,
  Typography,
  useTheme,
} from '@mui/material'
import { useMemo, useRef, useState } from 'react'
import { OutlinedButton } from '../../atoms/buttons/OutlinedButton'
import { FieldError } from '../../atoms/formInput/FieldError'
import { TextInput } from '../../atoms/formInput/TextInput'

const inputs = ['name', 'email_address', 'message'] as const
export type Input = (typeof inputs)[number]
export const inputToFormProps: {
  [key in Input]: TextFieldProps & { fieldName: Input; label: string }
} = {
  email_address: { fieldName: 'email_address', label: 'Your Email Address' },
  message: { fieldName: 'message', label: 'Message', multiline: true },
  name: { fieldName: 'name', label: 'Your Name' },
}

const defaultFieldState: { [key in Input]: string } = inputs.reduce(
  (acc, i) => {
    acc[i] = ''
    return acc
  },
  {} as { [key in Input]: string }
)

export function ContactForm() {
  const theme = useTheme()
  const [fieldStates, setFieldStates] = useState(defaultFieldState)
  const [fieldErrors, setFieldErrors] = useState(defaultFieldState)
  const [formError, setFormError] = useState(false)
  const [formSubmitted, setFormSubmitted] = useState(false)

  function updateFieldState(field: Input, value: string) {
    setFieldStates(currentFieldStates => ({
      ...currentFieldStates,
      [field]: value,
    }))
  }

  const form = useRef<HTMLFormElement>(null)

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const currentForm = form.current

    console.log('Current Form: %o', currentForm)

    // TODO: enValid package
    if (
      !currentForm ||
      !process.env.REACT_APP_EMAIL_SERVICE_ID ||
      !process.env.REACT_APP_EMAIL_TEMPLATE_ID ||
      !process.env.REACT_APP_EMAIL_PUBLIC_ID
    ) {
      setFormError(true)
      return
    } // don't love this, but otherwise my sendForm() errors
    if (allFieldsFilledIn) {
      emailjs
        .sendForm(
          process.env.REACT_APP_EMAIL_SERVICE_ID,
          process.env.REACT_APP_EMAIL_TEMPLATE_ID,
          currentForm,
          process.env.REACT_APP_EMAIL_PUBLIC_ID
        )
        .then(
          () => {
            setFormSubmitted(true)
          },
          error => {
            setFormError(true)
          }
        )
    } else {
      Object.entries(fieldStates).forEach(([key, value]) => {
        setFieldErrors(currentFieldErrors => ({
          ...currentFieldErrors,
          [key]: value === '' ? 'error' : '',
        }))
      })
    }
  }

  const thankYouComponent = useMemo(() => {
    if (!formSubmitted) return null
    return (
      <Container sx={{ textAlign: 'center' }} disableGutters={true}>
        <Typography sx={{ paddingY: '12px', marginY: '24px' }} variant="body1">
          Thank you for the inquiry! I'll reach out soon!
        </Typography>
        <Button
          disableElevation
          onClick={() => setFormSubmitted(false)}
          variant="outlined"
          color="email"
          sx={{ paddingY: '12px' }}
        >
          Send Another Message
        </Button>
      </Container>
    )
  }, [formSubmitted])

  const allFieldsFilledIn = Object.values(fieldStates).every(val => val !== '')
  return (
    <>
      {!formSubmitted && (
        <Grid2
          container
          id="contact"
          spacing={4}
          component="form"
          ref={form}
          onSubmit={e => sendEmail(e)}
          sx={{ paddingX: '1rem' }}
        >
          {inputs.map(i => (
            <Grid2 key={`${i}-input-key`} size={{ xs: 12 }}>
              <TextInput
                sx={{ width: '100%' }}
                {...inputToFormProps[i]}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  updateFieldState(i, e.target.value)
                }
              />
              {fieldErrors[i] === 'error' && (
                <FieldError message="Please fill out this field." />
              )}
            </Grid2>
          ))}
          <Grid2
            size={{ xs: 2.5 }}
            flexGrow={1}
            justifyContent="right"
            sx={{ position: 'relative', height: '2.5rem' }}
          >
            <OutlinedButton
              sx={{
                width: '5.875rem',
                height: '2.5rem',
                position: 'absolute',
                right: 0,
              }}
              text="Submit"
              color={theme.palette.email.main}
            />
          </Grid2>
          {formError && (
            <FieldError message="Something went wrong and the form was not submitted. Please try again." />
          )}
        </Grid2>
      )}
      {thankYouComponent}
    </>
  )
}
