import { TextField } from "@mui/material";

type TextInputProps = {
  fieldName: string

  // stateManager: 
}

export function TextInput({fieldName}: TextInputProps) {
  return (
    <TextField 
      id={fieldName+"text"}
      label={fieldName.toUpperCase()}
    />
  )
}