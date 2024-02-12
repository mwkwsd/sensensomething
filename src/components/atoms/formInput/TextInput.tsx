import { TextField, TextFieldProps } from '@mui/material'
import { kurtTheme } from '../../../theme'
import {
  Input,
  inputToFormProps,
} from '../../molecules/contactForm/ContactForm'

export type TextInputProps = {
  fieldName: Input
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
} & TextFieldProps

export function TextInput({ fieldName, ...rest }: TextInputProps) {
  return (
    <TextField
      variant="standard"
      color="email"
      InputProps={{
        sx: {
          color: '#FFFFFF',
        },
      }}
      sx={{
        backgroundColor: kurtTheme.palette.background.default,
        marginY: 2,
        maxWidth: 400,
        height: rest.multiline ? 100 : undefined,
      }}
      id={fieldName + '_text'}
      label={inputToFormProps[fieldName]['label']}
      name={fieldName}
      {...rest}
    />
  )
}
