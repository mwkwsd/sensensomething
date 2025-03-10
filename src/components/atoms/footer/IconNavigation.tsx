import { BottomNavigationAction } from '@mui/material'
import { ReactElement } from 'react'

type IconNavigationProps = {
  icon: React.ReactNode
  href: string
  sx: React.CSSProperties // Add this line to include styling prop. (Note for myself)
}

export function IconNavigation({
  icon,
  href,
  sx,
}: IconNavigationProps): ReactElement {
  return (
    <BottomNavigationAction
      icon={icon}
      sx={{ color: 'white', fontSize: '30px', ...sx }}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    />
  )
}
