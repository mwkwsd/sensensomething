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
    title: string,
  ) => {
    const items = enumValues.map(value => ({
      label: enumMappings[value].label,
      link: enumMappings[value].url,
    }))
    return { title, items }
  }

  const roleColumnData = generateColumnData(roles, 'ROLE' )
  const genreColumnData = generateColumnData(genres, 'GENRE' )

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
