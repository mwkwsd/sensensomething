import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/templates/Home'
import Contact from './components/templates/Contact'
import { About } from './components/templates/About'
import { VideoListPage } from './components/templates/VideoListPage'
import { ThemeProvider } from '@mui/material/styles'
import { kurtTheme } from './theme'
import { KurtApp } from './components/pages/kurtApp/KurtApp'
import { SeriesDetailPage } from './components/templates/SeriesDetailPage'
import { SeriesListPage } from './components/templates/SeriesListPage'
import { getSeriesDetailFromSeriesPath } from './common/utils/utils'

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
        element: <SeriesListPage />,
      },
      {
        path: '/series/:seriesUrl',
        element: <SeriesDetailPage />,
        loader: ({ params }) => getSeriesDetailFromSeriesPath(params.seriesUrl),
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
