import { Button, SxProps, Typography } from '@mui/material'

type OutlinedButtonProps = {
  color: string
  text: string
  sx?: SxProps
  onClick?: () => void
  component?: React.ElementType
  to?: string
}
export function OutlinedButton({
  color,
  text,
  sx,
  onClick,
  component,
  to,
}: OutlinedButtonProps) {
  return (
    <Button
      component={component ?? 'button'}
      onClick={onClick}
      to={to}
      size="small"
      sx={{
        whiteSpace: 'nowrap',
        borderRadius: '0',
        padding: '0.875rem 0',
        flex: '0 50%',
        border: `1px solid ${color}`,
        ...sx,
      }}
    >
      <Typography variant="button" sx={{ color }}>
        {text}
      </Typography>
    </Button>
  )
}
