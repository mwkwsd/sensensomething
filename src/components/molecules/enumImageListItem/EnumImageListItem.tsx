import { ImageListItem, ImageListItemBar, useTheme } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { PageEnum, enumMappings } from '../../../common/constants/constants'
import { ImageOverlayText } from '../../atoms/imageOverlayText/ImageOverlayText'

type EnumImageListItemProps = {
  pageEnum: PageEnum
}

export function EnumImageListItem({ pageEnum }: EnumImageListItemProps) {
  const theme = useTheme()
  const borderColor = theme.palette[pageEnum].main
  const { transformLevel, path } = enumMappings[pageEnum].landingPageImage

  const navigate = useNavigate()
  return (
    <ImageListItem
      onClick={() => navigate(enumMappings[pageEnum].url)}
      sx={{ overflow: 'hidden' }}
    >
      <img
        style={{ transform: `scale(${transformLevel || 1.5})` }}
        src={path}
        alt={`link-for-${pageEnum}`}
      />

      <ImageListItemBar
        sx={{ height: '100%', width: '100%' }}
        title={
          <ImageOverlayText
            text={enumMappings[pageEnum].label}
            borderColor={borderColor}
          />
        }
        position="bottom"
      ></ImageListItemBar>
    </ImageListItem>
  )
}
