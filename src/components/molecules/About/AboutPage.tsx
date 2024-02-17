import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { Kurt } from "../../../assets/personalInfo/personalInfo"

export function AboutPage() {
  const title = Kurt.title
  const description = Kurt.description
  
  return (
    <>
      <Typography variant="h3">{title}</Typography>
      <Typography>{description}</Typography>
      <Box display="flex" alignContent="center" justifyContent="center">
        {Kurt.photos.map((photo) => <img src={photo.path} alt={photo.alt} style={{height: "100%", width: "100%"}}/>)}
      </Box>
      <Link to="/#contact">Like my work?</Link> 
    </>
  )
}