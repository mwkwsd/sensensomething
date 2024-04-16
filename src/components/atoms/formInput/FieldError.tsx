import { Container, Typography, useTheme } from '@mui/material'
import { BsExclamationCircle } from "react-icons/bs"


type FieldErrorProps = {
  message: string
}

export function FieldError({ message }: FieldErrorProps) {
  const theme = useTheme()

  return (
    <Container sx={{ bgcolor: theme.palette.error.main, textAlign: "center", marginTop: "8px"  }} disableGutters={true}>
      <Typography
        sx={{paddingY: "12px"}}
        variant="body1"
      >
        <BsExclamationCircle color='white' style={{marginRight: "8px"}}/>
        {message}
      </Typography>
    </Container>
  )
}
