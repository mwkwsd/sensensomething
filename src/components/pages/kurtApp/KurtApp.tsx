import { Outlet } from 'react-router-dom'
import NavBar from '../../templates/NavBar'
import { Footer } from '../../organisms/Footer/Footer'

export function KurtApp() {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  )
}
