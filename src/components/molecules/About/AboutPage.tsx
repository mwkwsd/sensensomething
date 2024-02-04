import { Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Kurt } from "../../../assets/personalInfo/personalInfo"

export function AboutPage (){
  const navigate = useNavigate()

  const name = Kurt.name
  const description = Kurt.description
  
  return (
    <>
      <Typography>{name}</Typography>
      <Typography>{description}</Typography>
      <Button onClick={() => navigate("/contact")}>Like my work?</Button>
    </>
  )
}