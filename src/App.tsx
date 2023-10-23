import React, { Suspense, memo } from 'react'
import { RouterProvider } from 'react-router-dom'
import router from './routes'
const App = memo(() => {
  return (
    <div>
      <Suspense fallback="Loading...">
        <div className="main">
          <RouterProvider router={router} />
        </div>
      </Suspense>
    </div>
  )
})

export default App
