import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import LoginPage from './pages/login'
import RegisterPage from './pages/register.jsx'
import ErrorPage from './pages/ErrorPage.jsx'

const router = createBrowserRouter( [
  {
    path: "/",
    element:<div>Hello World</div>,
    errorElement:<ErrorPage/>,
  },
  {
    path: "/login",
    element:<LoginPage />,
  },
  {
    path: "/register",
    element:<RegisterPage />,
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
