import { TextField, TextFieldProps } from "@mui/material";
import { convertFromEnumToText } from "../../../common/utils/utils";
import { Input } from "../../../common/constants/enums";

export type TextInputProps = {
  fieldName: Input
  updateFields: () => void
} & TextFieldProps

export function TextInput(props: TextInputProps) {
  return (
    <TextField 
      id={props.fieldName + "_text"}
      label={convertFromEnumToText(props.fieldName)}
      {...props}
    />
  )
}