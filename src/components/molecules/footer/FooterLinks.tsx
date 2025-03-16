import { Stack, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

type FooterLinksProps = {
  items: { label: string; link: string }[]
}

export function FooterLinks({ items }: FooterLinksProps) {
  return (
    <Stack flexDirection="column" flexGrow={1} justifyContent="space-between">
      {items.map(item => (
        <Link key={`${item.label}-footer-nav`} to={item.link}>
          <Typography
            variant="subtitle1"
            sx={{ textDecoration: 'none', paddingY: '0.75rem' }}
          >
            {item.label}
          </Typography>
        </Link>
      ))}
    </Stack>
  )
}
