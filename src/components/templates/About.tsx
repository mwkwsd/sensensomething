import { Card, Typography } from "@mui/material";
import { AboutPage } from "../molecules/About/AboutPage";

export function About (){
  return (
    <Card>
      <Typography variant={"h3"}>About</Typography>
      <AboutPage />
    </Card>
  )
}
