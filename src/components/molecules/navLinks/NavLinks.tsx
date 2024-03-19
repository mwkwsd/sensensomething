import { ListItemButton, ListItemText } from '@mui/material'

type NavLinksProps = {
  label: string
  onClick: () => void
}

export function NavLinks({ label, onClick }: NavLinksProps) {
  return (
    <ListItemButton onClick={onClick} sx={{ textAlign: 'right' }}>
      <ListItemText primary={label} />
    </ListItemButton>
  )
}