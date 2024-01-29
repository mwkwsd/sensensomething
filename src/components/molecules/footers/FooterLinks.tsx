
type FooterLinksProps = {
  title: string;
  items: string[];
};

export function FooterLinks({ title, items }: FooterLinksProps) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', color: 'white', marginBottom: '10px' }}>
      <p style={{ margin: '5px 0', fontWeight: 'bold' }}>{title}</p>
      {items.map((item, index) => (
        <p key={index} style={{ margin: '5px 0' }}>
          {item}
        </p>
      ))}
    </div>
  );
}
