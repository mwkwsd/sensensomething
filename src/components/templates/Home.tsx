import { PageEnum } from '../../common/constants/constants'
import { LandingPageLinks } from '../organisms/landingPageLinks/LandingPageLinks'
import Contact from './Contact'

const orderedLinks: PageEnum[] = [
  'director_producer',
  'director_of_photography',
  'documentary',
  'animation',
  'series',
]

export function Home() {
  return (
    <>
      <LandingPageLinks pages={orderedLinks} />
      <Contact />
    </>
  )
}
