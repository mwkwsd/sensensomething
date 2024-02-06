import { TextField, TextFieldProps } from "@mui/material";
import { Input } from "../../../common/constants/enums";
import { kurtTheme } from "../../../theme";
import { inputToFormProps } from "../../../common/constants/constants";
import { RequiredFields } from "../../../common/utils/typescriptUtils";

export type TextInputProps = {
  fieldName: Input
} & RequiredFields<TextFieldProps, 'onChange'>

export function TextInput({fieldName, ...rest}: TextInputProps) {

  return (
    <TextField
      sx={{backgroundColor: kurtTheme.palette.background.default, marginY: 2, maxWidth: 400, height: rest.multiline ? 100 : undefined}}
      id={fieldName + "_text"}
      label={inputToFormProps[fieldName]["label"]}
      name={fieldName}
      {...rest}
    />
  )
}