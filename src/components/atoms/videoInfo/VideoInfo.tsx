import { Typography } from '@mui/material'
<<<<<<< HEAD
=======
// import { ReactNode } from 'react'
// import { Link } from 'react-router-dom'
>>>>>>> 2bd2e9fc057e4cb3a79011414c64465a08d8563e

type VideoInfoProps = {
  label: string
  info: string
}

export function VideoInfo({ label, info }: VideoInfoProps) {
  return (
    <Typography variant="body1">
      <b>{label}: </b>
      {info}
    </Typography>
  )
}