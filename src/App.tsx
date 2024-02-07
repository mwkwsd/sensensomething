import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/templates/Home'
import Contact from './components/templates/Contact'
import { VideoListPage } from './components/templates/VideoListPage'
import SeriesPage from './components/templates/SeriesPage'
import AnimationPage from './components/templates/AnimationPage'
import { ThemeProvider } from '@mui/material/styles'
import { kurtTheme } from './theme'
import { KurtApp } from './components/pages/kurtApp/KurtApp'

const router = createBrowserRouter([
  {
    element: <KurtApp />,
    children: [
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/videos',
        element: <VideoListPage />,
      },
      {
        path: '/series',
        element: <SeriesPage />,
      },
      {
        path: '/series/low-phe-life',
        element: <AnimationPage />,
      },
      {
        element: <Home />,
        index: true,
      },
    ],
  },
])

function App() {
  return (
    <>
      <ThemeProvider theme={kurtTheme}>
        <RouterProvider router={router}></RouterProvider>
      </ThemeProvider>
    </>
  )
}

export default App
