import { ImageList, useTheme, useMediaQuery } from '@mui/material'
import { PageEnum } from '../../../common/constants/constants'
import { EnumImageListItem } from '../../molecules/enumImageListItem/EnumImageListItem'

type LandingPageLinksProps = {
  pages: PageEnum[]
}

export function LandingPageLinks({ pages }: LandingPageLinksProps) {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.up('md'))
  return (
    <ImageList cols={matches ? 2 : 1} gap={0} sx={{ margin: '0px' }}>
      {pages.map(pageEnum => (
        <EnumImageListItem pageEnum={pageEnum} key={`${pageEnum}-image-link`} />
      ))}
    </ImageList>
  )
}
