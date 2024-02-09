import { ImageListItem, ImageListItemBar, useTheme } from '@mui/material'
import { PageEnum, enumMappings } from '../../../common/constants/constants'
import { ImageOverlayText } from '../../atoms/imageOverlayButton/ImageOverlayText'

type EnumImageListItemProps = {
  pageEnum: PageEnum
}

export function EnumImageListItem({ pageEnum }: EnumImageListItemProps) {
  const theme = useTheme()
  const borderColor = theme.palette[pageEnum].main
  const { transformLevel, path } = enumMappings[pageEnum].landingPageImage
  return (
    <ImageListItem sx={{ overflow: 'hidden' }}>
      <img
        style={{ transform: `scale(${transformLevel || 1.5})` }}
        src={path}
        alt={`link-for-${pageEnum}`}
      />

      <ImageListItemBar
        onClick={() => console.log('Clicked: ', pageEnum)}
        sx={{ height: '100%', width: '100%' }}
        title={
          <ImageOverlayText
            text={enumMappings[pageEnum].label.toLocaleUpperCase()}
            borderColor={borderColor}
          />
        }
        position="bottom"
      ></ImageListItemBar>
    </ImageListItem>
  )
}
