import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from '@/pages/Home'
import Layout from '@/components/Layout/Layout'
import Login from '@/pages/login'
import Signup from '@/pages/signup'
import Mypage from '@/pages/mypage'
import View from '@/pages/view'
import NotFound from '@/pages/notfound'

// const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
//   const session = supabase.auth.getSession()

//   if (!session) {
//     return (
//       <Navigate
//         to="/login"
//         replace
//       />
//     )
//   }

//   return <>{children}</>
// }

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/login', element: <Login /> },
      { path: '/signup', element: <Signup /> },
      {
        path: '/mypage',
        element: (
          // <ProtectedRoute>
          <Mypage />
          // </ProtectedRoute>
        )
      },
      {
        path: '/detail/:id',
        element: (
          // <ProtectedRoute>
          <View />
          // </ProtectedRoute>
        )
      }
    ]
  },
  { path: '*', element: <NotFound /> }
])

export default function Router() {
  return <RouterProvider router={router} />
}
