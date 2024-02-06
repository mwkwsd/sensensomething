import { Button, ButtonProps, Typography } from '@mui/material'

type UnderlinedButtonProps = { label: string } & ButtonProps

export function UnderlinedButton({
  label,
  ...buttonProps
}: UnderlinedButtonProps) {
  return (
    <Button {...buttonProps}>
      <Typography variant="button">{label}</Typography>
    </Button>
  )
}
