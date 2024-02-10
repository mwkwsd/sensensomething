import { Card } from "@mui/material";
import { AboutPage } from "../molecules/About/AboutPage";

export function About (){
  return (
    <Card elevation={0} variant="outlined" sx={{margin: 4, padding:4}}>
      <AboutPage />
    </Card>
  )
}
