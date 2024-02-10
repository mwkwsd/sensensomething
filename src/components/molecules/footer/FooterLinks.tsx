import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';

type FooterLinksProps = {
  items: { label: string; link: string }[];
};

export function FooterLinks({ items }: FooterLinksProps) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        color: 'white',
        paddingTop: '30px'
      }}
    >
      {/* {title && (
        <Typography variant="subtitle1" sx={{ fontSize: '10px' }}>
          {title}
        </Typography>
      )} */}
      {items.map((item, index) => (
        <Link
          key={index}
          to={item.link}
          style={{ textDecoration: 'none', color: 'white' }}
        >
          <Typography variant="subtitle1" sx={{ fontSize: '10px'}}>
            {item.label}
          </Typography>
        </Link>
      ))}
    </div>
  );
}
