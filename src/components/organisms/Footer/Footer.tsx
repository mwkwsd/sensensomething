import { Stack } from '@mui/material'
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
    <Stack
      spacing={1.5}
      sx={{ backgroundColor: '#191B1B', padding: '2.5rem 1rem 2rem' }}
      direction="column"
    >
      <Stack
        component="nav"
        direction="row"
        spacing={3}
        justifyContent="space-between"
      >
        <FooterLinks items={transformedNavLinks} />

        <FooterLinks items={roleColumnData} />

        <FooterLinks items={genreColumnData} />
      </Stack>

      <BottomIcons />
    </Stack>
  )
}
