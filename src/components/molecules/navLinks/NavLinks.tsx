import { ListItemButton, ListItemText, useTheme } from '@mui/material'

type NavLinksProps = {
  label: string
  onClick: () => void
  isSelected?: boolean
}

export function NavLinks({ label, onClick, isSelected }: NavLinksProps) {
  const theme = useTheme()

  return (
    <ListItemButton
      onClick={onClick}
      sx={{
        textAlign: 'right',
        borderBottom: isSelected
          ? `2px solid ${theme.palette.series.main}`
          : 'none',
      }}
    >
      <ListItemText primary={label} />
    </ListItemButton>
  )
}
