import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';

type FooterLinksProps = {
  title: string;
  items: { label: string; link: string }[];
};

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
      {title && (
        <Typography variant="subtitle1" style={{ margin: '5px 0' }}>
          {title}
        </Typography>
      )}
      {items.map((item, index) => (
        <Link
          key={index}
          to={item.link}
          style={{ textDecoration: 'none', color: 'white' }}
        >
          <Typography variant="subtitle1" style={{ margin: '5px 0' }}>
            {item.label}
          </Typography>
        </Link>
      ))}
    </div>
  );
}
