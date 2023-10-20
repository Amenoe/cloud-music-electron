import { lazy } from 'react'
import { Navigate, RouteObject } from 'react-router-dom'

import Demo from '@/pages/demo'

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to={'/discover'} />
  },
  {
    path: '/',
    Component: lazy(() => import('@/pages/discover')),
    children: [
      // {
      //   path: '/discover',
      //   element: <Navigate to={'/discover/recommend'} />
      // },
      {
        path: '/discover',
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
    Component: lazy(() => import('@/pages/friend'))
  },
  {
    path: '/download',
    Component: lazy(() => import('@/pages/download'))
  },
  {
    path: '/mine',
    Component: lazy(() => import('@/pages/mine'))
  },
  {
    path: '/demo',
    element: <Demo />
  }
]

export default routes
