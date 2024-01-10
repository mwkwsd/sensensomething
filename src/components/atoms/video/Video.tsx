import React from "react";
import { CardMedia } from "@mui/material";

type VideoProps = {
  url: string;
};

// WIP
export function Video({ url }: VideoProps) {
  return (
    <CardMedia component={"iframe"} src={url} sx={{ aspectRatio: "16/9" }} />
  );
}
