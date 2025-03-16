import { InputProps, TextField, TextFieldProps, useTheme } from '@mui/material'
import { WithRequired } from '../../../common/utils/typescriptUtils'
import { Input } from '../../molecules/contactForm/ContactForm'

export type TextInputProps = {
  fieldName: Input
} & WithRequired<TextFieldProps, 'onChange'>

export function TextInput({ fieldName, label, ...rest }: TextInputProps) {
  const theme = useTheme()

  const inputProps: InputProps = {
    sx: {
      color: '#FFFFFF',
      '::before': {
        content: '""',
        border: `1px solid ${theme.palette.email.main}`,
        display: 'block',
        width: '100%',
      },
      '& input': {
        color: 'white',
        fontWeight: 400,
        fontSize: '1rem',
        lineHeight: '1.4rem',
        fontFamily: 'Manrope',
        textAlign: 'left',
      },
    },
  }
  return (
    <TextField
      variant="standard"
      color="email"
      sx={{ height: rest.multiline ? 100 : undefined }}
      id={fieldName + '_text'}
      label={label}
      name={fieldName}
      rows={rest.multiline ? 5 : 1}
      slotProps={{
        inputLabel: {
          sx: { paddingLeft: '0.75rem', fontSize: '1rem' },
        },
        input: inputProps,
      }}
      {...rest}
    />
  )
}
