import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Home } from './components/templates/Home'
import { VideoListPage } from './components/templates/VideoListPage'
import { ThemeProvider } from '@mui/material/styles'
import { kurtTheme } from './theme'
import { KurtApp } from './components/pages/kurtApp/KurtApp'
import { SeriesDetailPage } from './components/templates/SeriesDetailPage'
import { SeriesListPage } from './components/templates/SeriesListPage'
import {
  getSeriesDetailFromSeriesPath,
  getVideoPageFromVideosPath,
} from './common/utils/utils'
import { About } from './components/templates/About'
import { ErrorBoundary } from './components/templates/ErrorBoundary'

const router = createBrowserRouter([
  {
    element: <KurtApp />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        path: '/videos/:videoPage',
        element: <VideoListPage />,
        loader: ({ params }) => getVideoPageFromVideosPath(params.videoPage),
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
        path: '/about',
        element: <About />,
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
    <ThemeProvider theme={kurtTheme}>
      <RouterProvider router={router}></RouterProvider>
    </ThemeProvider>
  )
}

export default App
