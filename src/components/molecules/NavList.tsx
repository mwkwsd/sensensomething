import { List } from '@mui/material'
import { useMemo } from 'react'
import { enumMappings } from '../../common/constants/constants'
import { Genre, Role, navLinks } from '../../common/constants/enums'
import { NavLinks } from './navLinks/NavLinks'

const orderedLinks: (Genre | Role)[] = [
  'animation',
  'documentary',
  'director_of_photography',
  'director_producer',
  'series',
]

export function NavList() {
  const secondNavLinks = useMemo(
    () =>
      orderedLinks.map(linkEnum => {
        const navLink = {
          route: enumMappings[linkEnum].url,
          label: enumMappings[linkEnum].label,
        }
        return <NavLinks navLink={navLink} key={`nav-link-${linkEnum}`} />
      }),
    []
  )

  const firstNavLinks = useMemo(
    () =>
      navLinks.map((item, index) => (
        <NavLinks key={`nav-link-${item.label}-${index}`} navLink={item} />
      )),
    []
  )

  return (
    <div
      style={{
        height: '100%',
        backgroundColor: 'black',
        fontWeight: 'bold',
        color: 'white',
        fontSize: 20,
        textAlign: 'right',
        overflowY: 'hidden',
        paddingLeft: 10,
        paddingRight: 10,
      }}
    >
      <List
        sx={{
          width: '100%',
          paddingBottom: '20px',
          maxWidth: 360,
        }}
        component="nav"
      >
        {firstNavLinks}
      </List>

      <List
        sx={{
          width: '100%',
          height: '100%',
          maxWidth: 360,
        }}
        component="nav"
      >
        {secondNavLinks}
      </List>
    </div>
  )
}
