import { Link } from 'react-router-dom'

type FooterLinksProps = {
  title: string
  items: { label: string; link: string }[]
}

export function FooterLinks({ title, items }: FooterLinksProps) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        color: 'white',
        marginBottom: '10px',
      }}
    >
      <p style={{ margin: '5px 0', fontWeight: 'bold' }}>{title}</p>
      {items.map((item, index) => (
        <Link
          key={index}
          to={item.link}
          style={{ textDecoration: 'none', color: 'white' }}
        >
          <p style={{ margin: '5px 0' }}>{item.label}</p>
        </Link>
      ))}
    </div>
  )
}
