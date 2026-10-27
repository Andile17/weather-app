import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './App.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Today from './pages/Today.jsx'
import Forecast from './pages/Forecast.jsx'
import WeatherMap from './pages/WeatherMap.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Today />,
      },
      {
        path: "forecast",
        element: <Forecast />,
      },
      {
        path: "map",
        element: <WeatherMap />,
      },
    ],
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
