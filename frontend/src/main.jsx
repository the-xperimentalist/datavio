import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
  Route
} from 'react-router-dom'
import 'antd/dist/antd.css';
import './index.css'

import Base from './routes/base'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Base />
  }])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
