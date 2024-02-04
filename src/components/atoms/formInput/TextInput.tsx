import { TextField, TextFieldProps } from "@mui/material";
import { convertFromEnumToText } from "../../../common/utils/utils";
import { Input } from "../../../common/constants/enums";

export type TextInputProps = {
  fieldName: Input
  onChange: () => void
} & TextFieldProps

export function TextInput({fieldName, ...rest}: TextInputProps) {
  return (
    <TextField 
      id={fieldName + "_text"}
      label={convertFromEnumToText(fieldName)}
      {...rest}
    />
  )
}