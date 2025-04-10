import { ThemeProvider } from '@mui/material/styles'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import {
  getSeriesDetailFromSeriesPath,
  getVideoPageFromVideosPath,
} from './common/utils/utils'
import { ModalProvider } from './components/organisms/modal/ModalProvider'
import { KurtApp } from './components/pages/kurtApp/KurtApp'
import { About } from './components/templates/About'
import { Gear } from './components/templates/Gear'
import { ErrorBoundary } from './components/templates/ErrorBoundary'
import { Home } from './components/templates/Home'
import { SeriesDetailPage } from './components/templates/SeriesDetailPage'
import { SeriesListPage } from './components/templates/SeriesListPage'
import { VideoListPage } from './components/templates/VideoListPage'
import { kurtTheme } from './theme'

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
        path: '/gear',
        element: <Gear />,
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
      <ModalProvider>
        <RouterProvider router={router} />
      </ModalProvider>
    </ThemeProvider>
  )
}

export default App
