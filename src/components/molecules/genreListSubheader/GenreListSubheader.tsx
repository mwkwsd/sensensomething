import { ListSubheader } from '@mui/material';
import { AnimationButton } from '../../atoms/buttons/animationButton/AnimationButton';
import { SeriesButton } from '../../atoms/buttons/seriesButton/SeriesButton';
import { DocumentaryButton } from '../../atoms/buttons/documentaryButton/DocumentaryButton';


interface GenreListSubheaderProps {
  isLinkSelected: (link: string) => boolean;
  generateButtonStyle: (isSelected: boolean) => React.CSSProperties;
}

export function GenreListSubheader({ isLinkSelected, generateButtonStyle }: GenreListSubheaderProps) {
  const commonStyle = {
    fontWeight: 'bold',
    bgcolor: 'black',
    color: 'white',
    fontSize: 20,
    textAlign: 'right',
  };

  return (
    <ListSubheader component="div" sx={{ ...commonStyle }}>
      ROLE
      <AnimationButton
        isSelected={isLinkSelected('/video-list?filter=animation')}
        generateButtonStyle={generateButtonStyle}
        isLinkSelected={isLinkSelected} 
      />
      <SeriesButton
        isSelected={isLinkSelected('/video-list?filter=series')}
        generateButtonStyle={generateButtonStyle}
        isLinkSelected={isLinkSelected} 
      />
      <DocumentaryButton
        isSelected={isLinkSelected('/video-list?filter=documentary')}
        generateButtonStyle={generateButtonStyle}
        isLinkSelected={isLinkSelected} 
      />
    </ListSubheader>
  );
}


