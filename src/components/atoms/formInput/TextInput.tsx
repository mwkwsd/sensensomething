import { TextField, TextFieldProps } from "@mui/material";
import { convertFromEnumToText } from "../../../common/utils/utils";
import { Input } from "../../../common/constants/enums";

type TextInputProps = {
  fieldName: Input
}

export function TextInput(props: TextInputProps & TextFieldProps) {
  return (
    <TextField 
      id={props.fieldName + "_text"}
      label={convertFromEnumToText(props.fieldName)}
      {...props}
    />
  )
}