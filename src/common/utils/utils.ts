import { genreToText, roleToText } from "../constants/constants";
import { Genre, Role, genreTypeChecker } from "../constants/enums";

export function convertFromEnumToText(arg: Genre | Role): string {
  if (genreTypeChecker(arg)) {
    return genreToText[arg];
  } /* assume arg is Role */ else {
    return roleToText[arg];
  }
}
