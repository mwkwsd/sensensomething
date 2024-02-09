import { TextField } from "@mui/material";
import { convertFromEnumToText } from "../../../common/utils/utils";
import { Input } from "../../../common/constants/enums";

type TextInputProps = {
  fieldName: Input

  // stateManager: 
}

export function TextInput({fieldName}: TextInputProps) {
  return (
    <TextField 
      id={fieldName+"_text"}
      label={convertFromEnumToText(fieldName)}
    />
  )
}