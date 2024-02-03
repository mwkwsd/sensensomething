import { FooterLinks } from '../../molecules/footers/FooterLinks'
import { navLinks, roles, genres } from '../../../common/constants/enums'
import { BottomIcons } from '../../molecules/footers/BottomIcons'
import { kurtTheme } from '../../../theme'

export function Footer() {
  const generateColumnData = (
    enumValues: string[],
    title: string,
    prefix: string = ''
  ) => {
    const items = enumValues.map(value => ({
      label: value.replace('_', ' '),
      link: `/${prefix}${value.toLowerCase().replace('_', '-')}`,
    }))
    return { title, items }
  }

  const roleColumnData = generateColumnData(roles, 'ROLE', 'video-list-page?role=')
  const genreColumnData = generateColumnData(
    genres,
    'GENRE',
    'video-list-page?genre='
  )

  const transformedNavLinks = navLinks.map(({ route, label }) => ({
    label,
    link: route,
  }))

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        padding: '10px',
        backgroundColor: kurtTheme.palette.background.default,
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: '10px',
        }}
      >
        <FooterLinks title="" items={transformedNavLinks} />

        <FooterLinks
          title={roleColumnData.title}
          items={roleColumnData.items}
        />

        <FooterLinks
          title={genreColumnData.title}
          items={genreColumnData.items}
        />
      </div>

      <BottomIcons />
    </div>
  )
}
