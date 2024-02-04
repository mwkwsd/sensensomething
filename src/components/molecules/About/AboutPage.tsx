import { Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Kurt } from "../../../assets/personalInfo/personalInfo"

export function AboutPage (){
  const navigate = useNavigate()

  const title = Kurt.title
  const description = Kurt.description
  
  return (
    <>
      <Typography variant="h3">{title}</Typography>
      <Typography>{description}</Typography>
      {Kurt.photos.map((photo) => <img src={photo}/>)}
      <Button onClick={() => navigate("/contact")}>Like my work?</Button>
    </>
  )
}