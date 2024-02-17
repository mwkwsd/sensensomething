import { Card, useTheme } from "@mui/material";
import { AboutPage } from "../molecules/About/AboutPage";

export function About (){
  const theme = useTheme()

  return (
    <Card elevation={0} variant="outlined" sx={{margin: 4, padding:4, backgroundColor: theme.palette.background.default}}>
      <AboutPage />
    </Card>
  )
}
