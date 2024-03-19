import { useMemo } from 'react'
import { Outlet } from 'react-router-dom'
import { Footer } from '../../organisms/Footer/Footer'
import { VideoModal } from '../../organisms/modal/VideoModal'
import { NavBar } from '../../templates/NavBar'

export function KurtApp() {
  const navBar = useMemo(() => <NavBar />, [])
  const footer = useMemo(() => <Footer />, [])
  return (
    <>
      {navBar}
      <VideoModal />
      <Outlet />
      {footer}
    </>
  )
}
