import { FooterLinks } from '../../molecules/footer/FooterLinks'
import {
  navLinks,
  roles,
  genres,
  Role,
  Genre,
} from '../../../common/constants/enums'
import { BottomIcons } from '../../molecules/footer/BottomIcons'
import { kurtTheme } from '../../../theme'
import { enumMappings } from '../../../common/constants/constants'

export function Footer() {
  const generateColumnData = (
    enumValues: readonly Genre[] | readonly Role[],
  ) => {
    const items = enumValues.map(value => ({
      label: enumMappings[value].label,
      link: enumMappings[value].url,
    }))
    return { items }
  }

  const roleColumnData = generateColumnData(roles )
  const genreColumnData = generateColumnData(genres )

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

        <FooterLinks
          items={roleColumnData.items}
        />


        <FooterLinks
          items={genreColumnData.items}
        />
      </div>

      <BottomIcons />
    </div>
  )
}
