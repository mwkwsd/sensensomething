import { Link } from 'react-router-dom'
import { Typography } from '@mui/material'

type FooterLinksProps = {
  items: { label: string; link: string }[]
}

export function FooterLinks({ items }: FooterLinksProps) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        color: 'white',
        paddingTop: '30px',
        maxWidth: '75px',
      }}
    >
      {items.map((item, index) => (
        <Link
          key={index}
          to={item.link}
          style={{
            textDecoration: 'none',
            color: 'white',
            padding: '0.25rem',
          }}
        >
          <Typography variant="subtitle1" sx={{ fontSize: '0.75rem' }}>
            {item.label}
          </Typography>
        </Link>
      ))}
    </div>
  )
}
