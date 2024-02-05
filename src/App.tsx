import { useMemo } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/templates/Home'
import Contact from './components/templates/Contact'
import { VideoListPage } from './components/templates/VideoListPage'
import SeriesPage from './components/templates/SeriesPage'
import AnimationPage from './components/templates/AnimationPage'
import { ThemeProvider } from '@mui/material/styles'
import { kurtTheme } from './theme'
import { Footer } from './components/organisms/Footer/Footer'
import { NavBar } from './components/templates/NavBar'

function App() {
  const memoizedFooter = useMemo(() => <Footer />, [])

  return (
    <>
      <ThemeProvider theme={kurtTheme}>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/videos" element={<VideoListPage />} />
            <Route path="/series" element={<SeriesPage />} />
            <Route path="/animation" element={<AnimationPage />} />
          </Routes>
          {memoizedFooter}
        </BrowserRouter>
      </ThemeProvider>
    </>
  )
}

export default App
