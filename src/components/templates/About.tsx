import { Card, Typography } from "@mui/material";
import { AboutPage } from "../molecules/About/AboutPage";

export function About (){
  return (
    <Card elevation={0} variant="outlined" sx={{margin: 4, padding:4}}>
      {/* <Typography variant={"h3"}>About</Typography> */}
      <AboutPage />
    </Card>
  )
}
