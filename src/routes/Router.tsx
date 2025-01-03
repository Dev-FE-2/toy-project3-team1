import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from '@/pages/Home'
import Layout from '@/components/Layout/Layout'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />
      }
    ]
  }
])

export default function Router() {
  return <RouterProvider router={router} />
}
