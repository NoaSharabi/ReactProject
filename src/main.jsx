import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Services from'./components/services/Services.jsx'
import Meeting from './components/meeting/Meeting.jsx'
import Admin from './components/admin/Admin.jsx'
import { createBrowserRouter} from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import User from './components/user/User.jsx'
import ServiceClient from './components/serviceClient/ServiceClient.jsx'
const router = createBrowserRouter([
  // {    path: '/',
  // element: <App />,
  // errorElement: <div>error contants</div>},
  {
    path: '/',
    element: <User />,
    errorElement: <div>error contants</div>,
    children: [
      {
        path: ':id',
        element: <ServiceClient />,
        errorElement:<div>error contant not found</div>
      }]
  },
  {
    path: '/admin',
    element: <Admin />,
    errorElement: <div>error admin</div>,
    children: [
      {
        path: '',
        element: <div>empty</div>,
      },
      {
        path: 'services',
        element: <Services/>,
        errorElement: <div>error service not found</div>
      },
      {
        path: 'meeting',
        element: <Meeting/>,
        errorElement: <div>error meeting not found</div>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)