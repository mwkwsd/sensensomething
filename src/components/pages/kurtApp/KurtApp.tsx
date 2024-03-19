import { useMemo } from 'react'
import { Outlet } from 'react-router-dom'
import { ScrollToHasElement } from '../../atoms/utilityComponents/ScrollToHashElement'
import { Footer } from '../../organisms/Footer/Footer'
import { VideoModal } from '../../organisms/modal/VideoModal'
import { NavBar } from '../../templates/NavBar'

export function KurtApp() {
  const navBar = useMemo(() => <NavBar />, [])
  const footer = useMemo(() => <Footer />, [])
  return (
    <>
      <ScrollToHasElement />
      {navBar}
      <VideoModal />
      <Outlet />
      {footer}
    </>
  )
}
