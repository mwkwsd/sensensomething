import { Outlet } from 'react-router-dom'
import NavBar from '../../templates/NavBar'
import { Footer } from '../../organisms/Footer/Footer'
import { useMemo } from 'react'

export function KurtApp() {
  const navBar = useMemo(() => <NavBar />, [])
  const footer = useMemo(() => <Footer />, [])
  return (
    <>
      {navBar}
      <Outlet />
      {footer}
    </>
  )
}
