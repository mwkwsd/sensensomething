import { TextField, TextFieldProps } from "@mui/material";
import { convertFromEnumToText } from "../../../common/utils/utils";
import { Input } from "../../../common/constants/enums";
import { kurtTheme } from "../../../theme";

export type TextInputProps = {
  fieldName: Input
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
} & TextFieldProps

export function TextInput({fieldName, ...rest}: TextInputProps) {

  return (
    <TextField 
      sx={{backgroundColor: kurtTheme.palette.background.default, marginY: 2, maxWidth: 400, height: rest.multiline ? 100 : undefined}}
      id={fieldName + "_text"}
      label={convertFromEnumToText(fieldName)}
      name={fieldName}
      {...rest}
    />
  )
}