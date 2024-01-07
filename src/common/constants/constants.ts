import { Genre, Role } from "./enums";

export const roleToText: { [key in Role]: string } = {
  camera_operator: "Camera Operator",
  director_producer: "Director & Producer",
} as const;

export const genreToText: { [key in Genre]: string } = {
  animation: "Animation",
  documentary: "Documentary",
  series: "Series",
} as const;
