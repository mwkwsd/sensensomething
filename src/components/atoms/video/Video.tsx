import React from 'react'
import { CardMedia } from "@mui/material";

type VideoProps = {
  url: string;
};

// WIP
export function Video({ url }: VideoProps) {
  return <CardMedia src={url} component={"iframe"} />;
}
