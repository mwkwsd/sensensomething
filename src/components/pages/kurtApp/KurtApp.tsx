import { Outlet } from 'react-router-dom'
import { ScrollToHashElement } from '../../atoms/utilityComponents/ScrollToHashElement'
import { Footer } from '../../organisms/Footer/Footer'
import { VideoModal } from '../../organisms/modal/VideoModal'
import { NavBar } from '../../templates/NavBar'

export function KurtApp() {
  return (
    <>
      <ScrollToHashElement />
      <NavBar />
      <VideoModal />
      <Outlet />
      <Footer />
    </>
  )
}
