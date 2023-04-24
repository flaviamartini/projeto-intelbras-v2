import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './components/pages/HomePage/HomePage';
import ConfigurePage from './components/pages/ConfigurePage/ConfigurePage';
import Welcome from './components/pages/Welcome/welcome';

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element:<Welcome/>
      },
      {
        path: "/config",
        element:<ConfigurePage/>
      },
      {
        path: "/home",
        element:<HomePage/>
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
