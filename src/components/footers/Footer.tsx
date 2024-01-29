import { FooterLinks } from '../molecules/footers/FooterLinks';
import { navLinks, roles, genres } from '../../common/constants/enums';
import { BottomIcons } from '../molecules/footers/BottomIcons';

export function Footer() {
  const generateColumnData = (enumValues: string[], title: string) => {
    const items = enumValues.map((value) => value.replace('_', ' '));
    return { title, items };
  };

  const roleColumnData = generateColumnData(roles, 'ROLE');
  const genreColumnData = generateColumnData(genres, 'GENRE');

  return (
    <div style={{ display: 'flex', flexDirection: 'column', backgroundColor: '#2D2D2D', padding: '10px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
        <FooterLinks title="" items={navLinks.map((link) => link.label)} />

        <FooterLinks title={roleColumnData.title} items={roleColumnData.items} />

        <FooterLinks title={genreColumnData.title} items={genreColumnData.items} />
      </div>

      <BottomIcons />
    </div>
  );
}
