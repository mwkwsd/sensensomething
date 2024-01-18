import React from 'react'
import { ListSubheader } from '@mui/material'
import { DirectorProducerButton } from '../../atoms/buttons/directorProducerButton/DirectorProducerButton'
import { CameraOperatorButton } from '../../atoms/buttons/cameraOperatorButton/CameraOperatorButton'

interface RoleListSubheaderProps {
  isLinkSelected: (link: string) => boolean
  generateButtonStyle: (isSelected: boolean) => React.CSSProperties
}

export function RoleListSubheader({
  isLinkSelected,
  generateButtonStyle,
}: RoleListSubheaderProps) {
  const commonStyle = {
    fontWeight: 'bold',
    bgcolor: 'black',
    color: 'white',
    fontSize: 20,
    textAlign: 'right',
  }

  return (
    <ListSubheader component="div" sx={{ ...commonStyle }}>
      ROLE
      <DirectorProducerButton
        isSelected={isLinkSelected('/video-list?filter=director-producer')}
        generateButtonStyle={generateButtonStyle}
        isLinkSelected={isLinkSelected}
      />
      <CameraOperatorButton
        isSelected={isLinkSelected('/video-list?filter=camera-operator')}
        generateButtonStyle={generateButtonStyle}
        isLinkSelected={isLinkSelected}
      />
    </ListSubheader>
  )
}
