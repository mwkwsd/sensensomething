import { Box, Typography } from '@mui/material'
import { PageTitle } from '../../atoms/pageTitle/PageTitle'
import { Contact } from '../../templates/Contact'
import { gearList } from '../../../assets/gear/gearList'

export function GearPage() {
  return (
    <>
      <PageTitle
        title="Gear / Gear for Rent"
        fullWidth={true}
        sx={{ padding: '1rem 1rem' }}
      />
      <Box component="ul" sx={{ paddingX: '1rem' }}>
        {gearList.map(section => (
          <Box key={section.category} sx={{ marginBottom: '1.5rem' }}>
            <Typography variant="h2" sx={{ marginBottom: '0.5rem' }}>
              {section.category}
            </Typography>
            <Box
              component="ul"
              sx={{ paddingLeft: '1.5rem', listStyle: 'none' }}
            >
              {section.items.map((item, itemIndex) => (
                <Typography key={itemIndex} component="li" variant="h3">
                  {item}
                </Typography>
              ))}
            </Box>
          </Box>
        ))}
      </Box>
      <Contact />
    </>
  )
}
