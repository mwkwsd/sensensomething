import { enumMappings } from '../../../common/constants/constants'
import {
  Genre,
  Role,
  genres,
  navLinks,
  roles,
} from '../../../common/constants/enums'
import { BottomIcons } from '../../molecules/footer/BottomIcons'
import { FooterLinks } from '../../molecules/footer/FooterLinks'

function generateColumnData(
  enumValues: readonly Genre[] | readonly Role[]
): { label: string; link: string }[] {
  return enumValues.map(value => ({
    label: enumMappings[value].label,
    link: enumMappings[value].url,
  }))
}

export function Footer() {
  const roleColumnData = generateColumnData(roles)
  const genreColumnData = generateColumnData(genres)

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
        marginTop: '16px',
        backgroundColor: '#191B1B',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: '10px',
        }}
      >
        <FooterLinks items={transformedNavLinks} />

        <FooterLinks items={roleColumnData} />

        <FooterLinks items={genreColumnData} />
      </div>

      <BottomIcons />
    </div>
  )
}
