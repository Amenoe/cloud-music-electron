import { lazy } from 'react'
import { Navigate, RouteObject, createBrowserRouter } from 'react-router-dom'

// import Loading from '@/components/Loading'
import Demo from '@/pages/demo'
import { lazyLoad } from './lazyLoad'
import Layout from '@/layouts/Layout'

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to={'/demo'} />
  },
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/discover',
        element: lazyLoad(
          lazy(() => import('@/pages/discover')),
          null
        ),
        // Component: lazy(() => import('@/pages/discover')),
        children: [
          {
            path: '/discover',
            element: <Navigate to={'/discover/recommend'} />
          },
          {
            path: '/discover/recommend',
            Component: lazy(() => import('@/pages/discover/recommend'))
          },
          {
            path: '/discover/toplist',
            Component: lazy(() => import('@/pages/discover/toplist'))
          },
          {
            path: '/discover/playlist',
            Component: lazy(() => import('@/pages/discover/playlist'))
          },
          {
            path: '/discover/djradio',
            Component: lazy(() => import('@/pages/discover/djradio'))
          },
          {
            path: '/discover/artist',
            Component: lazy(() => import('@/pages/discover/artist'))
          }
        ]
      },
      {
        path: '/friend',
        element: lazyLoad(
          lazy(() => import('@/pages/friend')),
          null
        )
      },
      {
        path: '/download',
        element: lazyLoad(
          lazy(() => import('@/pages/download')),
          null
        )
      },
      {
        path: '/mine',
        element: lazyLoad(
          lazy(() => import('@/pages/mine')),
          null
        )
      },
      {
        path: '/demo',
        element: <Demo />
      }
    ]
  }
]

const router = createBrowserRouter(routes, {
  basename: import.meta.env.VITE_BASE_URL
})

export default router
