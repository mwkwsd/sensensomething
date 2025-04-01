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
        sx={{paddingY: "12px", textAlign: 'center'}}
        variant="h5"
      >
        <BsExclamationCircle color='white' size={17} style={{marginRight: "8px"}}/>
        {message}
      </Typography>
    </Container>
  )
}
